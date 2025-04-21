import * as THREE from "three";
import { useMemo } from "react";

interface DashedLineCurveProps {
  controlPoints?: [THREE.Vector2, THREE.Vector2, THREE.Vector2, THREE.Vector2];
  resolution?: number;
  color?: string;
  dashSize?: number;
  gapSize?: number;
}

export default function DashedLineCurve({
  controlPoints = [
    new THREE.Vector2(-3, 0),
    new THREE.Vector2(-3, 4),
    new THREE.Vector2(3, 4),
    new THREE.Vector2(3, 0),
  ],
  resolution = 50,
  color = "white",
  dashSize = 2,
  gapSize = 1,
}: DashedLineCurveProps) {

  const curveGeometry = useMemo(() => {
    // Define la curva de Bézier cúbica
    const curve = new THREE.CubicBezierCurve(...controlPoints);

    // Genera puntos en la curva y convierte a Vector3
    const points = curve.getPoints(resolution).map(
      (p) => new THREE.Vector3(p.x, p.y, 0)
    );

    // Crea la geometría
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // Calcula distancias manualmente y las añade como atributo
    const lineDistances: number[] = [];
    let distance = 0;
    for (let i = 0; i < points.length; i++) {
      if (i > 0) {
        distance += points[i - 1].distanceTo(points[i]);
      }
      lineDistances.push(distance);
    }

    geometry.setAttribute(
      "lineDistance",
      new THREE.Float32BufferAttribute(lineDistances, 1)
    );

    return geometry;
  }, [controlPoints, resolution]);

  return (
    <line>
      <bufferGeometry attach="geometry" {...curveGeometry} />
      <lineDashedMaterial
        attach="material"
        color={color}
        dashSize={dashSize}
        gapSize={gapSize}
      />
    </line>
  );
};

