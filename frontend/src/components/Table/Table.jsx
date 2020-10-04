import React from 'react';
import PropTypes from 'prop-types';
import { saveAs } from 'file-saver';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import * as Excel from 'exceljs';
import { useTranslation } from 'react-i18next';
import { Table } from 'antd';
import Button from 'components/Button/Button';
import './table.scss';

const TableComponent = ({ dataSource, onEdit, onDelete }) => {
  const { t } = useTranslation();
  const columns = [
    {
      title: t('tableTitle.name'),
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: t('tableTitle.business_form_id'),
      dataIndex: 'business_form_id',
      key: 'business_form_id',
    },
    {
      title: t('tableTitle.tax_number'),
      dataIndex: 'tax_number',
      key: 'tax_number',
    },
    {
      title: t('tableTitle.company_registration_number'),
      dataIndex: 'company_registration_number',
      key: 'company_registration_number',
    },
    {
      title: t('tableTitle.city_id'),
      dataIndex: 'city_id',
      key: 'city_id',
    },
    {
      title: t('tableTitle.address'),
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: t('tableTitle.phone'),
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: t('tableTitle.bank_account_number'),
      dataIndex: 'bank_account_number',
      key: 'bank_account_number',
    },
    {
      title: t('tableTitle.message'),
      dataIndex: 'message',
      key: 'message',
    },
    {
      title: t('tableTitle.action'),
      dataIndex: 'action',
      key: 'action',
      render: (elem) => (
        <div className="action-container">
          <div title="edit">
            <EditOutlined onClick={() => { onEdit(elem, 'partner'); }} />
          </div>
          <div title="delete">
            <DeleteOutlined onClick={() => { onDelete({ id: elem.id }, 'confirm'); }} />
          </div>
        </div>
      ),
    },
  ];

  const exportExcel = async () => {
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet('Partners');

    const worksheetColumns = columns.map((item) => ({
      header: item.title,
      key: item.key,
    })).filter((elem) => elem.key !== 'action');

    worksheet.columns = worksheetColumns;
    worksheet.addRows(dataSource);
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, 'partners.xlsx');
  };

  return (
    <div className="table-container">
      <Table
        dataSource={dataSource}
        columns={columns}
        size="small"
        pagination={false}
      />
      <div className="export-container">
        <Button
          text={t('tableTitle.export')}
          onClick={() => { exportExcel(); }}
        />
      </div>
    </div>
  );
};

TableComponent.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TableComponent;