
import React from 'react';
// import html2pdf from 'html2pdf.js';
const Download = () => {
    

    // Function to download PDF
    const downloadPDF = ({contentRef}) => {
      const element = contentRef;
      
      // Configure PDF options
      const options = {
        margin: 0,
        filename: 'MyPortfolio.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      };
  
      // Generate and download PDF
      // html2pdf().set(options).from(element).save();
    };
    return (
        <div>
             <button 
        onClick={downloadPDF} 
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Download as PDF
      </button>
        </div>
    );
};

export default Download;