<?php

namespace App\Actions;

use App\Actions\Contracts\InvestmentActionContract;
use App\Actions\DTO\InvestmentCreateDTO;
use App\Models\Company;
use App\Models\Investment;
use App\Models\PaymentAddress;
use App\Models\Project;

class InvestmentAction extends InvestmentActionContract
{

    public function create(InvestmentCreateDTO $DTO):void
    {
        $this->_storeEntity($DTO);
    }


    public function update(int $id, InvestmentCreateDTO $DTO)
    {
        $entity = Investment::find($id);
        if (!$entity) {
            return redirect()->back()->withErrors([
                'Обьект не найден',
            ]);
        }

        $this->_storeEntity($DTO, $entity);
    }

    protected function _storeEntity(InvestmentCreateDTO $DTO, Investment $entity = null)
    {
        $data = [
            'company_id' => $DTO->company_id,
            'project_id' => $DTO->project_id,
            'status' => $DTO->status,
        ];

        $project = Project::find($DTO->project_id);
        if (!$project->exists()) {
            throw new \Exception('Такого проекта не существует');
        }
        $company = Company::find($DTO->company_id);
        if (!$company->exists()) {
            throw new \Exception('Такой компании не существует');
        }

        if (!$entity) {
            $entity = Investment::query()->create($data);
            $randomAddress = PaymentAddress::randomFree()->first();
            $randomAddress->investment_id = $entity->id;
            $randomAddress->save();
        } else {
            $entity->update($data);
        }
    }


    public function expireInvestments(): void
    {
        /* Get all expired investments */
        $investments = Investment::query()->expired()->fresh()->get();

        /* Cancel investments with related payments */
        foreach ($investments as $investment) {
            $investment->payment()->update([
                'status' => 'canceled'
            ]);

            $investment->status = 'canceled';

            $investment->save();
        }
    }

}
