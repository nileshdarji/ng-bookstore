package com.learning.ngbookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.learning.ngbookstore.entity.BookCategory;

@RepositoryRestResource(collectionResourceRel="bookCategory", path="book-category")
//@CrossOrigin("http://localhost:4200")  // Or "*" to allow any request
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long>{

}
