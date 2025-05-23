import { Table } from "antd";
import "../../assets/css/table.css"; // Pastikan ini mengimpor file CSS di atas

const columnsNamaVendor = [
  {
    title: "NO",
    dataIndex: "no",
    key: "no",
    render: (text, record, index) => index + 1,
    width: 50,
    align: "center",
  },
  { title: "NOMOR PK", dataIndex: "nomor_pk", key: "nomor_pk" },
  { title: "NAMA PAKET", dataIndex: "nama_paket", key: "nama_paket" },
  { title: "SUMBER DANA", dataIndex: "sumber_dana", key: "sumber_dana" },
  { title: "METODE", dataIndex: "metode", key: "metode" },
  { title: "NILAI", dataIndex: "nilai", key: "nilai" },
  { title: "NAMA VENDOR", dataIndex: "nama_vendor", key: "nama_vendor" },
];

const dataNamaVendor = [
  {
    key: "1",
    nomor_pk: "Andi",
    nama_paket: 25,
    sumber_dana: "Medan",
    metode: "Medan",
    nilai: "100 Juta",
    nama_vendor: "Vendor A",
  },
  {
    key: "2",
    nomor_pk: "Budi",
    nama_paket: 26,
    sumber_dana: "Jakarta",
    metode: "E-Tender",
    nilai: "200 Juta",
    nama_vendor: "Vendor B",
  },
  {
    key: "3",
    nomor_pk: "Cici",
    nama_paket: 27,
    sumber_dana: "Bandung",
    metode: "Langsung",
    nilai: "150 Juta",
    nama_vendor: "Vendor C",
  },
  // tambahkan data lagi untuk melihat pagination bekerja
];

export function TableNamaVendor() {
  return (
    <div className="table-wrapper">
      <Table
        bordered
        columns={columnsNamaVendor}
        dataSource={dataNamaVendor}
        size="small"
        scroll={{ x: true }} // aktifkan scroll horizontal jika perlu
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
}

const columnsBidang = [
  {
    title: "NO",
    dataIndex: "no",
    key: "no",
    render: (text, record, index) => index + 1,
    width: 50,
    align: "center",
  },
  { title: "NOMOR PK", dataIndex: "nomor_pk", key: "nomor_pk" },
  { title: "NAMA PAKET", dataIndex: "nama_paket", key: "nama_paket" },
  { title: "SUMBER DANA", dataIndex: "sumber_dana", key: "sumber_dana" },
  { title: "METODE", dataIndex: "metode", key: "metode" },
  { title: "NILAI", dataIndex: "nilai", key: "nilai" },
  { title: "BIDANG", dataIndex: "bidang", key: "bidang" },
];

const dataBidang = [
  {
    key: "1",
    nomor_pk: "Andi",
    nama_paket: 25,
    sumber_dana: "Medan",
    metode: "Medan",
    nilai: "100 Juta",
    bidang: "Vendor A",
  },
  {
    key: "2",
    nomor_pk: "Budi",
    nama_paket: 26,
    sumber_dana: "Jakarta",
    metode: "E-Tender",
    nilai: "200 Juta",
    bidang: "Vendor B",
  },
  {
    key: "3",
    nomor_pk: "Cici",
    nama_paket: 27,
    sumber_dana: "Bandung",
    metode: "Langsung",
    nilai: "150 Juta",
    bidang: "Vendor C",
  },
  // tambahkan data lagi untuk melihat pagination bekerja
];

export function TableBidang() {
  return (
    <div className="table-wrapper">
      <Table
        bordered
        columns={columnsBidang}
        dataSource={dataBidang}
        size="small"
        scroll={{ x: true }} // aktifkan scroll horizontal jika perlu
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
}
const columnsWilayah = [
  {
    title: "NO",
    dataIndex: "no",
    key: "no",
    render: (text, record, index) => index + 1,
    width: 50,
    align: "center",
  },
  { title: "NOMOR PK", dataIndex: "nomor_pk", key: "nomor_pk" },
  { title: "NAMA PAKET", dataIndex: "nama_paket", key: "nama_paket" },
  { title: "SUMBER DANA", dataIndex: "sumber_dana", key: "sumber_dana" },
  { title: "METODE", dataIndex: "metode", key: "metode" },
  { title: "NILAI", dataIndex: "nilai", key: "nilai" },
  { title: "WILAYAH", dataIndex: "wilayah", key: "wilayah" },
];

const dataWilayah = [
  {
    key: "1",
    nomor_pk: "Andi",
    nama_paket: 25,
    sumber_dana: "Medan",
    metode: "Medan",
    nilai: "100 Juta",
    wilayah: "Vendor A",
  },
  {
    key: "2",
    nomor_pk: "Budi",
    nama_paket: 26,
    sumber_dana: "Jakarta",
    metode: "E-Tender",
    nilai: "200 Juta",
    wilayah: "Vendor B",
  },
  {
    key: "3",
    nomor_pk: "Cici",
    nama_paket: 27,
    sumber_dana: "Bandung",
    metode: "Langsung",
    nilai: "150 Juta",
    wilayah: "Vendor C",
  },
  // tambahkan data lagi untuk melihat pagination bekerja
];

export function TableWilayah() {
  return (
    <div className="table-wrapper">
      <Table
        bordered
        columns={columnsWilayah}
        dataSource={dataWilayah}
        size="small"
        scroll={{ x: true }} // aktifkan scroll horizontal jika perlu
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
}
const columnsChartTest = [
  {
    title: "NO",
    dataIndex: "no",
    key: "no",
    render: (text, record, index) => index + 1,
    width: 50,
    align: "center",
  },
  { title: "NOMOR PK", dataIndex: "nomor_pk", key: "nomor_pk" },
  { title: "NAMA PAKET", dataIndex: "nama_paket", key: "nama_paket" },
];

const dataChartTest = [
  {
    key: "1",
    nomor_pk: "Andi",
    nama_paket: 25,
  },
  {
    key: "2",
    nomor_pk: "Budi",
    nama_paket: 26,
    
  },
  {
    key: "3",
    nomor_pk: "Cici",
    nama_paket: 27,
  },
  {
    key: "4",
    nomor_pk: "Cici",
    nama_paket: 27,
  },
  {
    key: "5",
    nomor_pk: "Cici",
    nama_paket: 27,
  },
  {
    key: "6",
    nomor_pk: "Cici",
    nama_paket: 27,
  },
  {
    key: "7",
    nomor_pk: "Cici",
    nama_paket: 27,
  },
  {
    key: "8",
    nomor_pk: "Cici",
    nama_paket: 27,
  },
  {
    key: "9",
    nomor_pk: "Cici",
    nama_paket: 27,
  },
  {
    key: "10",
    nomor_pk: "Cici",
    nama_paket: 27,
  },
  {
    key: "11",
    nomor_pk: "Cici",
    nama_paket: 27,
  },
  {
    key: "12",
    nomor_pk: "Cici",
    nama_paket: 27,
  },
  {
    key: "13",
    nomor_pk: "Cici",
    nama_paket: 27,
      width: 80,
  },
  // tambahkan data lagi untuk melihat pagination bekerja
];

export function TableChartTest() {
  return (
    <div className="table-wrapper">
      <Table
        bordered
        columns={columnsChartTest}
        dataSource={dataChartTest}
        size=""
        scroll={{ x: true }} // aktifkan scroll horizontal jika perlu
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
}
