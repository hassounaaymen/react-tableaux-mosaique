import React from 'react'
import  Card  from 'react-bootstrap/Card'

export default function Aprpos({namecard,nomclient,dtn,ville}) {
  return (
    <>
    <div>
    <Card Style={"margin-top: 7%;width: 21rem;height: 27rem; background-color:#f3f2f2 "}>
  <Card.Body>
    <Card.Title>{namecard}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{nomclient}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted">{dtn}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted">{ville}</Card.Subtitle>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
</div>
    </>
  )
}
