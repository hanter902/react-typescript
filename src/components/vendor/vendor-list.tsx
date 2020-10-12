import { Table } from "antd";
import React, { Fragment, useState, useEffect, FC } from "react";
import { Breakpoint } from "antd/lib/_util/responsiveObserve";
import {
  ActiveStatus,
  InactiveStatus
} from "../common/status";
import { connect } from "react-redux";
import { getList, selectedVendor } from "../../store/vendor/actions";
import { IVendor } from "../../store/vendor/types";
import Loading from "../common/loading";


const columns = [
  {
    title: "ID",
    dataIndex: "id",
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: {
      compare: (a: any, b: any) => a.name.localeCompare(b.name),
      multiple: 2,
    },
    render: (text: any) => <span>{text}</span>,
    // responsive: ['lg'] as Breakpoint[],
  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: {
      compare: (a: any, b: any) => a.status.localeCompare(b.status),
      multiple: 1,
    },
    render: (status: any) => (
      <span>
        {status === "ACTIVE" ? (
          <ActiveStatus />
        ) : (
          <InactiveStatus />
        )}
      </span>
    ),
    responsive: ["lg"] as Breakpoint[],
  },
  {
    title: "createdAt",
    dataIndex: "createdAt",
    responsive: ["lg"] as Breakpoint[],
    render: (text: any) => <span>{text}</span>,
    //   sorter: {
    //     compare: (a: any, b: any) => a.createdAt - b.createdAt,
    //     multiple: 1,
    //   },
  },
];

type Props = {
  getList: () => void;
  selectedVendor: (vendor: IVendor) => void;
  data: IVendor[];
};

const VendorList: FC<Props> = ({ getList, selectedVendor, data }) => {
  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeRadio = (selectedRowKeys: any) => {
    const selectedItem = data.find(
      (item) => item.id === selectedRowKeys[0]
    ) as IVendor;
    selectedVendor(selectedItem);
  };

  if(!data){
    return <Loading />
  }

  return (
    <Fragment>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowSelection={{ type: "radio", onChange: onChangeRadio }}
        rowKey="id"
      />
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  data: state.vendors.data,
});

const mapDispatchToProps = {
  getList: getList,
  selectedVendor: selectedVendor,
};

export default connect(mapStateToProps, mapDispatchToProps)(VendorList);
