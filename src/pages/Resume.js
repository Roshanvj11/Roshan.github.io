import { saveAs } from 'file-saver';


export default function handleResume() {
    const pdfBlob = new Blob(
        ['Roshan vijay Resume'],
        { type: 'application/pdf' }
      );
  
      saveAs(pdfBlob,"Roshan Vijay Resume.pdf")
}
