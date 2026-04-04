const fs = require('fs');

const appTsx = fs.readFileSync('src/App.tsx', 'utf-8');
const hero3D = fs.readFileSync('src/components/Hero3DElement.tsx', 'utf-8');
const aiAssistant = fs.readFileSync('src/components/AIAssistant.tsx', 'utf-8');
const caseStudies = fs.readFileSync('src/components/CaseStudies.tsx', 'utf-8');
const careers = fs.readFileSync('src/components/Careers.tsx', 'utf-8');
const testimonials = fs.readFileSync('src/components/TestimonialsCarousel.tsx', 'utf-8');
const insights = fs.readFileSync('src/components/InsightsSection.tsx', 'utf-8');

// Extract component bodies
function extractBody(content, componentName) {
    const regex = new RegExp(`const ${componentName} = \\(\\) => \\{[\\s\\S]*?^\\};`, 'm');
    const match = content.match(regex);
    return match ? match[0] : '';
}

function extractVariables(content, componentName) {
    // Extract stuff before the component definition, like arrays
    const regex = new RegExp(`(const [a-zA-Z0-9_]+ = \\[[\\s\\S]*?\\];)\\s*const ${componentName} =`, 'm');
    const match = content.match(regex);
    return match ? match[1] : '';
}

const hero3DBody = extractBody(hero3D, 'Hero3DElement');
const aiAssistantBody = extractBody(aiAssistant, 'AIAssistant');
const caseStudiesVars = extractVariables(caseStudies, 'CaseStudies');
const caseStudiesBody = extractBody(caseStudies, 'CaseStudies');
const careersVars = extractVariables(careers, 'Careers');
const careersBody = extractBody(careers, 'Careers');
const testimonialsVars = extractVariables(testimonials, 'TestimonialsCarousel');
const testimonialsBody = extractBody(testimonials, 'TestimonialsCarousel');
const insightsVars = extractVariables(insights, 'InsightsSection');
const insightsBody = extractBody(insights, 'InsightsSection');

let newAppTsx = appTsx;

// Remove lazy imports
newAppTsx = newAppTsx.replace(/const Hero3DElement = lazy[^\n]+\n/g, '');
newAppTsx = newAppTsx.replace(/const AIAssistant = lazy[^\n]+\n/g, '');
newAppTsx = newAppTsx.replace(/const CaseStudies = lazy[^\n]+\n/g, '');
newAppTsx = newAppTsx.replace(/const Careers = lazy[^\n]+\n/g, '');
newAppTsx = newAppTsx.replace(/const TestimonialsCarousel = lazy[^\n]+\n/g, '');
newAppTsx = newAppTsx.replace(/const InsightsSection = lazy[^\n]+\n/g, '');

// Remove Suspense wrappers in App component
newAppTsx = newAppTsx.replace(/<Suspense fallback=\{<div className="h-96[^>]+><div[^>]+><\/div><\/div>\}>\s*<CaseStudies \/>\s*<\/Suspense>/g, '<CaseStudies />');
newAppTsx = newAppTsx.replace(/<Suspense fallback=\{<div className="h-96[^>]+><div[^>]+><\/div><\/div>\}>\s*<TestimonialsCarousel \/>\s*<\/Suspense>/g, '<TestimonialsCarousel />');
newAppTsx = newAppTsx.replace(/<Suspense fallback=\{<div className="h-96[^>]+><div[^>]+><\/div><\/div>\}>\s*<InsightsSection \/>\s*<\/Suspense>/g, '<InsightsSection />');
newAppTsx = newAppTsx.replace(/<Suspense fallback=\{<div className="h-96[^>]+><div[^>]+><\/div><\/div>\}>\s*<Careers \/>\s*<\/Suspense>/g, '<Careers />');
newAppTsx = newAppTsx.replace(/<Suspense fallback=\{null\}>\s*<AIAssistant \/>\s*<\/Suspense>/g, '<AIAssistant />');
newAppTsx = newAppTsx.replace(/<Suspense fallback=\{<div className="w-full h-full bg-slate-800 animate-pulse" \/>\}>\s*<Hero3DElement \/>\s*<\/Suspense>/g, '<Hero3DElement />');

// Insert components before export default function App()
const componentsToInsert = [
    hero3DBody,
    aiAssistantBody,
    caseStudiesVars + '\n' + caseStudiesBody,
    careersVars + '\n' + careersBody,
    testimonialsVars + '\n' + testimonialsBody,
    insightsVars + '\n' + insightsBody
].join('\n\n');

newAppTsx = newAppTsx.replace('export default function App() {', componentsToInsert + '\n\nexport default function App() {');

// Add missing imports
const importsToAdd = `
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls, Float, Stars } from "@react-three/drei";
`;
newAppTsx = newAppTsx.replace('import { GoogleGenAI } from "@google/genai";', 'import { GoogleGenAI } from "@google/genai";' + importsToAdd);

// Add Heart to lucide-react imports if not there
if (!newAppTsx.includes('Heart,')) {
    newAppTsx = newAppTsx.replace('MessageSquare', 'MessageSquare,\n  Heart');
}

fs.writeFileSync('src/App.tsx', newAppTsx);
