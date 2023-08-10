import React, { useEffect, useRef } from 'react'


function useDragger(elementID) {
    const isClicked = useRef(false);

    const coords = useRef({
      startX: 0,
      startY: 0,
      lastX: 0,
      lastY: 0
    })
  
    useEffect(() => {
        // Element to be moved
        const target = document.getElementById(elementID)
        if (!target) throw new Error('Element with given id does not exist!')

        // Container that target element would be moved in
        const container = target.parentElement
        if (!container) throw new Error('Target Element must have a parent/container')

        const onMouseDown = (e) => {
            isClicked.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        }

        const onMouseUp = (e) => {
            isClicked.current = false;
            coords.current.lastX = target.offsetLeft;
            coords.current.lastY = target.offsetTop;
        }

        const onMouseMove = (e) => {
        if (!isClicked.current) return;

        const nextX = e.clientX - coords.current.startX + coords.current.lastX;
        const nextY = e.clientY - coords.current.startY + coords.current.lastY;

        target.style.top = `${nextY}px`;
        target.style.left = `${nextX}px`;
        }

        // Attaching event listeners to our html elements
        target.addEventListener('mousedown', onMouseDown);
        target.addEventListener('mouseup', onMouseUp);
        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseleave', onMouseUp);

        const cleanup = () => {
            target.removeEventListener('mousedown', onMouseDown);
            target.removeEventListener('mouseup', onMouseUp);
            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('mouseleave', onMouseUp);
        }

        return cleanup;
    }, [elementID])
}

export default useDragger