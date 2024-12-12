import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { Link } from '@inertiajs/react';
import { Investment, Project } from '@/types';

export default function ProjectInvestmentsTable({
  project,
  title,
}: {
  project: Project;
  title?: string;
}) {
  const columns: TableColumn<Investment>[] = [
    {
      id: 'company',
      name: 'Отправитель',
      selector: (row) => row.company.name,
      sortable: true,
      width: '20%',
      cell: (cell) => {
        return (
          <Link href={`/company/${cell.company.slug}`}>
            {cell.company.name}
          </Link>
        );
      },
    },
    {
      id: 'amount',
      name: 'Сумма пожертвования',
      selector: (row) => row.amount.formatted,
      sortable: true,
    },
    {
      id: 'created',
      name: 'Дата',
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
    <div className='space-y-7'>
      <h2>{title}</h2>
      {project.investments.length > 0 && (
        <DataTable
          pagination
          columns={columns}
          defaultSortFieldId='created'
          defaultSortAsc={false}
          data={project.investments}
          customStyles={customStyles}
        />
      )}
    </div>
  );
}
