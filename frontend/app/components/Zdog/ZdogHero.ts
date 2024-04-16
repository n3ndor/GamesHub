import { useRef, useEffect } from 'react';
import Zdog from 'zdog';

export const ZdogHero = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  const illoRef = useRef<Zdog.Illustration | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const illo = new Zdog.Illustration({
      element: canvasRef.current,
      dragRotate: true,
      zoom: 1,
      onDragStart: () => {
        illoRef.current!.updateRenderGraph();
      },
      onDragEnd: () => {
        illoRef.current!.updateRenderGraph();
      },
      rotate: { x: -Zdog.TAU / 8 },
    });

    illoRef.current = illo;

    const cardDistance = 70;
    const cardWidth = 60;
    const cardHeight = 90;
    const colors = ['#C25', '#E62', '#ED0', '#19F'];

    colors.forEach((color, i) => {
      new Zdog.Rect({
        addTo: illo,
        width: cardWidth,
        height: cardHeight,
        translate: { z: cardDistance * i - cardDistance * (colors.length - 1) / 2 },
        stroke: 8,
        color: color,
        fill: true,
      });
    });

    function animate() {
      if (illoRef.current) {
        illoRef.current.updateRenderGraph();
        illoRef.current.rotate.y += 0.02; // Rotation Speed can be adjusted here!!
      }
      requestAnimationFrame(animate);
    }

    animate();

    function handleResize() {
      if (canvasRef.current && illoRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        canvasRef.current.width = rect.width;
        canvasRef.current.height = rect.width;
        illoRef.current.setSize(rect.width, rect.width);
        illoRef.current.updateRenderGraph();
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef]);
};
