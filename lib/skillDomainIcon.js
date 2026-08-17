import {
    FaCode,
    FaServer,
    FaDatabase,
    FaToolbox,
    FaCloud,
    FaRobot,
    FaDesktop,
} from 'react-icons/fa';

/**
 * Icon component for a skill section title (domain-based heuristic).
 * @param {string} title
 * @returns {import('react').ComponentType<{ className?: string; 'aria-hidden'?: boolean }>}
 */
export function getSkillDomainIcon(title) {
    const t = String(title || '').toLowerCase();
    if (t.includes('frontend')) return FaCode;
    if (t.includes('backend')) return FaServer;
    if (t.includes('database') || t.includes('orm')) return FaDatabase;
    if (t.includes('tools') || t.includes('practices')) return FaToolbox;
    if (t.includes('devops') || t.includes('performance')) return FaCloud;
    if (t.includes('automation') || t.includes('scraping')) return FaRobot;
    if (t.includes('desktop')) return FaDesktop;
    return FaCode;
}
