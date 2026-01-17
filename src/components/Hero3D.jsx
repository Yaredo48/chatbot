import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ContactShadows, Environment, Float, Sparkles } from '@react-three/drei';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function Rig({ enabled }) {
  const { camera, pointer } = useThree();

  useFrame(() => {
    if (!enabled) return;

    const targetX = pointer.x * 0.6;
    const targetY = pointer.y * 0.35;

    camera.position.x += (targetX - camera.position.x) * 0.06;
    camera.position.y += (targetY - camera.position.y) * 0.06;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Orb({ reducedMotion }) {
  const materialProps = useMemo(() => {
    if (reducedMotion) {
      return {
        color: '#4f46e5',
        roughness: 0.25,
        metalness: 0.2,
        clearcoat: 1,
        clearcoatRoughness: 0.12,
      };
    }

    return {
      color: '#6d28d9',
      roughness: 0.22,
      metalness: 0.25,
      transmission: 0.85,
      thickness: 0.9,
      ior: 1.2,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
    };
  }, [reducedMotion]);

  return (
    <Float speed={reducedMotion ? 0 : 2.25} rotationIntensity={reducedMotion ? 0.2 : 1.2} floatIntensity={reducedMotion ? 0.3 : 1.6}>
      <mesh>
        <icosahedronGeometry args={[1.55, 4]} />
        <meshPhysicalMaterial {...materialProps} />
      </mesh>
    </Float>
  );
}

function Scene({ reducedMotion, isMobile }) {
  return (
    <>
      <color attach="background" args={['#05060a']} />

      <ambientLight intensity={0.6} />
      <directionalLight position={[6, 6, 6]} intensity={1.25} />
      <directionalLight position={[-6, -2, 4]} intensity={0.55} color="#8b5cf6" />

      <Suspense fallback={null}>
        <Environment preset="city" />
      </Suspense>

      <Orb reducedMotion={reducedMotion} />

      <Sparkles
        count={reducedMotion ? 30 : isMobile ? 60 : 110}
        scale={[10, 7, 10]}
        size={reducedMotion ? 1.4 : 1.8}
        speed={reducedMotion ? 0.12 : 0.45}
        opacity={0.75}
        color="#a78bfa"
      />

      <ContactShadows opacity={0.35} scale={12} blur={2.6} far={7} position={[0, -2.2, 0]} />

      <Rig enabled={!reducedMotion} />
    </>
  );
}

export default function Hero3D() {
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const dpr = isMobile ? 1.25 : [1, 2];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#05060a] pt-16"
      aria-label="Hero"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_20%,rgba(124,58,237,0.38),transparent_60%),radial-gradient(700px_circle_at_80%_30%,rgba(59,130,246,0.26),transparent_55%),radial-gradient(900px_circle_at_50%_90%,rgba(99,102,241,0.18),transparent_55%)]" />

      {!reduceMotion && (
        <div className="absolute inset-0">
          <Canvas
            dpr={dpr}
            camera={{ position: [0, 0, 6.2], fov: 42 }}
            gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
          >
            <Scene reducedMotion={!!reduceMotion} isMobile={isMobile} />
          </Canvas>
        </div>
      )}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for high-impact roles & consulting
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              {portfolioData.personal.name}
              <span className="block bg-gradient-to-r from-violet-300 via-indigo-200 to-sky-200 bg-clip-text text-transparent">
                {portfolioData.personal.title}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              {portfolioData.personal.statement}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
              >
                View Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Contact
                <Mail size={16} />
              </a>

              <div className="flex gap-2 sm:ml-2">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/85 backdrop-blur transition-colors hover:bg-white/10"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/85 backdrop-blur transition-colors hover:bg-white/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { label: 'AI/ML', value: 'Production-grade' },
                { label: 'Backend', value: 'Scalable systems' },
                { label: 'Frontend', value: 'Delightful UX' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-xs font-semibold uppercase tracking-wide text-white/50">{item.label}</div>
                  <div className="mt-1 text-sm font-medium text-white/85">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur" />
            <div className="relative p-8">
              <div className="flex items-center gap-4">
                <img
                  src={portfolioData.personal.avatar}
                  alt={portfolioData.personal.name}
                  className="h-16 w-16 rounded-2xl object-cover ring-1 ring-white/10"
                />
                <div>
                  <div className="text-sm font-semibold text-white">{portfolioData.personal.email}</div>
                  <div className="text-sm text-white/60">{portfolioData.personal.location}</div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {["MLOps & model deployment", "LLM apps & RAG systems", "Full-stack product engineering"].map((line) => (
                  <div key={line} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75 backdrop-blur">
                    {line}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-sky-500/10 p-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-white/50">Signature</div>
                <div className="mt-1 text-sm text-white/80">
                  I build systems that feel magical and ship reliably.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
