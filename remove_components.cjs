const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf-8');
const lines = content.split('\n');

// Delete 985-1052 (InsightsSection)
// Delete 905-983 (TestimonialsCarousel)
// Delete 550-689 (Careers)
// Delete 470-548 (CaseStudies)

// 0-indexed
lines.splice(984, 1052 - 984 + 1);
lines.splice(904, 983 - 904 + 1);
lines.splice(549, 689 - 549 + 1);
lines.splice(469, 548 - 469 + 1);

fs.writeFileSync('src/App.tsx', lines.join('\n'));
