


CREATE TABLE IF NOT EXISTS Article (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    headLine character varying(40) NOT NULL,
    subHead character varying(30) NOT NULL,
    content character varying(30)NOT NULL,
    author_id character varying(30)NOT NULL,
    category_id character varying(30)NOT NULL,
    cover character varying(15),

    FOREIGN KEY (author_id) REFERENCES Author,
     FOREIGN KEY (category_id) REFERENCES Category

    
);
CREATE TABLE IF NOT EXISTS Author (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name character varying(40) NOT NULL,
    surname character varying(30) NOT NULL
    
);
CREATE TABLE IF NOT EXISTS Reviews (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text character varying(40) NOT NULL,
    username character varying(30) NOT NULL,
   date DATE NOT NULL
    
    
);
CREATE TABLE IF NOT EXISTS Category (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text character varying(40) NOT NULL
    
    
);





/* prototype*/

