/**
 * Work / education timeline entries (newest first after sort).
 * Optional fields:
 * - bullets: string[] — achievement lines (rendered as a list)
 * - workplace: 'remote' | 'on-site' | 'hybrid' — shown as a tag
 */

const MONTH_SHORT = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

/** @param {string} ym `YYYY-MM` */
export function formatTimelineMonthYear(ym) {
    const [y, m] = ym.split('-').map(Number);
    if (!y || !m) return ym;
    return `${MONTH_SHORT[m - 1]} ${y}`;
}

/**
 * Inclusive month span between two YYYY-MM values (counts both start and end months).
 * @param {string} startYm
 * @param {string} endYm
 */
function monthCountInclusive(startYm, endYm) {
    const [y1, m1] = startYm.split('-').map(Number);
    const [y2, m2] = endYm.split('-').map(Number);
    return (y2 - y1) * 12 + (m2 - m1) + 1;
}

function currentYearMonth() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

/**
 * Human-readable tenure from start/end (end null = present).
 * @param {string} startDate YYYY-MM
 * @param {string | null} endDate YYYY-MM or null
 */
export function formatEmploymentDuration(startDate, endDate) {
    const endYm = endDate ?? currentYearMonth();
    const totalMonths = monthCountInclusive(startDate, endYm);
    if (totalMonths < 12) {
        return `${totalMonths} mo${totalMonths === 1 ? '' : 's'}`;
    }
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const yPart = `${years} yr${years === 1 ? '' : 's'}`;
    if (months === 0) return yPart;
    return `${yPart} ${months} mo${months === 1 ? '' : 's'}`;
}

export function formatEmploymentRange(startDate, endDate) {
    const startLabel = formatTimelineMonthYear(startDate);
    const endLabel = endDate == null ? 'Present' : formatTimelineMonthYear(endDate);
    return `${startLabel} — ${endLabel}`;
}

const rawEntries = [
    {
        id: 'exp-flexisrv-2025',
        organization: 'FlexiSRV',
        title: 'Full Stack Developer & AI Automation',
        workplace: 'on-site',
        startDate: '2025-07',
        endDate: null,
        type: 'work',
        bullets: [
            'Next.js specialist: built scalable, high-performance, server-rendered web applications.',
            'Designed and implemented AI automation solutions and n8n workflows, streamlining business processes and reducing manual workload.',
            'Managed Linux servers and cloud environments, configured reverse proxy, and deployed apps with PM2 for maximum uptime.',
            'Leveraged Git & GitHub for version control, code reviews, and collaborative development.',
            'Collaborated in cross-functional teams, ensuring timely delivery of high-quality projects.',
            'Executed web scraping pipelines for efficient data extraction and processing.',
        ],
    },
    {
        id: 'exp-finance-gate-2024',
        organization: 'Finance Gate',
        title: 'Full Stack Web Developer',
        workplace: 'remote',
        startDate: '2024-09',
        endDate: '2025-07',
        type: 'work',
        bullets: [
            'Developed and maintained a complete accountant recruitment platform, covering front-end, back-end, and database architecture.',
            'Enhanced user experience, data security, and platform efficiency through continuous improvements.',
        ],
    },
    {
        id: 'exp-freelance-2024',
        organization: 'Freelance Projects',
        title: 'Full Stack Web Developer',
        workplace: 'remote',
        startDate: '2024-10',
        endDate: null,
        type: 'work',
        bullets: [
            'Delivered multiple web development projects for clients using Next.js, Node.js, and modern full-stack technologies.',
            'Implemented custom workflows and automation, including integration with third-party APIs.',
            'Managed end-to-end project development, from requirements gathering to deployment.',
        ],
    },
];

function endDateSortKey(endDate) {
    if (endDate == null) {
        return Number.POSITIVE_INFINITY;
    }
    const normalized = endDate.length === 7 ? `${endDate}-01` : endDate;
    const t = new Date(normalized).getTime();
    return Number.isNaN(t) ? 0 : t;
}

function startDateSortKey(startDate) {
    const normalized = startDate.length === 7 ? `${startDate}-01` : startDate;
    const t = new Date(normalized).getTime();
    return Number.isNaN(t) ? 0 : t;
}

export const timelineData = [...rawEntries].sort((a, b) => {
    const diff = endDateSortKey(b.endDate) - endDateSortKey(a.endDate);
    if (diff !== 0) return diff;
    return startDateSortKey(b.startDate) - startDateSortKey(a.startDate);
});
