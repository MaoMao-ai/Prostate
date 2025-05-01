import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import "./style.css";

function Navbar() {
  return (
    <div className="nav-wrapper">
      <div className="logo">
        <InlineMath>{"\\mathbb{O}^{PROS}"}</InlineMath>
      </div>
      <div className="nav-links">
        <NavLink to="/" className="nav-card">Home</NavLink>
        <NavLink to="/datasets" className="nav-card">Datasets</NavLink>
        <NavLink to="/benchmarks" className="nav-card">Benchmarks</NavLink>
        <NavLink to="/citation" className="nav-card">Citation</NavLink>
      </div>
    </div>
  );
}


function Home() {
  return (
    <div className="content-container">
      <h2>Overview</h2>
      <p>
        <InlineMath>{"\\mathbb{O}^{PROS}"}</InlineMath> is the first large-scale dataset for prostate ultrasound computed tomography (USCT) imaging. It contains over 280,000 anatomically realistic speed-of-sound (SOS) maps and corresponding ultrasound waveforms. This dataset enables robust benchmarking of data-driven inversion methods under clinically realistic limited-view conditions.
      </p>
      <p>
        Built from real clinical MRI/CT scans and ex vivo ultrasound data, it supports development and evaluation of deep learning methods, including CNNs and Vision Transformers, for reconstructing high-resolution tissue maps.
      </p>
    </div>
  );
}

function Datasets() {
  return (
    <div className="content-container">
      <h2>Datasets</h2>
      <p>
        OPENPROS offers 6.8 TB of data with 224K training, 28K validation, and 28K test samples. Each sample includes ultrasound waveform data and a corresponding 2D SOS map.
      </p>
      <ul>
        <li>Ultrasound Data Shape: (1140 × 40 × 1000 × 161)</li>
        <li>SOS Map Shape: (1140 × 1 × 401 × 161)</li>
        <li>Available via: <a href="https://open-pros.github.io/">open-pros.github.io</a></li>
      </ul>
    </div>
  );
}

function Benchmarks() {
  return (
    <div className="content-container">
      <h2>Benchmarks</h2>
      <p>
        We benchmarked 5 methods: Beamforming, Physics-based FWI, InversionNet, VelocityGAN, and VisionTransformer.
      </p>
      <table>
        <thead>
          <tr><th>Method</th><th>MAE</th><th>RMSE</th><th>SSIM</th><th>PCC</th></tr>
        </thead>
        <tbody>
          <tr><td>InversionNet</td><td>0.0621</td><td>0.1233</td><td>0.9565</td><td>0.9021</td></tr>
          <tr><td>VelocityGAN</td><td>0.0605</td><td>0.1210</td><td>0.9624</td><td>0.9113</td></tr>
          <tr><td>VisionTransformer</td><td>0.0597</td><td>0.1198</td><td>0.9607</td><td>0.9095</td></tr>
        </tbody>
      </table>
    </div>
  );
}

function Citation() {
  return (
    <div className="content-container">
      <h2>Citation</h2>
      <p>If you use <InlineMath>{"\\mathbb{O}^{PROS}"}</InlineMath> in your work, please cite:</p>
      <pre>
      {`@misc{feng2023openpros,
        title={OPENPROS: A Large-Scale Dataset for Limited View Prostate Ultrasound Computed Tomography},
        author={Shihang Feng et al.},
        year={2023},
        eprint={2306.12386},
        archivePrefix={arXiv},
        primaryClass={physics.geo-ph}
      }`}
      </pre>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datasets" element={<Datasets />} />
        <Route path="/benchmarks" element={<Benchmarks />} />
        <Route path="/citation" element={<Citation />} />
      </Routes>
    </Router>
  );
}
