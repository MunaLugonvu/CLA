import React, { useState } from 'react'
import SideBar from "./SideBar";
import "./lesson.css"
import { Navbar, Nav, Button } from 'react-bootstrap';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

import {v4 as uuidv4} from 'uuid'

const itemsFromBackend = [
  { id: uuidv4(), content: "#include " },
  { id: uuidv4(), content: "#include " }, 
  { id: uuidv4(), content: "int main() {int values[5];" },
  { id: uuidv4(), content: "printf(Enter 5 integers: ); " },
  { id: uuidv4(), content: "for(int i = 0; i < 5; ++i) {" },
  { id: uuidv4(), content: "scanf(%d, &values[i]);}" },
  { id: uuidv4(), content: "printf(Displaying integers: );" }
];

const columnsFromBackend = {
  [uuidv4()]: {
    name: "Code Blocks",
    items: itemsFromBackend
  },
  [uuidv4()]: {
    name: "Assembled Blocks",
    items: []
  }
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }}


const Blocks = () => {
  
  const [columns, setColumns] = useState(columnsFromBackend);
  

  return ( 
<>
<SideBar/>
<div className="ld-tabs-navigation">
            <div className="ld-tab " data-tab="lesson">
                <span className="ld-icon id-icon-content"></span>
                <a className="ld-text" href="Lesson" style={{textDecoration: "none"}}>Learning Material</a>
            </div>
                                        <div className="ld-tab ld-active" data-tab="custom2"style={{display: "flex;"}} >
                    <span className="ld-icon id-icon-content"></span>
                    <a className="ld-text" href="Blocks" style={{textDecoration: "none"}}>Review Quiz</a>
                </div>
                                </div>

<div style={{ display: "flex", justifyContent: "center", height: "100%" }}><h2 style={{ paddingLeft: "220px", paddingTop: "10px"}}>Assemble the code blocks correctly.</h2></div>
<div style={{ display: "flex", justifyContent: "center", height: "100%", borderBottom: "2px solid #e2e7ed" }}>

      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
           <div style={{
           
          
          }}>
        
           <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: 100,
                alignItems: "center",
              }}
              key={columnId}
            >
             
              <h2 style={{paddingLeft: "100px"}}>{column.name}</h2>
              <div style={{ margin: 10 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "#172344"
                            : "#172344",
                          padding: 10,
                          width: 400,
                          minHeight: 600,
                          marginLeft: 200
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : "#456C86",
                                      color: "white",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.content}
                                  </div>
                                  
                                );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                    
                    );
                  }}
                </Droppable>
              </div>
            </div>
           </div>
            
          );
        })}
      </DragDropContext>
      
    </div>
    <form className="sfwd-mark-incomplete" style={{padding: "9px"}} method="post" action="https://talktomeinkorean.com/wp-admin/admin-ajax.php?action=ttmik_mark_incomplete" >
                    <input type="hidden" value="672282" name="user_id"/>
                    <input type="hidden" value="2836" name="step_id"/>
                    <input type="hidden" value="5111" name="course_id"/>
                    <input type="hidden" value="https://talktomeinkorean.com/curriculum/level-1-korean-grammar/lessons/level-1-lesson-2/" name="next_url"/>
                    <input type="submit" className="mark_incomplete_button" value="Mark Complete" style={{  justifyContent: "center", position: "absolute", left: "840px",
     paddingTop: "20px",width: "200px"}}/>
                </form>
   
</>
  )
}

export default Blocks;
