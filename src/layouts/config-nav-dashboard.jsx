import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
};

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Management
   */
  {
    subheader: 'Management',
    items: [
      {
        title: 'Reception',
        path: paths.dashboard.reception.root,
        icon: ICONS.user,
        children: [
          { title: 'Enquiry', path: paths.dashboard.reception.enquiry },
          { title: 'Visitor Log', path: paths.dashboard.reception.visitorLog },
          { title: 'Gate Pass', path: paths.dashboard.reception.gatePass },
          { title: 'Complaint', path: paths.dashboard.reception.complaint },
          { title: 'Call Log', path: paths.dashboard.reception.callLog },
          { title: 'Correspondence', path: paths.dashboard.reception.correspondence },
          { title: 'Query', path: paths.dashboard.reception.query },
        ],
      },
      {
        title: 'Academic',
        path: paths.dashboard.product.root,
        icon: ICONS.product,
        children: [
          { title: 'Department', path: paths.dashboard.product.root },
          { title: 'Program', path: paths.dashboard.product.demo.details },
          { title: 'Session', path: paths.dashboard.product.new },
          { title: 'Period', path: paths.dashboard.product.demo.edit },
          { title: 'Division', path: paths.dashboard.product.root },
          { title: 'Course', path: paths.dashboard.product.demo.details },
          { title: 'Batch', path: paths.dashboard.product.new },
          { title: 'Subject', path: paths.dashboard.product.demo.edit },
          { title: 'Class Timing', path: paths.dashboard.product.demo.edit },
          // { title: 'Subject', path: paths.dashboard.product.demo.edit },
          { title: 'Timetable', path: paths.dashboard.product.demo.edit },
          { title: 'Book list', path: paths.dashboard.product.demo.edit },
          { title: 'Certificate', path: paths.dashboard.product.demo.edit },
          { title: 'ID Card', path: paths.dashboard.product.demo.edit },
        ],
      },
      {
        title: 'Student',
        path: paths.dashboard.general.app,
        icon: ICONS.tour,
        children: [
          { title: 'Students', path: paths.dashboard.user.root },
          { title: 'Registration', path: paths.dashboard.user.cards },
          { title: 'Roll Number', path: paths.dashboard.user.list },
          { title: 'Health Record', path: paths.dashboard.user.new },
          { title: 'Elective Subject', path: paths.dashboard.user.demo.edit },
          { title: 'Attendance', path: paths.dashboard.user.account },
          { title: 'Fee Allocation', path: paths.dashboard.user.account },
          { title: 'Promotion', path: paths.dashboard.user.account },
          { title: 'Edit Request', path: paths.dashboard.user.account },
          { title: 'Leave Request', path: paths.dashboard.user.account },
          { title: 'Transfer Request', path: paths.dashboard.user.account },
          { title: 'Transfer', path: paths.dashboard.user.account },
          { title: 'Alumni', path: paths.dashboard.user.account },
          { title: 'Report', path: paths.dashboard.user.account },
        ],
      },
      {
        title: 'Finance',
        path: paths.dashboard.blank, // Keep the path as per your example
        icon: ICONS.banking, // Keep the icon as per your example
        children: [
          { title: 'Payment Method', path: paths.dashboard.user.root },
          { title: 'Fee Group', path: paths.dashboard.user.cards },
          { title: 'Fee Head', path: paths.dashboard.user.list },
          { title: 'Fee Concession', path: paths.dashboard.user.new },
          { title: 'Fee Structure', path: paths.dashboard.user.demo.edit },
          { title: 'Ledger Type', path: paths.dashboard.user.account },
          { title: 'Ledger', path: paths.dashboard.user.account },
          { title: 'Transaction', path: paths.dashboard.user.account },
          { title: 'Report', path: paths.dashboard.user.account },
        ],
      },
      {
        title: 'Exam',
        path: paths.dashboard.invoice.root, // Keep the path as per your example
        icon: ICONS.invoice, // Keep the icon as per your example
        children: [
          { title: 'Exams', path: paths.dashboard.user.root },
          { title: 'Exam Term', path: paths.dashboard.user.cards },
          { title: 'Exam Grade', path: paths.dashboard.user.list },
          { title: 'Exam Assessment', path: paths.dashboard.user.new },
          { title: 'Observation Parameter', path: paths.dashboard.user.demo.edit },
          { title: 'Exam Schedule', path: paths.dashboard.user.account },
          { title: 'Exam Form', path: paths.dashboard.user.account },
          { title: 'Online Exam', path: paths.dashboard.user.account },
          { title: 'Admit Card', path: paths.dashboard.user.account },
          { title: 'Exam Mark', path: paths.dashboard.user.account },
          { title: 'Marksheet', path: paths.dashboard.user.account },
          { title: 'Report', path: paths.dashboard.user.account },
        ],
      },
      {
        title: 'Employee',
        path: paths.dashboard.post.root, // Keep the path as per your example
        icon: ICONS.external, // Keep the icon as per your example
        children: [
          { title: 'Employees', path: paths.dashboard.user.root },
          { title: 'Department', path: paths.dashboard.user.cards },
          { title: 'Designation', path: paths.dashboard.user.list },
          { title: 'Attendance', path: paths.dashboard.user.new },
          { title: 'Leave', path: paths.dashboard.user.demo.edit },
          { title: 'Payroll', path: paths.dashboard.user.account },
          { title: 'Edit Request', path: paths.dashboard.user.account },
        ],
      },
      {
        title: 'Resource',
        path: paths.dashboard.order.root, // Keep the path as per your example
        icon: ICONS.blank, // Keep the icon as per your example
        children: [
          { title: 'Book Lists', path: paths.dashboard.user.root },
          { title: 'Student Diary', path: paths.dashboard.user.cards },
          { title: 'Syllabus', path: paths.dashboard.user.list },
          { title: 'Lesson Plan', path: paths.dashboard.user.new },
          { title: 'Assignment', path: paths.dashboard.user.demo.edit },
          { title: 'Online Class', path: paths.dashboard.user.account },
          { title: 'Learning Material', path: paths.dashboard.user.account },
          { title: 'Download', path: paths.dashboard.user.account },
          { title: 'Report', path: paths.dashboard.user.account },
        ],
      },
      {
        title: 'Calendar',
        path: paths.dashboard.job.root,
        icon: ICONS.calendar,
        children: [
          { title: 'Holiday', path: paths.dashboard.user.root },
          { title: 'Celebration', path: paths.dashboard.user.cards },
          { title: 'Event', path: paths.dashboard.user.list },
        ],
      },
      {
        title: 'Discipline',
        path: paths.dashboard.tour.root, // Keep the path as per your example
        icon: ICONS.blog, // Keep the icon as per your example
        children: [{ title: 'Gallery', path: paths.dashboard.user.root }], // No children in the provided HTML
      },
      {
        title: 'Guardian',
        path: paths.dashboard.gardien.root, // Keep the path as per your example
        icon: ICONS.booking, // Keep the icon as per your example
      },
      {
        title: 'Contact',
        path: paths.dashboard.contact.root, // Keep the path as per your example
        icon: ICONS.analytics, // Keep the icon as per your example
      },
      {
        title: 'Mess',
        path: paths.dashboard.mess.root, // Keep the path as per your example
        icon: ICONS.banking, // Keep the icon as per your example
        children: [
          { title: 'Item', path: paths.dashboard.user.root },
          { title: 'Meal', path: paths.dashboard.user.cards },
          { title: 'Meal Log', path: paths.dashboard.user.list },
        ],
      },
      {
        title: 'Inventory',
        path: paths.dashboard.inventory.root, // Keep the path as per your example
        icon: ICONS.blank, // Keep the icon as per your example
        children: [
          { title: 'Stock Category', path: paths.dashboard.user.root },
          { title: 'Stock Item', path: paths.dashboard.user.cards },
          { title: 'Stock Requisition', path: paths.dashboard.user.list },
          { title: 'Stock Purchase', path: paths.dashboard.user.new },
          { title: 'Stock Transfer', path: paths.dashboard.user.demo.edit },
          { title: 'Stock Adjustment', path: paths.dashboard.user.account },
        ],
      },
      {
        title: 'Communication',
        path: paths.dashboard.communication.root, // Keep the path as per your example
        icon: ICONS.blog, // Keep the icon as per your example
        children: [
          { title: 'Announcement', path: paths.dashboard.user.root },
          { title: 'Email', path: paths.dashboard.user.cards },
          { title: 'SMS', path: paths.dashboard.user.list },
        ],
      },
      {
        title: 'Library',
        path: paths.dashboard.library.root, // Keep the path as per your example
        icon: ICONS.booking, // Keep the icon as per your example
        children: [
          { title: 'Book', path: paths.dashboard.user.root },
          { title: 'Book Addition', path: paths.dashboard.user.cards },
          { title: 'Issue & Return', path: paths.dashboard.user.list },
        ],
      },
      {
        title: 'Activity',
        path: paths.dashboard.activity.root, // Keep the path as per your example
        icon: ICONS.calendar, // Keep the icon as per your example
        children: [{ title: 'Trip', path: paths.dashboard.user.root }],
      },
      {
        title: 'Form',
        path: paths.dashboard.form.root, // Keep the path as per your example
        icon: ICONS.chat, // Keep the icon as per your example
      },
      {
        title: 'Asset',
        path: paths.dashboard.asset.root, // Keep the path as per your example
        icon: ICONS.course, // Keep the icon as per your example
        children: [{ title: 'Building', path: paths.dashboard.user.root }],
      },
      {
        title: 'Site',
        path: paths.dashboard.site.root, // Keep the path as per your example
        icon: ICONS.dashboard, // Keep the icon as per your example
        children: [
          { title: 'Page', path: paths.dashboard.user.root },
          { title: 'Menu', path: paths.dashboard.user.cards },
          { title: 'Block', path: paths.dashboard.user.list },
        ],
      },
      {
        title: 'Blog',
        path: paths.dashboard.blog.root, // Keep the path as per your example
        icon: ICONS.blog, // Keep the icon as per your example
      },
      {
        title: 'Recruitment',
        path: paths.dashboard.recruitment.root, // Keep the path as per your example
        icon: ICONS.ecommerce, // Keep the icon as per your example
        children: [
          { title: 'Job Vacancy', path: paths.dashboard.user.root },
          { title: 'Job Application', path: paths.dashboard.user.cards },
        ],
      },
      {
        title: 'User',
        path: paths.dashboard.user.root, // Keep the path as per your example
        icon: ICONS.user, // Keep the icon as per your example
      },
      {
        title: 'Custom Field',
        path: paths.dashboard.custom_field.root, // Keep the path as per your example
        icon: ICONS.external, // Keep the icon as per your example
      },
      {
        title: 'Utility',
        path: paths.dashboard.utility.root, // Keep the path as per your example
        icon: ICONS.file, // Keep the icon as per your example
        children: [
          { title: 'Todo', path: paths.dashboard.user.root },
          { title: 'Backup', path: paths.dashboard.user.cards },
          { title: 'Activity Log', path: paths.dashboard.user.list },
        ],
      },
      {
        title: 'Config',
        path: paths.dashboard.config.root, // Keep the path placeholder as per your example
        icon: ICONS.parameter, // Keep the icon placeholder as per your example
        children: [
          { title: 'General Config', path: paths.dashboard.user.root },
          { title: 'Asset Config', path: paths.dashboard.user.cards },
          { title: 'System Config', path: paths.dashboard.user.list },
          { title: 'Authentication', path: paths.dashboard.user.root },
          { title: 'Mail Config', path: paths.dashboard.user.cards },
          { title: 'SMS Config', path: paths.dashboard.user.list },
          { title: 'Notification', path: paths.dashboard.user.root },
          { title: 'Chat', path: paths.dashboard.user.cards },
          { title: 'Mail Template', path: paths.dashboard.user.list },
          { title: 'SMS Template', path: paths.dashboard.user.root },
          { title: 'Push Notification Template', path: paths.dashboard.user.cards },
          { title: 'Feature', path: paths.dashboard.user.list },
          { title: 'Module', path: paths.dashboard.user.root },
          { title: 'Social Network', path: paths.dashboard.user.cards },
          { title: 'Locale', path: paths.dashboard.user.list },
        ],
      },
    ],
  },
];
