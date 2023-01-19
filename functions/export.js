import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';

export default function exportToExcel (excelData, fileName){


const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8';
const fileExtension = '.xlsx';


const ws = XLSX.utils.json_to_sheet(excelData);
const wb = {sheet: {'data': ws , sheetNames: ['data']}};
const excelBuffer = XLSX.write(wb ,  {bookType : '.xlsx', type : 'array'});
const data = new Blob([excelBuffer], {type: fileType});
FileSaver.saveAs(data, fileName + fileExtension)







}