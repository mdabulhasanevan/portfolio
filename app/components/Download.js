import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MdPictureAsPdf } from "react-icons/md";

const DownloadPage = ({contentRef}) => {
//  const contentRef = useRef();

const handleDownload = () => {
  html2canvas(contentRef.current, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');

    // Create PDF instance with A4 size
    const doc = new jsPDF('p', 'mm', 'a4');

    // Define the image size to fit A4 size
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Scale to maintain aspect ratio
    const topMargin = 5; // Define top margin in mm

    // Add the image with the specified top margin
    doc.addImage(imgData, 'PNG', 0, topMargin, imgWidth, imgHeight);
    
    // Save the PDF
    doc.save('Md Abul Hasan- Portfolio.pdf');
  });
};

  return (
    <div>
          <button onClick={handleDownload}><MdPictureAsPdf /></button>
    </div>
  );
};

export default DownloadPage;