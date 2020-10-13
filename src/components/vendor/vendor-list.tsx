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
    dataIndex: "ID",
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
    title: "Address",
    dataIndex: "address",
    sorter: {
      compare: (a: any, b: any) => a.address.localeCompare(b.address),
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
  selectedItemVendor: IVendor;
  vendors: IVendor[];
};

const VendorList: FC<Props> = ({ getList, selectedVendor, selectedItemVendor, vendors }) => {
  const [selectedVendorTable, setSelectedVendorTable] = useState([]) ;

  useEffect(() => {
    getList();    
  }, [getList]);

  useEffect(()=> {
    console.log('useEffect selectedItemVendor')
    if(!selectedItemVendor){
      setSelectedVendorTable([]);
    }
  }, [selectedItemVendor]);

  const onChangeRadio = (selectedRowKeys: any) => {
   setSelectedVendorTable(selectedRowKeys);
    const selectedItem = vendors.find(
      (item) => item.ID === selectedRowKeys[0]
    ) as IVendor;
    selectedVendor(selectedItem);
  };

  if(vendors.length === 0){
    return <Loading />
  }

  return (
    <Fragment>
      <Table
        columns={columns}
        dataSource={vendors}
        pagination={false}
        rowSelection={{ type: "radio", selectedRowKeys: selectedVendorTable, onChange: onChangeRadio }}
        rowKey="ID"
      />
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  vendors: state.vendors.vendors,
  selectedItemVendor: state.vendors.selectedVendor,
  // loading: state.common.loading
});

const mapDispatchToProps = {
  getList: getList,
  selectedVendor: selectedVendor,
};

export default connect(mapStateToProps, mapDispatchToProps)(VendorList);
