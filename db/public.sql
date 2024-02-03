-- Active: 1705366687777@@127.0.0.1@5432@api_biblioteca@public
create table tbl_libro
(
    id serial primary key ,
    nombre varchar(500), 
    autor varchar(10),
    genero varchar(50),
    paginas varchar(10),
    creado TIMESTAMP DEFAULT current_timestamp
);

create table tbl_categoria
(
id serial primary key,
nombre varchar (50),
 creado TIMESTAMP DEFAULT current_timestamp
);

insert into tbl_libro
(nombre, autor, genero, paginas)
values
('Cien años de soledad', 'G. Garcia ', 'Ficcion', '284'),
('El señor de los anillos','J. Tolkien', 'Ficción', '104'), 
('Un mundo feliz', 'D. Godoy', 'Ficción Policial', '304');

update  tbl_libro
set 
  nombre = 'Crimen ',
  autor  = 'Fiodor',
  genero = 'Thriller',
  paginas = '400'
where id = '2';



