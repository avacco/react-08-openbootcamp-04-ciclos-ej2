import React, { useEffect, useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

import '../../styles/task.scss';

const TasklistComponent = () => {
 
  const defaultTask = new Task('Ejemplo', 'Descripción por defecto',false, LEVELS.NORMAL);
  
  // Estado del componente
  const [tasks, setTasks] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Modificación de tarea");
    setLoading(false);
    return () => {
      console.log("Eliminación de tarea");
    }
  }, [tasks]);
  
  const changeCompleted = (id) => {
    console.log('TODO: Cambiar estado de una tarea');
  }

  return (
    <div>
      <div>
        <h1>Tus tareas:</h1>
      </div>
      <TaskComponent task={defaultTask}/>
    </div>
  );
};

export default TasklistComponent;
