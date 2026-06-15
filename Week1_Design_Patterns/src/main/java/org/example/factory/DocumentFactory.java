package org.example.factory;

public abstract class DocumentFactory {

    public abstract Document createDocument();

    public void displayDocument() {
        Document doc = createDocument();
        doc.open();
    }
}
