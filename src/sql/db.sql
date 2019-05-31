CREATE TABLE IF NOT EXISTS projects(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL CHECK (name <> ''),
    priority INTEGER NOT NULL,
    description text,
    deliverydate date NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),    
    done BOOLEAN,
    projectId INTEGER REFERENCES projects(id)
);

INSERT INTO projects (name , priority, description, deliverydate)
    VALUES('Make web APP', 1, 'Using javascript', '2019-05-30');

INSERT INTO projects (name , priority, description, deliverydate)
    VALUES('Make APP', 1, 'Using Dart', '2019-05-12');

INSERT INTO projects (name , priority, description, deliverydate)
    VALUES('Make Desktop APP', 2, 'Using c#', '2019-06-23');

INSERT INTO tasks(name, done, projectId)
    VALUES('Downloadin Vue.js', false, 1);

INSERT INTO tasks(name, done, projectId)
    VALUES('Downloading COBOL', false, 2);

INSERT INTO tasks(name, done, projectId)
    VALUES('Downloading Spring', false, 3);
