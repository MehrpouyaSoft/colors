import logo from './logo.svg';
import './App.css';
import React, { useCallback, useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Frame from './component/frame';
import appContext from './context';
import Colors from './component/colors';
import CustomToast from './common/toast';
import { toast } from 'react-toastify';

function App() {
  const [ColorsAdded, setColorsAdded] = useState([]);

  const add = useCallback((color) => {
    setColorsAdded(prev => ([...prev, color]))
  }, [])

  const deleted = useCallback((colorID) => {
    setColorsAdded(prev => (prev.filter(el => el.id !== colorID)))
    toast.success('رنگ مورد نظر حذف گردید')
  }, [])

  return (
    <>
      <CustomToast />
      <appContext.Provider value={{
        colors: ColorsAdded,
        setColorsAdded: setColorsAdded,
        deleted: deleted,
        add: add
      }}>
        <DndProvider backend={HTML5Backend}>
          <DndProvider backend={HTML5Backend} context={window}>
            <>
              <div style={{ textAlign: 'center', padding: '60px 0 30px 0' }}><h1>اندیشه سپید ایران</h1></div>
              <Colors />
              <Frame />
            </>
          </DndProvider>
        </DndProvider>
      </appContext.Provider>
    </>
  )
}

export default App;
