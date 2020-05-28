import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
  const CardList = (props) => {
    return (
      <div className="container">
          <div className="row">
                 <div className="col-sm-3">
          {props.books.length>0? props.books.map ((book,index)=>{
              return(
                <Card key={index}>
                <CardImg top width="100%" src={book.volumeInfo.imageLinks.thumbnail} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{book.volumeInfo.title}</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
              )
          }):"no book found"}
       </div>
      </div>
      </div>
    );
  };
  
  export default CardList;