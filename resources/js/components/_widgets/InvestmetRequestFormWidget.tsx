import { useEffect, useState } from 'react';
import InvestmentForm from '@/components/form/InvestmentForm';
import { Link } from '@inertiajs/react';
import DataTable, { TableColumn } from 'react-data-table-component';
import React from 'react';
import { Investment, Project } from '@/types';
import { fetchInvestments } from '@/components/_api/api';
import Animate from "@/components/_elements/Animate";
import funds from '../../../animations/funds.json';


type InvestmetRequestFormWidgetProps = {
  currentProject: Project;
};
export default function InvestmetRequestFormWidget({
  currentProject,
}: InvestmetRequestFormWidgetProps) {
  const [tableOptions, setTableOptions] = useState<Investment[]>([]);
  const [project, setProject] = useState<number | null>(currentProject.id);

  useEffect(() => {
    fetchInvestments({ project: project }).then((data) => {
      setTableOptions(data);
    });
  }, [project]);

  // Typing the handleProjectsChange function parameter
  const handleProjectsChange = (value: string | null) => {
    setProject(Number(value));
  };

  const columns: TableColumn<Investment>[] = [
    {
      id: 'project',
      name: 'Subject',
      selector: (row) => row.project.name,
      sortable: true,
      width: '35%',
      cell: (cell) => {
        const link = cell.project.custom_url
          ? cell.project.custom_url
          : `project/${cell.project.slug}`;
        return <Link href={link}>{cell.project.name}</Link>;
      },
    },
    {
      id: 'company',
      name: 'Sender',
      selector: (row) => row.company.name,
      sortable: true,
      width: '20%',
      cell: (cell) => {
        return (
          <Link href={`/company/${cell.company.slug}`}>
            {cell.company.slug}
          </Link>
        );
      },
    },
    {
      id: 'amount',
      name: 'Amount',
      selector: (row) => row.amount.formatted,
      sortable: true,
    },
    {
      id: 'created',
      name: 'Date',
      selector: (row) => row.created_at,
      sortable: true,
    },
  ];

  const customStyles = {
    rows: {
      style: {
        fontFamily: 'TT Firs Neue',
        fontSize: '16px',
        minHeight: '72px', // override the row height
      },
    },
  };

  return (
    <>
      <div className='bg-primary border-gray-700 p-10 rounded-2xl w-full flex flex-col md:flex-row gap-16'>
        <div className='md:w-6/12'>
          <InvestmentForm handleProjectsChange={handleProjectsChange} />
        </div>
        <div className='md:w-6/12 hidden md:block'>
          <div className='bg-dark-700 flex flex-col items-center rounded-2xl p-10 text-white'>
            <Animate data={funds} />

          </div>
        </div>
      </div>


      <DataTable
        pagination
        columns={columns}
        data={tableOptions}
        customStyles={customStyles}
        defaultSortFieldId='created'
        defaultSortAsc={false}
      />
    </>
  );
}
