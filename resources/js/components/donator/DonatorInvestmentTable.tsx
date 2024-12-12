import DataTable, { TableColumn } from 'react-data-table-component';
import { Link } from '@inertiajs/react';
import { Company, Investment } from '@/types';

type Props = {
  donator: Company;
};

export default function DonatorInvestmentTable({ donator }: Props) {
  const columns: TableColumn<Investment>[] = [
    {
      id: 'project',
      name: 'Название проекта',
      selector: (row) => row.project.name,
      sortable: true,
      width: '50%',
      cell: (cell) => {
        const link = cell.project.custom_url
          ? cell.project.custom_url
          : `/project/${cell.project.slug}`;
        return <Link href={link}>{cell.project.name}</Link>;
      },
    },
    {
      id: 'industry',
      name: 'Направление',
      selector: (row) => row.project.industry.name,
      sortable: true,
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
    headRow: {
      style: {
        background: undefined,
      },
    },
    pagination: {
      style: {
        background: undefined,
      },
    },
    rows: {
      style: {
        background: undefined,
        fontFamily: 'TT Firs Neue',
        fontSize: '16px',
        minHeight: '72px', // override the row height
      },
    },
  };

  return (
    <DataTable
      pagination
      columns={columns}
      defaultSortFieldId='created'
      defaultSortAsc={false}
      data={donator.investments}
      customStyles={customStyles}
    />
  );
}
