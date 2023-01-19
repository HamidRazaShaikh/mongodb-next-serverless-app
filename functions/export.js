import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";

export default function exportToExcel(excelData) {
  let wb = XLSX.utils.book_new();
  let ws = XLSX.utils.json_to_sheet(excelData);
  XLSX.utils.book_append_sheet(wb, ws, "excel-data");
  XLSX.writeFile(wb, "myexcelfile.xlsx");
}
