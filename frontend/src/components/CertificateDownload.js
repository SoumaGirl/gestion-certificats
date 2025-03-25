import React from "react";

const CertificateDownload = ({ certificateId }) => {
    const handleDownload = () => {
        fetch(`/api/certificates/${certificateId}/download`)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", "certificate.pdf");
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
    };

    return <button onClick={handleDownload}>Télécharger le Certificat</button>;
};

export default CertificateDownload;
