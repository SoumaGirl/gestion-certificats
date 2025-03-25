package com.salma.service;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Element;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.PageSize;
import org.apache.xerces.dom3.as.DocumentAS;
import org.hsqldb.util.FontDialogSwing;
import org.springframework.stereotype.Service;
import java.io.FileOutputStream;
import java.io.IOException;

@Service
public class CertificateService {

    public void generateCertificate(String eventId, String participantName) throws DocumentException, IOException {
        // Chemin du fichier de certificat
        String filePath = "certificates/" + eventId + ".pdf";

        // Création d'un nouveau document PDF
        Document document = new Document(PageSize.A4);

        // Création du fichier PDF
        PdfWriter.getInstance(document, new FileOutputStream(filePath));

        // Ouvre le document pour ajout de contenu
        document.open();

        // Ajouter du contenu au certificat (titre, texte, etc.)
        Font titleFont = new Font(Font.FontFamily.HELVETICA, 24, Font.BOLD);
        Font contentFont = new Font(Font.FontFamily.HELVETICA, 14, Font.NORMAL);

        Paragraph title = new Paragraph("Certificate of Participation", titleFont);
        title.setAlignment(Element.ALIGN_CENTER);
        document.add(title);

        // Espaces pour la présentation
        document.add(Chunk.NEWLINE);
        
        // Corps du certificat
        Paragraph body = new Paragraph("This is to certify that", contentFont);
        body.setAlignment(Element.ALIGN_CENTER);
        document.add(body);

        // Participant Name
        Paragraph participant = new Paragraph(participantName, titleFont);
        participant.setAlignment(Element.ALIGN_CENTER);
        document.add(participant);

        document.add(Chunk.NEWLINE);

        // Ajout d'une autre ligne pour l'événement
        Paragraph eventInfo = new Paragraph("Has successfully participated in the event: " + eventId, contentFont);
        eventInfo.setAlignment(Element.ALIGN_CENTER);
        document.add(eventInfo);

        // Ajouter une ligne pour la date
        document.add(Chunk.NEWLINE);
        Paragraph date = new Paragraph("Date: " + java.time.LocalDate.now(), contentFont);
        date.setAlignment(Element.ALIGN_CENTER);
        document.add(date);

        // Fermeture du document
        document.close();
    }
}
