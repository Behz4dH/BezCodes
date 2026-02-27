"use client";

import { useEffect, useState } from "react";
import type React from "react";

const W = 120;
const H = 60;
const CUBE_WIDTH = 1.32;

const FACE_CHARS = [
  "@", // front
  "$", // right
  "~", // left
  "#", // back
  ";", // bottom
  "+", // top
];

const DISTANCE_FROM_CAM = 4;
const K1 = 27;
const DEFAULT_INCREMENT_SPEED = 0.015;

type CubeAnimationProps = {
  wireframe?: boolean;
  color?: boolean;
  speedA?: number;
  speedB?: number;
  speedC?: number;
  axis?: "x" | "y" | "z" | "xy" | "xz" | "yz" | "xyz";
  backfaceCulling?: boolean;
  incrementSpeed?: number;
  edges?: boolean;
  className?: string;
};

export default function CubeAnimation({
  wireframe = false,
  color = false,
  speedA = 0.03,
  speedB = 0.02,
  speedC = 0.01,
  axis = "xy",
  backfaceCulling = false,
  incrementSpeed = DEFAULT_INCREMENT_SPEED,
  edges = true,
  className,
}: CubeAnimationProps) {
  const [frame, setFrame] = useState<React.ReactElement[]>([]);
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  const [C, setC] = useState(0);

  useEffect(() => {
    const renderFrame = () => {
      const zbuf = Array(W * H).fill(0);
      const chbuf = Array(W * H).fill(" ");
      const cbuf = Array(W * H).fill("");

      if (!wireframe) {
        const FACE_NORMALS = [
          [0, 0, -1], [1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, -1, 0], [0, 1, 0],
        ];
        const FACE_COLORS = [
          "#4ade80", // green (accent)
          "#79c0ff", // blue
          "#d2a8ff", // purple
          "#ffa657", // orange
          "#ff7b72", // red
          "#a5d6ff", // light blue
        ];
        for (let face = 0; face < 6; face++) {
          const [ni, nj, nk] = FACE_NORMALS[face];
          const nz = -ni * Math.sin(B) + nj * Math.sin(A) * Math.cos(B) + nk * Math.cos(A) * Math.cos(B);
          if (backfaceCulling && nz > 0) continue;
          const ch = FACE_CHARS[face];
          const colorVal = color ? FACE_COLORS[face % FACE_COLORS.length] : "#7d8590";
          for (let u = -CUBE_WIDTH; u < CUBE_WIDTH; u += incrementSpeed) {
            for (let v = -CUBE_WIDTH; v < CUBE_WIDTH; v += incrementSpeed) {
              let i = 0, j = 0, k = 0;
              switch (face) {
                case 0: i = u; j = v; k = -CUBE_WIDTH; break;
                case 1: i = CUBE_WIDTH; j = v; k = u; break;
                case 2: i = -CUBE_WIDTH; j = v; k = -u; break;
                case 3: i = -u; j = v; k = CUBE_WIDTH; break;
                case 4: i = u; j = -CUBE_WIDTH; k = -v; break;
                case 5: i = u; j = CUBE_WIDTH; k = v; break;
              }
              const x1 = i * Math.cos(C) - j * Math.sin(C);
              const y1 = i * Math.sin(C) + j * Math.cos(C);
              const z1 = k;
              const y2 = y1 * Math.cos(A) - z1 * Math.sin(A);
              const z2 = y1 * Math.sin(A) + z1 * Math.cos(A);
              const x2 = x1;
              const z3 = z2 * Math.cos(B) - x2 * Math.sin(B);
              const x3 = z2 * Math.sin(B) + x2 * Math.cos(B);
              const y3 = y2;
              const z = z3 + DISTANCE_FROM_CAM;
              const ooz = 1 / z;
              const xp = Math.floor(W / 2 + K1 * ooz * x3 * 2);
              const yp = Math.floor(H / 2 + K1 * ooz * y3);
              const idx = xp + yp * W;
              if (xp >= 0 && xp < W && yp >= 0 && yp < H) {
                if (ooz > zbuf[idx]) {
                  zbuf[idx] = ooz;
                  chbuf[idx] = ch;
                  cbuf[idx] = colorVal;
                }
              }
            }
          }
        }
      }

      if (edges) {
        const V = [
          [-CUBE_WIDTH, -CUBE_WIDTH, -CUBE_WIDTH],
          [ CUBE_WIDTH, -CUBE_WIDTH, -CUBE_WIDTH],
          [ CUBE_WIDTH,  CUBE_WIDTH, -CUBE_WIDTH],
          [-CUBE_WIDTH,  CUBE_WIDTH, -CUBE_WIDTH],
          [-CUBE_WIDTH, -CUBE_WIDTH,  CUBE_WIDTH],
          [ CUBE_WIDTH, -CUBE_WIDTH,  CUBE_WIDTH],
          [ CUBE_WIDTH,  CUBE_WIDTH,  CUBE_WIDTH],
          [-CUBE_WIDTH,  CUBE_WIDTH,  CUBE_WIDTH],
        ];
        const EDGES: [number, number][] = [
          [0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]
        ];
        const EDGE_CHAR = "+";
        const EDGE_COLOR = "#4ade80";
        const EDGE_STEPS = 160;
        for (const [a, b] of EDGES) {
          const [x0, y0, z0] = V[a];
          const [x1, y1, z1] = V[b];
          function rotate3D(i: number, j: number, k: number) {
            const rx1 = i * Math.cos(C) - j * Math.sin(C);
            const ry1 = i * Math.sin(C) + j * Math.cos(C);
            const rz1 = k;
            const ry2 = ry1 * Math.cos(A) - rz1 * Math.sin(A);
            const rz2 = ry1 * Math.sin(A) + rz1 * Math.cos(A);
            const rx2 = rx1;
            const rz3 = rz2 * Math.cos(B) - rx2 * Math.sin(B);
            const rx3 = rz2 * Math.sin(B) + rx2 * Math.cos(B);
            const ry3 = ry2;
            return [rx3, ry3, rz3];
          }
          const [X0, Y0, Z0_] = rotate3D(x0, y0, z0);
          const [X1, Y1, Z1_] = rotate3D(x1, y1, z1);
          const Z0 = Z0_ + DISTANCE_FROM_CAM;
          const Z1 = Z1_ + DISTANCE_FROM_CAM;
          for (let s = 0; s <= EDGE_STEPS; s++) {
            const t = s / EDGE_STEPS;
            const x = X0 + (X1 - X0) * t;
            const y = Y0 + (Y1 - Y0) * t;
            const z = Z0 + (Z1 - Z0) * t;
            const ooz = 1 / z;
            const xp = Math.floor(W / 2 + K1 * ooz * x * 2);
            const yp = Math.floor(H / 2 + K1 * ooz * y);
            const idx = xp + yp * W;
            if (xp >= 0 && xp < W && yp >= 0 && yp < H) {
              if (ooz > zbuf[idx]) {
                zbuf[idx] = ooz + 1e-6;
                chbuf[idx] = EDGE_CHAR;
                cbuf[idx] = EDGE_COLOR;
              }
            }
          }
        }
      }

      const frameLines: React.ReactElement[] = [];
      for (let y = 0; y < H; y++) {
        const line: React.ReactElement[] = [];
        for (let x = 0; x < W; x++) {
          const idx = x + y * W;
          if (chbuf[idx] !== " ") {
            line.push(
              <span key={x} style={{ color: cbuf[idx], fontWeight: "bold" }}>{chbuf[idx]}</span>
            );
          } else {
            line.push(<span key={x}> </span>);
          }
        }
        frameLines.push(<div key={y}>{line}</div>);
      }
      setFrame(frameLines);
    };

    const interval = setInterval(() => {
      setA(prev => prev + (axis.includes("x") ? speedA : 0));
      setB(prev => prev + (axis.includes("y") ? speedB : 0));
      setC(prev => prev + (axis.includes("z") ? speedC : 0));
      renderFrame();
    }, 30);
    return () => clearInterval(interval);
  }, [A, B, C, color, speedA, speedB, speedC, axis, backfaceCulling, incrementSpeed, edges, wireframe]);

  return (
    <pre className={`font-mono text-xs whitespace-pre leading-none text-center ${className ?? ""}`}>
      {frame}
    </pre>
  );
}
