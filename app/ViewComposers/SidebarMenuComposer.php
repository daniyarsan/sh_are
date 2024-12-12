<?php

namespace App\ViewComposers;

use Illuminate\View\View;

class SidebarMenuComposer
{


    public function compose(View $view)
    {
        $menu = [
            'Main' => [
                ['route' => 'admin.index', 'label' => 'Дашбоард', 'icon' => 'fa fa-home']
            ],
            'Projects' => [
                ['route' => 'admin.project.index', 'label' => 'Список', 'icon' => 'fa fa-list'],
                ['route' => 'admin.project.create', 'label' => 'Добавить', 'icon' => 'fa fa-plus'],
            ],
            'Participants' => [
                ['route' => 'admin.company.index', 'label' => 'Список', 'icon' => 'fa fa-list'],
                ['route' => 'admin.company.create', 'label' => 'Добавить', 'icon' => 'fa fa-plus'],
            ],

            'Input' => [
                ['route' => 'admin.investment.index', 'label' => 'Вклады', 'icon' => 'fa fa-list'],
                ['route' => 'admin.payment.index', 'label' => 'Платежи по вкладам', 'icon' => 'fa fa-money'],
                ['route' => 'admin.investment.create', 'label' => 'Добавить Вклад', 'icon' => 'fa fa-plus'],
            ],

            'Help' => [
                ['route' => 'admin.application.index', 'label' => 'Список', 'icon' => 'fa fa-list'],
                ['route' => 'admin.application.create', 'label' => 'Создать', 'icon' => 'fa fa-plus'],
            ],

            'Settings' => [],
        ];

        $view->with(['navigation' => $menu]);
    }
}
