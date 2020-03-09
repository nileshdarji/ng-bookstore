package com.learning.ngbookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.learning.ngbookstore.entity.Book;

@CrossOrigin("http://localhost:4200")  // Or "*" to allow any request
public interface BookRepository extends JpaRepository<Book, Long> {

}
