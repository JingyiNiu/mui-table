import axios from "axios";
import React, { useEffect, useState } from "react";
import MuiTable from "../../components/mui-table/mui-table";

const JobsPage = () => {
  const [datas, setDatas] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const tableHeader = [
    { id: "id", numeric: false, label: "id", render: (data: any) => <div>{data.row.id}</div> },
    { id: "company_name", numeric: false, label: "Company Name", render: (data: any) => <div>{data.row.employer && data.row.employer.company_name}</div> },
    { id: "title", numeric: false, label: "Job title", render: (data: any) => <div>{data.row.title}</div> },
    { id: "slug", numeric: false, label: "Job slug", render: (data: any) => <div>{data.row.slug}</div> },
    { id: "status", numeric: false, label: "Status", render: (data: any) => <div>{data.row.status}</div> },
    { id: "featured", numeric: false, label: "Featured", render: (data: any) => <div>{data.row.featured}</div> },
    {
      id: "approved",
      numeric: false,
      label: "Approved",
      render: (data: any) => (
        <div>
          {data.row.approved && data.row.approved == "No" ? `Not approved` : "Approved"}
          <a className="text-primary" onClick={() => console.log(1)}>
            {" "}
            Change{" "}
          </a>
        </div>
      ),
    },
    {
      id: "edit",
      numeric: false,
      label: "Edit",
      render: (data: any) => (
        <a className="text-primary" onClick={() => console.log(1)}>
          Edit
        </a>
      ),
    },
    {
      id: "delete",
      numeric: false,
      label: "Delete",
      render: (data: any) => (
        <a className="text-danger" onClick={() => console.log(1)}>
          Delete
        </a>
      ),
    },
  ];

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    try {
      const resData = await axios.get(``);
      setDatas(resData.data);
      setFilteredData(resData.data);

      console.log(resData.data);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <div>
      JobsPage
      {datas && datas.length && (
        <div>
          <MuiTable
            deleteCall={(id: number) => {
              console.log(id);
            }}
            header={tableHeader}
            editCall={(id: number) => {
              console.log(id);
            }}
            tableDatas={datas}
          />
        </div>
      )}
    </div>
  );
};

export default JobsPage;
