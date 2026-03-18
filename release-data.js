var ADENO_RELEASE_DATA = [
  {
    "name": "Access Management",
    "type": "New feature",
    "products": [
      "Integrations",
      "SecOps",
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=machine-identity-access-controls&family=zurich&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Machine identity access controls</a></strong></p>\n<p>Enforce fine-grained access to data via REST or SOAP endpoints using Machine Identity Access Controls. This feature enables you to define which integrations can access specific data, confirming that the integrations only have access to the resources they need.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-appenginemanagementcenter-release-notes.html",
    "resources": "",
    "importance": "High"
  },
  {
    "name": "Access Management",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=scripting-governance&family=zurich&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Scripting Governance Tool</a> tool and role</strong></p>\n<p>Review and help reduce the number of users with scripting privileges using the Scripting Governance Tool. This tool helps improve platform security with scripting governance based on user role.</p>\n<p>A new deny-by-default behavior is enforced for scripting unless you have the snc\\_required\\_script\\_writer\\_permission role. After an upgrade or zBoot, this role is automatically assigned via the Conditional Script Writer group.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-appenginemanagementcenter-release-notes.html",
    "resources": "",
    "importance": "High"
  },
  {
    "name": "Access Management",
    "type": "New feature",
    "products": [
      "Core Platform",
      "SecOps",
      "Developers",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=datatype-acl&family=zurich&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Datatype ACL</a></strong></p>\n<p>Simplify and help reduce redundant ACL definitions with Datatype ACLs. Create a single ACL to target all table columns of a specific data type, streamlining access control configurations.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-appenginemanagementcenter-release-notes.html",
    "resources": "",
    "importance": "Medium"
  },
  {
    "name": "Access Management",
    "type": "Change",
    "products": [
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=query-acl-rule&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Query ACLs</a></strong></p>\n<p>Query ACLs now load automatically during plugin installation for most platform plugins. These preconfigured ACLs reduce the need to run the QueryRangeACLAuditor tool to generate query ACLs. Store app query ACLs aren't included in preconfigured query ACLs. For more information about preconfigured query ACLs, see the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB2046494\" target=\"_blank\" rel=\"noopener noreferrer\">Maintenance Information KB2046494</a> article in the Now Support Knowledge Base.</p>\n<p>Existing custom query ACLs are preserved and loaded as inactive. To view inactive ACLs, use this command: <code><INSTANCE_URL>/sys_security_acl_list.do?[query_parameters]</code></p>\n<p>QueryRangeACLAuditor tool modifications are preserved.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-appenginemanagementcenter-release-notes.html",
    "resources": "",
    "importance": "Medium"
  },
  {
    "name": "Access Management",
    "type": "Change",
    "products": [
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=acl-rule-types&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ACL rule types</a></strong></p>\n<p>Core field and datatype ACLs are replaced with more comprehensive rules to optimize ACL volume.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-appenginemanagementcenter-release-notes.html",
    "resources": "",
    "importance": "Medium"
  },
  {
    "name": "Access Management",
    "type": "Change",
    "products": [
      "AI Platform",
      "AI Governance",
      "Now Assist",
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=access-analyzer&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Access Analyzer</a></strong></p>\n<p>Use ServiceNow® Access Analyzer v6.1, a tool designed for AI administrators or creators to validate the access controls configured within agentic assets (agentic workflows and AI agents) on the ServiceNow AI Platform.</p>\n<p><strong>Important:</strong></p>\n<p>Access Analyzer is available in the ServiceNow Store. For more information, visit <a href=\"https://store.servicenow.com/store\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-appenginemanagementcenter-release-notes.html",
    "resources": "",
    "importance": "Medium"
  },
  {
    "name": "Accounts Payable Operations",
    "type": "New feature",
    "products": [
      "Integrations",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=tax-engine-integration&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Tax Engine Integration</a></strong></p>\n<p>The tax engine integration framework validates supplier-provided tax against system tax at invoice line level, maintains compliance with regional and global tax regulations. This integration triggers automatic tax validation, handles exceptions for tax variance and missing data, enables manual revalidation and rolling up of system tax.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-accountlifecycleevents-release-notes.html",
    "resources": "",
    "importance": "High"
  },
  {
    "name": "Accounts Payable Operations",
    "type": "Change",
    "products": [
      "Now Assist",
      "AI Platform",
      "AI Search",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-di-using-now-assis&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure Document Intelligence using Now Assist for Accounts Payable Operations (APO)</a></strong></p>\n<p>The Document classification skill auto-classifies supplier email attachments as invoice, credit memo, or supporting documents with an AI-recommended confidence score. After the classification, separate invoice processing cases are created for invoices and credit memo with supporting documents linked to both the cases. The playbook allows you to configure the confidence threshold for auto-approval or involve AP specialists to manually review them.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-accountlifecycleevents-release-notes.html",
    "resources": "",
    "importance": "High"
  },
  {
    "name": "Activity Management",
    "type": "New feature",
    "products": [
      "CSM",
      "CRM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=associate-email-crm-outlook&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Associate emails</a></strong></p>\n<p>Associate customer emails to the correct ServiceNow CRM record without leaving Microsoft Outlook. Manually search and associate emails with leads, opportunities, accounts, or contacts, so that engagement context is captured immediately and remains available for future correspondence and follow‑up.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-accountspayableoperations-release-notes.html",
    "resources": "",
    "importance": "Medium"
  },
  {
    "name": "Activity Management",
    "type": "New feature",
    "products": [
      "CRM",
      "CSM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-crm-entity-outlook&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create new leads and contacts from email</a></strong></p>\n<p>Create a new lead or contact directly from an email when no matching CRM record exists, and automatically attach the originating email to the newly created record to preserve engagement history.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-accountspayableoperations-release-notes.html",
    "resources": "",
    "importance": "Medium"
  },
  {
    "name": "Activity Management",
    "type": "New feature",
    "products": [
      "CSM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-crm-touchpoint&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Touchpoints on CRM entities</a></strong></p>\n<p>Capture and track engagement activities for prospects and customers across communication channels such as email, phone, virtual meeting, in-person meetings, and social interactions by creating touchpoint records. Associate touchpoints with leads, opportunities, accounts, and contacts to maintain a complete engagement history.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-accountspayableoperations-release-notes.html",
    "resources": "",
    "importance": "Medium"
  },
  {
    "name": "Activity Management",
    "type": "New feature",
    "products": [
      "CSM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-custom-touchpoint-types&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Custom touchpoint types</a></strong></p>\n<p>Define custom touchpoint types in addition to the default types of discovery, demo, and customer business review (CBR) to match your organization's specific engagement processes.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-accountspayableoperations-release-notes.html",
    "resources": "",
    "importance": "Low"
  },
  {
    "name": "Activity Management",
    "type": "New feature",
    "products": [
      "CRM",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=using-activity-management&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Activity capture and tracking</a></strong></p>\n<p>Capture emails, calls, meetings, and tasks within touchpoints such as discovery, demo, business value assessment, or CBRs in a single system of record. Track metrics such as primary channel and time spent for every interaction, giving leadership visibility into the activity volume per sales representative.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-accountspayableoperations-release-notes.html",
    "resources": "",
    "importance": "Medium"
  },
  {
    "name": "Adoption Services",
    "type": "New feature",
    "products": [
      "CSM",
      "ITSM",
      "WSD",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=help-center&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Help Center</a></strong></p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-activitymanagement-release-notes.html",
    "resources": "",
    "importance": "Low"
  },
  {
    "name": "Adoption Services",
    "type": "Activation Information",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=guided-tours&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Guided Tours</a></strong></p>\n<p>Guided Tours is enhanced with more accessibility features including:</p>\n<ul>\n<li>Descriptive page titles</li>\n<li>Keyboard assistance for suggesting required fields through screen reader</li>\n<li>Keyboard assistance for focussed user interface controls like, tool tip icons and check-boxes</li>\n</ul>\n<p>v</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-activitymanagement-release-notes.html",
    "resources": "",
    "importance": "Low"
  },
  {
    "name": "Advanced Approval Management",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITSM",
      "CSM",
      "FSM",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configuring-advanced-approval-management&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Flexible approval configurations</a></strong></p>\n<p>Build workflows that enable sequential approvals, parallel (simultaneous) approvals, or a coFmbination of both.</p>\n<ul>\n<li>Define workflow approval steps and optional chains that progress through multiple approval levels based on rule evaluations.</li>\n<li>Set the approval order using combinations of levels, roles, and conditions.</li>\n<li>Define approval users and groups.</li>\n<li>Control the consolidation of approval requests for approvers when multiple conditions and sequences exist on the same approval request.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-activitymanagement-release-notes.html",
    "resources": "",
    "importance": "Medium"
  },
  {
    "name": "Advanced Approval Management",
    "type": "New feature",
    "products": [
      "CRM",
      "CSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=set-approval-trigger-conditions&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Intelligent routing rules and smart reapprovals</a></strong></p>\n<p>Automatically trigger approvals by setting conditions based on items such as discount percentage, deal size, and margin thresholds. Configure thresholds and conditions so the approval workflow skips approved steps that have already been approved if the underlying conditions haven't changed.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-activitymanagement-release-notes.html",
    "resources": "",
    "importance": "Medium"
  },
  {
    "name": "Advanced Approval Management",
    "type": "New feature",
    "products": [
      "CSM",
      "ITSM",
      "WSD",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=setting-up-approval-notifications&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Automated notifications of approval status</a></strong></p>\n<p>Inform sales agents and approvers of the status for approval items moving through the approval workflow by setting up notifications. Customize email templates for assignment, reminders, escalation, and cancellation scenarios.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-activitymanagement-release-notes.html",
    "resources": "",
    "importance": "Medium"
  },
  {
    "name": "Advanced Approval Management",
    "type": "New feature",
    "products": [
      "Core Platform",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=submitting-approval-requests&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Flexible submission for approval requests</a></strong></p>\n<p>Before submitting requests for approval, see required approvals, approver names, approval reasons, and sequencing by creating and previewing approval requests. You can recall approval requests for changes and resubmit them.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-activitymanagement-release-notes.html",
    "resources": "",
    "importance": "Medium"
  },
  {
    "name": "Advanced Approval Management",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITSM",
      "OTSM",
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=tracking-approval-status&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Real-time status tracking and approval history</a></strong></p>\n<p>Monitor approval progress and access an audit trail with detailed status for each approval step including assigned approvers, actual approvers (for completed steps), approval comments, and assignment and completion timestamps.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-activitymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Advanced Approval Management",
    "type": "New feature",
    "products": [
      "CSM",
      "AI Platform",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=approving-approval-requests&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Approval management</a></strong></p>\n<ul>\n<li>Accept or reject approvals using multiple channels, such as email, push notifications, the CSM Configurable Workspace, or approval centers, such as My Approvals in the ServiceNow AI Platform®.</li>\n<li>Assign backup approvers with date-specific coverage periods for seamless continuity of the approval process.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-activitymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Advanced Risk",
    "type": "New feature",
    "products": [
      "IRM",
      "CSDM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-risk-event-response-template&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Risk event response template enhancements</a></strong></p>\n<p>After upgrading to version 22.0.x, users with the Risk Manager [sn\\_risk.manager] or Risk Admin [sn\\_risk.admin] role can configure risk event response templates using dynamic, entity‑driven assignments. These changes enable assignments to be derived from entity data alongside existing static user or group selection.</p>\n<p>You can select user fields defined on the entity (such as Owner or Sub-owner) or entity stakeholder personas when configuring:</p>\n<ul>\n<li>Risk event owner assignment</li>\n<li>Issue creation and assignment</li>\n<li>Risk event approvers</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-advancedapprovalmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Advanced Risk",
    "type": "New feature",
    "products": [
      "IRM",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=identify-risks-for-entity&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Risk Suggestion AI Agent enhancements</a></strong></p>\n<p>After upgrading the Now Assist for Integrated Risk Management (IRM) application to version 22.x, the Risk Suggestion AI Agent supports a more context‑aware and conversational workflow. After selecting risk types, you can provide additional context to refine search results, with the agent dynamically asking follow‑up questions when needed. Before adding risks to the suggested risk section, you can review and modify suggested risks by updating descriptions, renaming risks, or removing items from the list.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-advancedapprovalmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Advanced Risk",
    "type": "New feature",
    "products": [
      "IRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-control-objective-ws&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Control Objective workflow</a></strong></p>\n<p>After upgrading to version 22.0.x, you can use a defined workflow to update control objectives. Changes can be drafted and reviewed without changing the current active version, which helps avoid unintended changes to related controls, and risk records. Only approved updates become active. The workflow also sets clear responsibility for making updates and helps keep control objective information consistent and up to date.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-advancedapprovalmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Advanced Work Assignment",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITSM",
      "FSM",
      "CSM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=awa-application-landing-page&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Advanced Work Assignment</a></strong></p>\n<p>Configure routing for non-task and non-interaction tables such as leads, opportunities, orders, and quotes in AWA.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-advancedworkassignmentawa-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Advanced Work Assignment",
    "type": "New feature",
    "products": [
      "CSM",
      "WSD",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=awa-application-landing-page&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Advanced Work Assignment</a></strong></p>\n<p>Use telephone-style transfer workflows in AWA to enable warm transfers where agents consult privately before merging calls with the customer.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-advancedworkassignmentawa-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent experience for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=csm-config-ws-bottom-utility-bar&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Dock in CSM Configurable Workspace</a></strong></p>\n<p>Enable agents to minimize drafts of comments, work notes, or emails to a dock at the bottom of the workspace page. This centralized location provides agents with the ability to see all current drafts at a glance.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent experience for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=csm-workspace-form-templates&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Form template enhancements</a></strong></p>\n<p>Save time and promote consistency by creating conditional templates, setting field-level conditions, and automatically populating email body text. Populate these fields using dynamic values from the Case table and related tables. Preview template changes before applying them to a record.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent experience for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "ITSM",
      "Integrations",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=csm-config-ws-pages-templates&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Workspace record page interoperability</a></strong></p>\n<p>Enable agents to use record pages between CSM Configurable Workspace and ITSM Service Operations Workspace. The following ITSM pages are interoperable across CSM:</p>\n<ul>\n<li>Incident page</li>\n<li>Change page</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent experience for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=interaction-wrapup-ai-generated&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">AI interaction wrap-up</a></strong></p>\n<p>Provide agents with AI assistance during the interaction wrap-up period. This feature generates wrap-up content for interaction records, such as the wrap-up code and notes.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent experience for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "UI",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=csm-workspace-agent-actions&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Highlight fields with unsaved changes</a></strong></p>\n<p>Use visual indicators in CSM Configurable Workspace such as icons and background colors to indicate form fields with unsaved changes.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent experience for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=csm-workspace-create-knowledge&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Knowledge Center article editor available in CSM Configurable Workspace</a></strong></p>\n<p>Use the Knowledge Center article editor to create and edit knowledge articles in CSM Configurable Workspace. Agents can access the editing capabilities available in the article editor to format knowledge article content such as text, images, and media.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent experience for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=csm-email-interaction-record-page&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Unread email count on interaction tabs</a></strong></p>\n<p>Displays the number of unread email messages on interaction tabs in CSM Configurable Workspace. Hovering over a tab displays a tooltip with a preview of the most recent email.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent experience for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=csm-workspace-agent-actions&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Editable record headers</a></strong></p>\n<p>Enables agents to edit the short description of a record directly from the header field. This feature is available on the following record pages:</p>\n<ul>\n<li>Front-line case page</li>\n<li>CSM Interaction record page</li>\n<li>CSM default record page</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent experience for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=csm-config-ws-collaborate-component&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Collaborate component in CSM Configurable Workspace</a></strong></p>\n<p>Use the Collaborate component in the contextual side panel in CSM Configurable Workspace to communicate and collaborate with stakeholders in real time to resolve cases.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent experience for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "ITSM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=csm-front-line-case-page&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">SLA component on the Front-line case page</a></strong></p>\n<p>Use the Service Level Agreement (SLA) component in the contextual side panel on the Front-line case page to view SLAs. The SLA cards appear in the Record Information tab below the record information card.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent experience for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=csm-email-interaction-record-page&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Email Interaction record page enhancements</a></strong></p>\n<p>Minimize drafts to a dock at the bottom of the workspace page in the inline modeless composer. View activities in the activity feed at the top of the page in reverse order, with the newest entries displayed at the bottom.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent experience for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=csm-email-interaction-record-page&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Lookup component added to the Email Interaction record page</a></strong></p>\n<p>Enable agents to look up contacts and consumers by name, phone number, or email address and link them to a record.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent experience for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "Now Assist",
      "AI Search",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=csm-config-ws-action-layout-groups&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create actions on the Front-line case page</a></strong></p>\n<p>Create different types of records by using the <strong>Create</strong> button on the Front-line case page. Selecting an action from the Create button, such as creating an incident or a knowledge gap, opens the form in a modeless dialogue.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent experience for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=csm-front-line-case-page-modeless-dialogs&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">View attachments in modeless dialogs</a></strong></p>\n<p>Enable agents to access and review attachments in modeless dialogs instead of workspace tabs. Agents can easily view attachments while also viewing case information and drafts of emails, comments, or work notes.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent experience for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "UI",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=auto-dismiss-alerts-in-csm-configurable-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Auto-dismiss alerts</a></strong></p>\n<p>Reduce visual clutter through auto-dismissible alerts, which are enabled by default for Info, Low, and Moderate alerts, with a default timer of five seconds. Critical and High alerts remain persistent to ensure important notifications stay visible</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent experience for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=csm-config-workspace-interface&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Maximum number of active tabs in CSM Configurable Workspace</a></strong></p>\n<p>Agents can open up to 20 active tabs (previously 10) in CSM Configurable Workspace to handle multiple tasks simultaneously without losing context.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent experience for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=csm-config-workspace-list-views&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Open multiple lists in separate primary tabs</a></strong></p>\n<p>Agents can now open multiple lists in different CSM Configurable Workspace primary tabs, enabling seamless context switching between lists without losing their current workspace view.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent experience for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=r_RolesInstalledWithCustomerService&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Granular admin roles</a></strong></p>\n<p>Enhance security, reduce over-privileged accounts, and enable flexible, task-focused permission management by assigning granular, feature-specific roles to replace broad admin access.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent Workspace for HR Case Management",
    "type": "New feature",
    "products": [
      "HR",
      "HRSD",
      "Integrations",
      "UI",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=enable-hr-icc&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Integration with Contact Center as a Service (CCaaS)</a></strong></p>\n<p>Implement prebuilt, certified integrations with Contact Center as a Service (CCaaS) providers using the ServiceNow voice reference architecture. The Interaction Controls Component (ICC) feature enables CCaaS providers to display native voice and callback integrations so HR agents can manage customer calls directly from HR Agent Workspace. HR agents are provided a brief wrap-up period at the end of customer conversations to complete their work before moving on to assist other customers.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent Workspace for HR Case Management",
    "type": "New feature",
    "products": [
      "HRSD",
      "UI",
      "Now Assist",
      "AI Search",
      "HR"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=recommended-actions-hrsd&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Recommended Actions for HRSD</a></strong></p>\n<p>Recommend actions based on the context of the HR case, helping agents resolve case faster.</p>\n<ul>\n<li>Lists KB articles and similar cases in the context of the current case.</li>\n<li>Suggests to add an approval to the case only when an approval is required.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent Workspace for HR Case Management",
    "type": "New feature",
    "products": [
      "HR",
      "HRSD",
      "CSM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=agent-ws-configurable-hr-create-case&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Case creation configuration</a></strong></p>\n<p>Enable an HR agent to quickly review the HR profiles of both <strong>subject person</strong> and <strong>opened for</strong> during the case creation process.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent Workspace for HR Case Management",
    "type": "New feature",
    "products": [
      "HRSD",
      "Now Assist",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=advance-knowledge-editor&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Advanced Knowledge Editor</a></strong></p>\n<p>Streamline Knowledge article creation and editing with AI support in an improved, intuitive editor. Leverage AI powered Article optimizations recommendations to improve the knowledge content quality.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Agent Workspace for HR Case Management",
    "type": "Activation Information",
    "products": [
      "HRSD",
      "HR",
      "UI"
    ],
    "details": "<p>Install Agent Workspace for HR Case Management by requesting it from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-agentexperienceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "AI Control Tower",
    "type": "New feature",
    "products": [
      "AI Control Tower",
      "AI Platform",
      "AI Governance",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=enterprise-ai-discovery&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enterprise AI Discovery</a></strong></p>\n<p>AI connections are created using AI Service Graph Connectors. AI connections are combination of hyperscalars, AI apps, and agentic AI frameworks.</p>\n<p>The AI Service Graph Connectors available from March 2026</p>\n<ul>\n<li><a href=\"https://www.servicenow.com/docs/access?context=aws_0&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">AWS</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=microsoft&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft</a>- Azure Foundry and Copilot</li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=gcp-vertex-ai&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Google Cloud Platform (GCP) Vertex AI</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=n8n&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">n8n</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=langgraph&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">LangGraph</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=salesforce&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Salesforce</a></li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-aicontroltower-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "AI Control Tower",
    "type": "New feature",
    "products": [
      "AI Control Tower",
      "AI Governance",
      "AI Platform",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=assets-list-managing-and-unmanaging-assets&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Managing and unmanaging assets</a></strong></p>\n<p>Managed assets benefit from AI Control Tower features such as governance, lifecycle management, value assessment, risk classification, security, and privacy. Unmanaged assets, on the other hand, do not have access to these AI Control Tower capabilities.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-aicontroltower-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "AI Control Tower",
    "type": "New feature",
    "products": [
      "AI Control Tower",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=ai-gateway-overview&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">AI Gateway Overview</a></strong></p>\n<p>AI Gateway offers MCP Global Clients, which can be used across all servers.</p>\n<p>A Gateway offers MCP Catalog to choose while adding MCP servers.</p>\n<p>MCP server can be added to an AI Asset inventory from AI Control Tower.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-aicontroltower-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "AI Control Tower",
    "type": "Change",
    "products": [
      "AI Control Tower",
      "Now Assist",
      "AI Platform",
      "AI Governance"
    ],
    "details": "<p><strong>New <a href=\"https://www.servicenow.com/docs/access?context=ai-control-tower-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">AI Control Tower landing</a></strong> <strong>experience</strong></p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-aicontroltower-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "AI Control Tower",
    "type": "Removed",
    "products": [
      "AI Control Tower",
      "Now Assist",
      "AI Platform",
      "AI Governance"
    ],
    "details": "<p>Non-SGC way (legacy way) to make connection will be deprecated and New button on the Non-SGC connection display table will be removed to block users from creating new connections by the legacy way in March GA and decommissioned by May release.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-aicontroltower-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "AI Control Tower",
    "type": "Browser Requirements",
    "products": [
      "AI Control Tower",
      "AI Governance",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p>The AI Control Tower application supports all the browsers.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-aicontroltower-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "AI Control Tower",
    "type": "Accessibility Information",
    "products": [
      "AI Control Tower",
      "Core Platform",
      "AI Platform",
      "AI Governance"
    ],
    "details": "<p>The AI Control Tower application supports all the platform accessibility features.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-aicontroltower-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "AI Control Tower",
    "type": "Localization Information",
    "products": [
      "AI Control Tower",
      "AI Governance",
      "AI Platform",
      "Now Assist"
    ],
    "details": "<p>The AI Control Tower application is localized.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-aicontroltower-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "AI Risk and Compliance",
    "type": "New feature",
    "products": [
      "IRM",
      "SecOps",
      "AI Governance",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=request-ai-system&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Risk‑based classification during intake</a></strong></p>\n<p>After upgrading to version 22.0.3, if you have the AI risk and compliance business user [sn\\_grc\\_ai\\_gov.ai\\_risk\\_and\\_compliance\\_business\\_user] role, you can now classify AI systems using a risk‑based approach at intake, enabling organizations to capture AI risk context early and align governance workflows with regulatory and internal risk requirements. This improvement to the AI use case request form supports more accurate AI oversight throughout the system life cycle.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-aicontroltower-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "AI Risk and Compliance",
    "type": "New feature",
    "products": [
      "IRM",
      "AI Governance",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=report-ai-case-anon&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Report an AI case anonymously</a></strong></p>\n<p>After upgrading to version 22.0.3, if you have the AI case business user [sn\\_ai\\_case\\_mgmt.ai\\_case\\_business\\_user] role, you can navigate to the Employee Center to access the Anonymous Reporting Center and submit AI cases anonymously, enabling broader participation in AI governance while protecting the identity of reporters. No additional role is required to submit an anonymous report directly through the Anonymous Reporting Center. Broader participation helps organizations identify potential AI risks earlier by removing barriers to case submission.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-aicontroltower-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "AI Risk and Compliance",
    "type": "New feature",
    "products": [
      "IRM",
      "AI Governance",
      "AI Control Tower",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=airc-offboarding-ai-assets&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Offboard AI models and datasets</a></strong></p>\n<p>After upgrading to version 22.0.3, if you have the AI risk and compliance analyst [sn\\_grc\\_ai\\_gov.ai\\_risk\\_and\\_compliance\\_analyst] or AI risk and compliance manager [sn\\_grc\\_ai\\_gov.ai\\_risk\\_and\\_compliance\\_manager] role you can manage AI asset offboarding life cycle tasks. Managing these tasks helps ensure that governance‑related activities, such as risk and impact assessments, conformity reviews, issue closure, and audit documentation, are addressed when an AI asset is retired or removed from active use.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-aicontroltower-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "AI Search",
    "type": "New feature",
    "products": [
      "AI Search",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=hybrid-search-ais&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Improve search precision and contextual relevance with hybrid search</a></strong></p>\n<p>Hybrid search combines keyword-based search with semantic understanding to deliver more accurate and relevant search results, with fewer zero-result searches.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-airiskandcompliance-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "AI Search",
    "type": "New feature",
    "products": [
      "AI Search",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-ai-search-source-ask-now-assist-suggestions&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure AI Search as the source for Ask Now Assist suggestions</a></strong></p>\n<p>Admins can configure the system to use AI Search as the source for Ask Now Assist suggestions in enhanced chat. Making this change activates suggestion term highlighting in Ask Now Assist and provides improvements such as wildcard searching and lemmatization for suggestions.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-airiskandcompliance-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "AI Search",
    "type": "Change",
    "products": [
      "AI Search",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-multi-content-qna-genius-results&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist Multi-Content Response Genius Results</a></strong></p>\n<p>If you have Now Assist in AI Search installed, Now Assist Multi-Content Response Genius Results are supported in global and workspace search. Activating Now Assist Multi-Content Response Genius Results in global or workspace search profiles overrides all other Genius Result configurations, so that global and workspace searches only display Genius Result answers from Now Assist Multi-Content Response Genius Results. Virtual Agent topic citations from Now Assist Multi-Content Response Genius Result answers in global or workspace search open the selected topic in the Now Assist panel so the user can continue their conversation on that topic.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-airiskandcompliance-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "AI Search",
    "type": "Change",
    "products": [
      "AI Search",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=search-suggestions-overview&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Search Suggestions</a></strong></p>\n<p>Search administrators with the ais\\_admin granular admin role can access all Search Suggestions tables. Assign search administrators this role to eliminate needless propagation of full admin access.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-airiskandcompliance-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "AI Search",
    "type": "Change",
    "products": [
      "AI Search",
      "UI",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=search-preview-ui-new&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Gain insights into search behavior with a refreshed and updated Search Preview UI.</a></strong></p>\n<p>Preview search query results using settings from a search application configuration or a search profile. Choose between keyword and hybrid search modes. Display search results as individual EVAM cards or as a JSON-format search query response object, with search and syntax highlighting. Review search query behavior and results and specify search query settings with the new Summary, Genius Results, Details, and Profile admin tools.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-airiskandcompliance-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "API",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Developers",
      "SDK"
    ],
    "details": "<p><strong>New scoped classes and additional methods to existing scoped classes in Australia</strong></p>\n<p><strong><a href=\"https://www.servicenow.com/docs/access?context=CopyDynamicSchemaAPI&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">CopyDynamicSchemaAPI - Scoped, Global</a></strong></p>\n<p>Methods:</p>\n<ul>\n<li>getCopyApi()</li>\n<li>skipAttributes()</li>\n<li>skipChoiceOverrides()</li>\n<li>skipChoiceSets()</li>\n<li>getTransactionId()</li>\n<li>runAsync()</li>\n</ul>\n<p>Extension points:</p>\n<ul>\n<li>getCopyName()</li>\n<li>shouldCopy()</li>\n<li>verifyCopyOperation()</li>\n</ul>\n<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c_GlideDateScopedAPI&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">GlideDate - Scoped</a></strong></p>\n<ul>\n<li>getDisplayValueEx()</li>\n<li>setDisplayValueEx()</li>\n</ul>\n<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c_GlideTimeScopedAPI&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">GlideTime - Scoped</a></strong></p>\n<ul>\n<li>getDisplayValueEx()</li>\n<li>getDisplayValueLang()</li>\n<li>setDisplayValueEx()</li>\n<li>setDisplayValueLang()</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-api-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "API",
    "type": "New feature",
    "products": [
      "Core Platform",
      "SDK",
      "Developers"
    ],
    "details": "<p><strong>New global classes and additional methods to existing global classes in Australia</strong></p>\n<p><strong><a href=\"https://www.servicenow.com/docs/access?context=CopyDynamicSchemaAPI&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">CopyDynamicSchemaAPI - Scoped, Global</a></strong></p>\n<p>Methods:</p>\n<ul>\n<li>getCopyApi()</li>\n<li>skipAttributes()</li>\n<li>skipChoiceOverrides()</li>\n<li>skipChoiceSets()</li>\n<li>getTransactionId()</li>\n<li>runAsync()</li>\n</ul>\n<p>Extension points:</p>\n<ul>\n<li>getCopyName()</li>\n<li>shouldCopy()</li>\n<li>verifyCopyOperation()</li>\n</ul>\n<p><strong><a href=\"https://www.servicenow.com/docs/access?context=GlideDateAPI&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">GlideDate - Global</a></strong></p>\n<ul>\n<li>getDisplayValueEx()</li>\n<li>setDisplayValueEx()</li>\n</ul>\n<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c_GlideElementAPI&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">GlideElement - Global</a></strong></p>\n<ul>\n<li>getDynamicNamespace()</li>\n</ul>\n<p><strong><a href=\"https://www.servicenow.com/docs/access?context=GlideElementDynamicAttStoreAPI&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">GlideElementDynamicAttributeStore - Global</a></strong></p>\n<ul>\n<li>getDynamicAttributePathsInSchema()</li>\n<li>getDynamicAttributePathsInStore()</li>\n<li>getDynamicNamespaceName()</li>\n</ul>\n<p><strong><a href=\"https://www.servicenow.com/docs/access?context=MIDHermesProducerAPI&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">MIDHermesProducer - Global</a></strong></p>\n<ul>\n<li>MIDHermesProducer()</li>\n<li>send()</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-api-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "API",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Developers",
      "CSM",
      "Integrations"
    ],
    "details": "<p><strong>New REST APIs and additional endpoints to existing REST APIs in Australia</strong></p>\n<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c_AttachmentAPI&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Attachment API</a></strong></p>\n<ul>\n<li>DELETE /now/attachment/{attachment\\_sys\\_id}/attributes</li>\n<li>DELETE /now/attachment/{attachment\\_sys\\_id}/attributes/{attribute\\_key}</li>\n<li>GET /now/attachment/{attachment\\_sys\\_id}/attributes/{attribute\\_key}</li>\n<li>GET /now/attachments/{attachment\\_sys\\_id}/attributes</li>\n<li>PATCH /now/attachment/{sys\\_id}</li>\n<li>POST /now/attachment/{attachment\\_sys\\_id}/attributes</li>\n<li>PUT /now/attachment/{attachment\\_sys\\_id}/attributes/{attribute\\_key}</li>\n</ul>\n<p><a href=\"https://www.servicenow.com/docs/access?context=help-request-api&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Help Request API</a></p>\n<ul>\n<li>POST /now/helprequest/action/create\\_or\\_update</li>\n</ul>\n<p><a href=\"https://www.servicenow.com/docs/access?context=atf-code-coverage-api&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ATF Code Coverage API</a></p>\n<ul>\n<li>POST /now/atf/code\\_coverage/all</li>\n<li>POST /now/atf/code\\_coverage/by\\_line\\_number</li>\n<li>POST /now/atf/code\\_coverage/by\\_script\\_id</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-api-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "API",
    "type": "New feature",
    "products": [
      "CSM",
      "FSM",
      "Integrations",
      "Core Platform"
    ],
    "details": "<p><strong>New SOAP APIs in Australia</strong></p>\n<p><strong><a href=\"https://www.servicenow.com/docs/access?context=warranty-claims-SOAP-API&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Warranty Claims SOAP API</a></strong></p>\n<p>ProcessRepairOrder: A STAR SOAP operation used to process and exchange repair operation–level information between systems in a standardized STAR XML format.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-api-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "API",
    "type": "Change",
    "products": [
      "UI",
      "SDK",
      "Developers"
    ],
    "details": "<p><strong>Changed client classes in Australia</strong></p>\n<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c_GlideFormAPI&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">GlideForm (g\\_form) - Client</a></strong></p>\n<p>On fields set to strict read only, the following methods do nothing and log a warning in the browser's console if used:</p>\n<ul>\n<li>clearValue()</li>\n<li>setValue()</li>\n</ul>\n<p>For more information, see <a href=\"https://www.servicenow.com/docs/access?context=read-only-option&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Read-only options</a>.</p>\n<p><strong><a href=\"https://www.servicenow.com/docs/access?context=GlideFormAPINX&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">GlideForm (Next Experience) - Client</a></strong></p>\n<p>On fields set to strict read only, the following methods do nothing and log a warning in the browser's console if used:</p>\n<ul>\n<li>clearValue()</li>\n<li>setValue()</li>\n</ul>\n<p>For more information, see <a href=\"https://www.servicenow.com/docs/access?context=read-only-option&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Read-only options</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-api-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "API",
    "type": "Change",
    "products": [
      "CSM",
      "Developers",
      "Integrations"
    ],
    "details": "<p><strong>Changed REST APIs in Australia</strong></p>\n<p><strong><a href=\"https://www.servicenow.com/docs/access?context=tmf-party-management-open-api&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Party Management Open API</a></strong></p>\n<p>Previously, all GET endpoints didn't return results for Account records as expected due to a hardcoded flag. As a fix, users are now required to install the plugin Customer Service Base Entities (com.snc.cs\\_base), which adds the Active field to Customer [customer\\_account] and Core Company [core\\_company] tables.</p>\n<ul>\n<li><a href=\"https://www.servicenow.com/docs/access?context=partymgmt-GET-individual&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Party Management – GET /api/sn\\_tmf\\_api/v1/party/individual</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=partymgmt-GET-individual-id&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Party Management - GET /api/sn\\_tmf\\_api/v1/party/individual/{id}</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=partymgmt-GET-organization-id&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Party Management – GET/api/ sn\\_tmf\\_api/v1/party/organization/{id}</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=partymgmt-GET-organization&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Party Management - GET /api/sn\\_tmf\\_api/v1/party/organization</a></li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-api-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "API",
    "type": "Deprecation",
    "products": [
      "Core Platform",
      "Developers",
      "SDK"
    ],
    "details": "<p><strong>GlideElementDynamicAttribute has been removed.</strong></p>\n<p>Use other GlideElement instances corresponding to an attribute's type instead.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-api-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "API",
    "type": "Activation Information",
    "products": [
      "Core Platform",
      "Developers",
      "SDK",
      "Integrations",
      "CSM",
      "ITOM",
      "UI"
    ],
    "details": "<p><strong>The following APIs are available by default:</strong></p>\n<ul>\n<li>ATF Code Coverage API</li>\n<li>Attachment API</li>\n<li>GlideDate</li>\n<li>GlideTime</li>\n<li>GlideElement</li>\n<li>GlideElementDynamicAttributeStore</li>\n<li>GlideForm</li>\n<li>GlideForm (Next Experience)</li>\n</ul>\n<p>The following APIs require plugin activation:</p>\n<ul>\n<li>MIDHermesProducer requires the MID Hermes API (com.glide.mid.hermes\\_api) plugin.</li>\n<li>Help Request API requires the Interactions Management (com.glide.interaction) plugin.</li>\n<li>CopyDynamicSchemaAPI API requires the Dynamic Schema Support (com.glide.dynamic\\_schema) plugin.</li>\n<li>Party Management Open API requires the Customer Service Base Entities (com.snc.cs\\_base) plugin.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-api-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "App Engine Management Center",
    "type": "Change",
    "products": [
      "App Engine"
    ],
    "details": "<p><strong>Use the improved filter feature</strong> to sort requests based on specific criteria.</p>\n<p>See <a href=\"https://www.servicenow.com/docs/access?context=app-engine-management-center&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">App Engine Management Center</a> for more information.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-appenginemanagementcenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "App Engine Studio",
    "type": "Deprecation",
    "products": [
      "App Engine",
      "Integrations"
    ],
    "details": "<p><strong>Several Integration Hub flow templates are being deprecated.</strong></p>\n<p>See <a href=\"https://www.servicenow.com/docs/access?context=aes-overview&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">App Engine Studio</a> for more information.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-appenginestudio-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Application Manager",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-app-mgr&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist suites for version compatibility</a></strong></p>\n<p>Use the Application Manager to install and update Now Assist applications with suites of compatible application versions. Now Assist suites help verify that new Now Assist applications and versions remain compatible with the ones already installed to your instance.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-applicationmanager-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Application Manager",
    "type": "New feature",
    "products": [
      "ITOM",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=app-mgr-state-indicators&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Application state indicators</a></strong></p>\n<p>Review information about any applicable installation considerations, requirements, and blockers in the header of application details.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-applicationmanager-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Application Manager",
    "type": "Change",
    "products": [
      "ITAM",
      "CMDB",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=available-for-you-app-mgr&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Unlicensed application information</a></strong></p>\n<p>In addition to details about applications that are already licensed, the \"Available for you\" tab of the Application Manager now includes information about applications that haven't been procured from the ServiceNow Store yet.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-applicationmanager-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Authentication",
    "type": "New feature",
    "products": [
      "Now Assist",
      "ITSM",
      "CSM",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=authentication-factors&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Authentication factors for AI voice service</a></strong></p>\n<p>Enable caller access to AI voice agents by configuring the required identification and authentication factors.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-authentication-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Authentication",
    "type": "New feature",
    "products": [
      "Core Platform",
      "CSM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=web-embeddables&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Web embeddables</a></strong></p>\n<p>Secure the web embeddables feature for authenticating the ServiceNow®'s web components that are used in third-party portals.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-authentication-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Authentication",
    "type": "New feature",
    "products": [
      "Core Platform",
      "SecOps",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=roles-within-platform-security&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Bundle psec.roles within platform security</a></strong></p>\n<p>The granular admin role enables developers and administrators to complete administrative configuration tasks for Authentication without requiring the full admin role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-authentication-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Authentication",
    "type": "Change",
    "products": [
      "Core Platform",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=api-inbound-and-outbound&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">OAuth enhancements</a></strong></p>\n<p>Following are the OAuth enhancements:</p>\n<ul>\n<li>Use <strong>Opaque</strong> or <strong>JWT</strong> token option for your inbound integration endpoints.</li>\n<li>Use the <strong>Allow access only to APIs in selected scope</strong> option to enable access to the APIs that are explicitly listed in the selected scopes for your inbound integrations.</li>\n<li>Use the OAuth Entity Resource tab for outbound integrations to configure resource parameters so they flow into the OAuth token request and are reflected in the token from your OAuth provider.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-authentication-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Authentication",
    "type": "Accessibility Information",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong>Coral theme</strong></p>\n<p>Coral is now the default theme for new portal, web, and mobile experiences with Next Experience or Core UI enabled. This theme provides a fresh look and feel, featuring brand-neutral illustrations to enhance your user experience. A dark theme option is available for web and mobile experiences.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-authentication-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Buying Group",
    "type": "New feature",
    "products": [
      "CRM",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-new-buying-groups&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create separate buying groups for each product family or solution within an account</a></strong></p>\n<p>Avoid confusion or overlap and efficiently map the right stakeholders involved in different purchase decision for an account by creating separate buying groups for each product family or solution, which helps account for differing decision‑makers, influencers, and users.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-buyinggroup-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Buying Group",
    "type": "New feature",
    "products": [
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=add-buying-group-member&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Add buying group members with different roles</a></strong></p>\n<p>Enable role‑specific engagement, and improve alignment throughout the buying process by adding buying group members with defined roles.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-buyinggroup-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Buying Group",
    "type": "New feature",
    "products": [
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=associate-buying-groups-to-an-opportunity&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Associate multiple buying groups against an opportunity</a>​</strong></p>\n<p>Improve stakeholder visibility, support complex deal management, and enable more targeted engagement across solutions by associating multiple buying groups with an opportunity.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-buyinggroup-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Buying Group",
    "type": "Activation Information",
    "products": [
      "CRM",
      "Integrations"
    ],
    "details": "<p>Install Buying Group by requesting it from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-buyinggroup-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Card data security",
    "type": "New feature",
    "products": [
      "SecOps",
      "CSM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=card-data-security-component&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">View documents in the tokenizer service vault</a></strong></p>\n<p>Use the Card data security container to display documents in the tokenizer service vault without storing sensitive documents in your ServiceNow instance.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-carddatasecurity-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Card data security",
    "type": "New feature",
    "products": [
      "CSM",
      "SecOps",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=reveal-a-pan-using-card-data-security&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">PAN display</a></strong></p>\n<p>Display, mask, or redact PAN values in the workspace with the Card data security container.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-carddatasecurity-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Card data security",
    "type": "New feature",
    "products": [
      "CSM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=manage-attachments-in-card-data-security&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Updated attachment panel</a></strong></p>\n<p>View external documents from card networks, acquirers, and merchants at the transaction level of a dispute, which are stored in the tokenizer service vault.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-carddatasecurity-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Card data security",
    "type": "New feature",
    "products": [
      "SecOps",
      "Integrations",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=spokes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Mastercard and Visa integration updates</a></strong></p>\n<p>Updated Mastercard and Visa actions and integrations to support document download in Card data security.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-carddatasecurity-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Care Team Operations for Biomed",
    "type": "Important Information for upgrading",
    "products": [
      "AI Platform",
      "Core Platform",
      "Developers"
    ],
    "details": "<p>Strengthen your instance security and maintain backward compatibility through enhanced protections for read‑only fields across the ServiceNow AI Platform®. These back-end changes include a new “read\\_only\\_option” field with granular control levels, including “strict\\_read\\_only” and “client\\_script\\_modifiable\". If you have custom client scripts that modify read‑only fields on the ServiceNow AI Platform® using g\\_form.setValue() or g\\_form.clearValue(), see the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB2718122\" target=\"_blank\" rel=\"noopener noreferrer\">Remediation for strict read-only fields preventing client side updates KB2718122</a> article in the Now Support Knowledge Base. This article provides additional technical details on how to identify affected fields and adjust their settings. For more information about granular read-only security options, see <a href=\"https://www.servicenow.com/docs/access?context=read-only-option&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configuring read-only security options</a>.</p>\n<p>If you have the feature administrator role you can now complete tasks that were initially reserved for users with the broader administrator role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-careteamoperationsforbiomed-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Care Team Operations for Environmental Services",
    "type": "Important Information for upgrading",
    "products": [
      "Core Platform",
      "CSM",
      "FSM"
    ],
    "details": "<p>If you have the feature administrator role you can now complete tasks that were initially reserved for users with the broader administrator role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-careteamoperationsforenvironmentalservices-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Care Team Operations for Facilities",
    "type": "Important Information for upgrading",
    "products": [
      "FSM",
      "CSM",
      "Core Platform"
    ],
    "details": "<p>If you have the feature administrator role you can now complete tasks that were initially reserved for users with the broader administrator role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-careteamoperationsforfacilities-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Care Team Operations for Healthcare",
    "type": "Important Information for upgrading",
    "products": [
      "CSM",
      "AI Platform",
      "Core Platform",
      "Developers"
    ],
    "details": "<p>Strengthen your instance security and maintain backward compatibility through enhanced protections for read‑only fields across the ServiceNow AI Platform®. These back-end changes include a new “read\\_only\\_option” field with granular control levels, including “strict\\_read\\_only” and “client\\_script\\_modifiable\". If you have custom client scripts that modify read‑only fields on the ServiceNow AI Platform® using g\\_form.setValue() or g\\_form.clearValue(), see the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB2718122\" target=\"_blank\" rel=\"noopener noreferrer\">Remediation for strict read-only fields preventing client side updates KB2718122</a> article in the Now Support Knowledge Base. This article provides additional technical details on how to identify affected fields and adjust their settings. For more information about granular read-only security options, see <a href=\"https://www.servicenow.com/docs/access?context=read-only-option&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configuring read-only security options</a>.</p>\n<p>If you have the feature administrator role you can now complete tasks that were initially reserved for users with the broader administrator role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-careteamoperationsforhealthcareit-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Care Team Work Management",
    "type": "New feature",
    "products": [
      "CSM",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=ctwm-create-care-team-work-plan&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create a care team task plan</a></strong></p>\n<p>Create single or multi‑unit task plans for care teams to support ad hoc or recurring tasks. Multi‑unit work plans can include orchestration cases and tasks, while single‑unit work plans use care team cases and tasks. This feature helps teams coordinate work more efficiently across units and within their own teams.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-careteamworkmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Care Team Work Management",
    "type": "New feature",
    "products": [
      "CSM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=ctwm-landing-page&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Bundle hcls.ctwm landing page</a></strong></p>\n<p>Use the unified Care Team Work Management landing page to view and manage care team cases and care team tasks all in one place. This provides a streamlined and consistent experience across work activities for care team agents.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-careteamworkmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Care Team Work Management",
    "type": "New feature",
    "products": [
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=ctwm-create-care-team-case&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Operational Rounding playbook</a></strong></p>\n<p>Use rounding templates with required fields and clinical checklists to standardize operations activities. The playbook generates one‑time and recurring rounding tasks across units using built‑in scheduling within the Healthcare Workspace. It supports completing task, capturing evidence, and tracking progress.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-careteamworkmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Case and Knowledge Management",
    "type": "New feature",
    "products": [
      "HR",
      "HRSD",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=components-installed-with-case-and-knowledge-management&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Granular roles</a></strong></p>\n<p>Provide tighter security to HR data using the granular admin roles in Case and Knowledge Management.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-caseandknowledgemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Case and Knowledge Management",
    "type": "New feature",
    "products": [
      "HRSD",
      "CSM",
      "HR"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=coe-diagnostics-tool&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Use COE Security Diagnostics</a></strong></p>\n<p>Enable HR administrators to determine which users have access to HR cases within an instance based on COE security policies. HR administrators can also review the specific COE security policies that restrict user access.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-caseandknowledgemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Case and Knowledge Management",
    "type": "New feature",
    "products": [
      "HR",
      "HRSD",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=hr-er-dashboards&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ER Consolidated List in HR Agent Workspace</a></strong></p>\n<p>Get a holistic view of all related tables for all the ER cases using the ER cases consolidated view in the Employee relations dashboard.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-caseandknowledgemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Case and Knowledge Management",
    "type": "Activation Information",
    "products": [
      "HR",
      "HRSD"
    ],
    "details": "<p>Case and Knowledge Management is available with activation of the Human Resources Scoped app: Core [com.sn\\_hr\\_core]. See Activate plugin for more information.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-caseandknowledgemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Case management for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "FSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=task-dependencies-for-task-plan-templates&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Task Dependencies for Task Plan Templates</a></strong></p>\n<p>Define dependency relationships between template items in the [sn\\_task\\_plan\\_template\\_dependency] table, and upon applying the template, create and store the resulting task dependencies in the [sn\\_task\\_dependency\\_m2m] table to ensure controlled task sequencing through predecessor–successor relationships.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-casemanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Case management for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=adding-and-managing-document-references-in-task-plan-templates&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Document References in Task Plan Templates</a></strong></p>\n<p>Add documents to Task Plan Template items, storing document references in the [sn\\_task\\_plan\\_template\\_document] table and making them accessible through form views and related lists based on template state and user permissions, ensuring secure and controlled document access aligned with template‑level permissions</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-casemanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Case management for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=major-issue-management&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Major Issue Management</a></strong></p>\n<p>Case Type consistency improvements: This update ensures case type consistency when creating and managing major cases and their related child cases, improving accuracy and reducing manual correction.</p>\n<ul>\n<li>Create major cases automatically upon approval, and major cases now inherit the same case type as the originating case.</li>\n<li>Promote the proposed case directly to a major case I-if no account or consumer or partner exists on the originating major case.</li>\n<li>Use the major case's case type and inherit the fields defined in (sn\\_customerservice.case\\_fields\\_to\\_sync) property or defined through extension point for child cases.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-casemanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Case management for CSM",
    "type": "Change",
    "products": [
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=task-plan-templates&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Task plan templates</a></strong></p>\n<p>Add flexible task dependency management to task plan templates, and support for attachments.</p>\n<ul>\n<li>Schedule offsets can be defined when creating dependencies, allowing tasks to start within a specified time period (minutes, hours, days, or weeks).</li>\n<li>Configure and manage task dependencies directly from task dependency list and view layouts.</li>\n<li>Built‑in validations prevent circular dependencies, ensuring task plans remain accurate and reliable.</li>\n<li>Ability to attach documents to tasks or cases.</li>\n<li>Select <strong>Apply Template</strong> for any published task plan templates to automatically add all document references from the original template items to the newly created tasks, ensuring seamless access for task owners to all required documents.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-casemanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Change Management",
    "type": "New feature",
    "products": [
      "ITSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=installed-with-cm-itsm-roles&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Granular admin role</a></strong></p>\n<p>Assign the single feature-specific granular sn\\_change\\_admin role to users to grant permission to configure Change Management features and system properties. This role replaces the previous general admin and ITIL roles. The sn\\_change\\_admin role includes the sn\\_change\\_writer, change\\_manager, and sn\\_change\\_cab.cab\\_manager roles.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-changemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Change Management",
    "type": "New feature",
    "products": [
      "ITSM",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-conflict-properties&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Exclude change request records from conflict check</a></strong></p>\n<p>Exclude change requests from the conflict check process by setting the <strong>Exclude from conflict detection</strong> field to true. This setting also means that the change record is not displayed as a conflicting change when conflict checker is run on other change records.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-changemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Change Management",
    "type": "New feature",
    "products": [
      "ITSM",
      "CMDB",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-change-template&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create change templates</a></strong></p>\n<p>Control mandatory and read-only fields for change models by configuring change templates and defining template field policies. Change templates provide baseline standardization for common changes, making changes easier to create as well as driving a higher standard of change and compliance. Similar to the concepts used for existing standard change templates, templates used for change models can be proposed, reviewed, versioned, or retired.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-changemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Change Management",
    "type": "New feature",
    "products": [
      "ITSM",
      "CSDM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=change-data-model&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enhanced data model for change templates</a></strong></p>\n<p>Use the enhanced data model that supports better categorization and role-based access for change templates for all change models automatically. This feature is optional for newly created standard changes.</p>\n<p>This data model does not impact the existing standard change catalog and migration of these standard changes is not required.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-changemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Change Management",
    "type": "Activation Information",
    "products": [
      "ITSM",
      "AI Platform",
      "Core Platform"
    ],
    "details": "<p>Change Management is a ServiceNow AI Platform feature that is active by default. The Change Management plugins listed are activated by default.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-changemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Change Management",
    "type": "Accessibility Information",
    "products": [
      "ITSM",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong>Reflow for Create a change request page</strong></p>\n<p>The Create a change request page now supports reflow, which enables pages and content to be zoomed up to 400% through your browser settings without loss of content or functionality. Additionally, content can be enlarged without scrolling in two dimensions at a width equivalent to 320 CSS pixels or a height equivalent to 256 CSS pixels. Page layouts are transformed into a vertical, stacked view automatically when users increase browser zoom to 400%.</p>\n<p>This enhancement helps users with low vision or who have trouble seeing web content in a browser due to monitor size, device type, poor lighting, or other situations. Reflow can be turned off with a system property for instances, experiences, and pages.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-changemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Clone Admin Console",
    "type": "Removed",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p>Clone requests via lists and forms (legacy) are no longer supported. The page redirects to the new request page after 30 seconds.</p>\n<p>Legacy clones no longer appear in the Clone Admin Console dashboard.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-cloneadminconsole-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Clone Admin Console",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=instance-clone-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Updated clone menu navigation items</a></strong></p>\n<p>All clone-related functions are now available under the Clone Admin Console menu navigation item.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-cloneadminconsole-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Clone Admin Console",
    "type": "Change",
    "products": [
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=t_StartAClone&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Submit a new clone even if another clone is scheduled</a></strong></p>\n<p>Create an additional clone request even if there’s already a future clone for that target. This feature helps with the limitation where you can't submit another clone until all existing requests have been canceled.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-cloneadminconsole-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Clone Admin Console",
    "type": "Change",
    "products": [
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=t_StartAClone&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Clone summary</a></strong></p>\n<p>Help prevent clone conflicts with the Clone summary, which highlights clones that are scheduled in the next 30 days that involve the same target instance.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-cloneadminconsole-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Cloud Cost Management 10.0",
    "type": "New feature",
    "products": [
      "ITOM",
      "ITAM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=schedule-azure-billing-job&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Gain insights from your billing data with the FOCUS standard for Microsoft Azure billing</a></strong></p>\n<p>Enhance your ability to manage cloud costs using the FOCUS billing standard that enables better insights. This feature helps you make more informed decisions. Additionally, you experience seamless processing of billing data across multiple Azure billing models such as:</p>\n<ul>\n<li>Enterprise Agreement (EA)</li>\n<li>Microsoft Customer Agreement (MCA)</li>\n<li>Microsoft Partner Agreement (MPA)</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-cloudcostmanagement100-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Cloud Cost Management 10.0",
    "type": "New feature",
    "products": [
      "ITOM",
      "ITAM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=operation-view-ccm-ws&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">View cloud cost data in your preferred currency for multiple cloud service providers</a></strong></p>\n<p>View your cloud cost data in your preferred local currency for better clarity and reporting flexibility. This capability enables you to view cost and usage details from multiple cloud service providers, including AWS, Azure, and GCP, in your selected currency.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-cloudcostmanagement100-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Cloud Cost Management 10.0",
    "type": "New feature",
    "products": [
      "ITOM",
      "ITAM",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=azure-pricesht-sched-dwnld-cloudin&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Get support for your Azure MPA model when operating under an MSP</a></strong></p>\n<p>Gain full visibility into your cloud costs and actionable insights for your Azure cloud spend when operating under an MSP. Additionally, the feature provides a centralized view to monitor cloud spend and manage budgets.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-cloudcostmanagement100-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Cloud Cost Management 10.0",
    "type": "Change",
    "products": [
      "ITOM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=cloud-insights-roles&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Granular instance operator role</a></strong></p>\n<p>Use the instance operator role to perform routine operational tasks without requiring the full admin role for basic operations. By using limited privileges in the instance operator role, you can help reduce security risks across your organization.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-cloudcostmanagement100-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Cloud Cost Management 10.0",
    "type": "Activation Information",
    "products": [
      "ITOM",
      "ITAM",
      "Core Platform"
    ],
    "details": "<p>Install Cloud Cost Management by requesting it from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-cloudcostmanagement100-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Collaborative Work Management",
    "type": "New feature",
    "products": [
      "SPM",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=add-formula-column-cwm-boards&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Formula columns in CWM</a></strong></p>\n<p>Gain deeper insights into your work by adding formula columns to your List view in CWM Boards. Create calculations that automatically compute values across your tasks, such as summing hours, calculating date differences, or deriving metrics from existing fields.</p>\n<p>Build formulas manually using the Formula Builder panel, which guides you through selecting functions and referencing columns with inline suggestions. As you type, the builder validates your formula in real time and displays clear error messages if corrections are needed.</p>\n<p>You can accelerate formula creation with Now Assist by describing your calculation in natural language. Now Assist generates a valid formula that you can insert directly into the editor with a single click, saving you the time to manually build a valid formula.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-collaborativeworkmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Collaborative Work Management",
    "type": "New feature",
    "products": [
      "SPM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=cwm-board-views&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Kanban board filters</a></strong></p>\n<p>Save time finding the work that matters most by applying quick filters directly on your Kanban board.</p>\n<p>As you adjust filter conditions in the header, the quick filter panel stays in sync, and vice versa. Your filter choices automatically apply to saved views and CWM Board templates, so the next time you open the board, your preferences are readily available.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-collaborativeworkmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Collaborative Work Management",
    "type": "New feature",
    "products": [
      "SPM",
      "Now Assist",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=managing-scrum-tasks-for-stories-cwm&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Scrum tasks</a></strong></p>\n<p>Improve sprint execution by breaking user stories into scrum tasks that make estimation easier and daily progress visible. These tasks appear as nested children in the List, Kanban, and Sprint planning views, so that your team always sees how individual efforts roll up into the larger story.</p>\n<p>Using Now Assist to generate an initial set of scrum tasks based on your story descriptions, you can reduce the overhead of task creation. You can then review and refine the first drafts as needed.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-collaborativeworkmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Collaborative Work Management",
    "type": "New feature",
    "products": [
      "SPM",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=managing-task-dependencies-relationships-cwm&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Task dependencies and relationships</a></strong></p>\n<p>Increase visibility into how work is connected by linking related items directly in CWM and avoid switching context to track dependencies.</p>\n<p>As these relationships surface across Kanban, List, and Gantt views with clear visual cues, you can improve planning confidence for your teams. Blocked items stand out at a glance, helping teams spot bottlenecks early, communicate delays quickly, and plan tasks in the right sequence.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-collaborativeworkmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Collaborative Work Management",
    "type": "New feature",
    "products": [
      "SPM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=cwm-docs&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">External copy-paste support for CWM Docs</a></strong></p>\n<p>Accelerate content migration by bringing your existing Microsoft Word documents into CWM Docs with formatting intact. Paragraphs, nested lists, tables, and images all transfer cleanly, so that you can avoid rebuilding the same structure all over.</p>\n<p>Once the content is copied over, you can delete sections, adjust formatting, or continue editing seamlessly. With this feature, teams can consolidate scattered documentation into a single collaborative space.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-collaborativeworkmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Collaborative Work Management",
    "type": "New feature",
    "products": [
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=cwm-docs&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Image download from docs</a></strong></p>\n<p>Save images from your CWM documents directly to your device, making it easier to share or use them outside of the Docs environment.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-collaborativeworkmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Collaborative Work Management",
    "type": "Accessibility Information",
    "products": [
      "SPM",
      "CSM",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong>Accessibility improvements</strong></p>\n<p>Accessibility improvements were completed to create a configurable workspace that supports WCAG 2.1 Level AA conformance.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-collaborativeworkmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Collaborative Work Management",
    "type": "Accessibility Information",
    "products": [
      "UI",
      "SPM"
    ],
    "details": "<p><strong>Reflow</strong></p>\n<p>Docs in CWM Configurable Workspace supports reflow, which enables pages and content to be zoomed up to 400% through your browser settings without loss of content or functionality. Additionally, content can be enlarged without scrolling in two dimensions at a width equivalent to 320 CSS pixels or a height equivalent to 256 CSS pixels. Page layouts are transformed into a vertical, stacked view automatically when users increase browser zoom to 400%.</p>\n<p>This enhancement helps users with low vision or who have trouble seeing web content in a browser due to monitor size, device type, poor lighting, or other situations. Reflow can be turned off with a system property for instances, experiences, and pages.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-collaborativeworkmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Common Governance, Risk, and Compliance",
    "type": "New feature",
    "products": [
      "IRM",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=email-notification-redirection&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">GRC notification redirection</a></strong></p>\n<p>After upgrading GRC to version 22.0.x, notification links in GRC applications automatically route you to the appropriate workspace view based on your persona and access permissions. If you don't have workspace access, links default to the classic view.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-commongovernanceriskandcompliancefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Common Governance, Risk, and Compliance",
    "type": "New feature",
    "products": [
      "IRM",
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-my-tasks-in-ws&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Monitor my tasks</a></strong></p>\n<p>After upgrading GRC to version 22.0.1, the Tasks page loads faster with performance improvements. Task counts display first as an at-a-glance summary, followed by detailed task lists that load progressively. Task data refreshes at regular intervals to keep information current. These improvements provide better scalability for users with high task volumes across multiple task sources.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-commongovernanceriskandcompliancefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Common Governance, Risk, and Compliance",
    "type": "Activation Information",
    "products": [
      "IRM",
      "Core Platform"
    ],
    "details": "<p>Install Integrated Risk Management by requesting it from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-commongovernanceriskandcompliancefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Compliance Case Management",
    "type": "New feature",
    "products": [
      "IRM",
      "HRSD",
      "HR"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=report-compliance-case-anonymously&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Report a compliance case anonymously</a></strong></p>\n<p>Employees can now use the Anonymous Reporting Center to report compliance violations such as fraud and embezzlement, workplace misconduct (harassment, discrimination), bribery and corruption, and other concerns without revealing their identity or location.</p>\n<p>Accessed through the Employee Center, the Anonymous Reporting Center portal automatically logs users out to enforce anonymity, creates case records without mapping to employee identity, and provides a unique report key and report number for secure follow-up communication.</p>\n<p>CAPTCHA‑based verification is used to authenticate submissions, and the system generates a report statement summarizing the case after submission. Employees can save a copy of their report for future reference. For security and confidentiality, the submitted information is not displayed again. Reports are routed to the appropriate compliance team based on the nature of the concern.</p>\n<p>Throughout the investigation process:</p>\n<ul>\n<li>Investigators can request additional information through a comments system visible to the reporter</li>\n<li>Reporters can follow up on their case using their report key to check progress and respond to questions</li>\n<li>All interactions maintain reporter anonymity at every step; no identity or location data is ever captured or linked</li>\n</ul>\n<p>This enhancement enables organizations to build trust, mitigate risks before escalation, and ensures regulatory compliance with whistleblower protection requirements.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-compliancecasemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Compliance Case Management",
    "type": "New feature",
    "products": [
      "IRM",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=compliance-case-summarization-skill&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Case summarization for compliance cases</a></strong></p>\n<p>After upgrading Now Assist for Integrated Risk Management (IRM) application to version 22.x, Compliance analysts can use the Case summarization feature to quickly understand a compliance case without manually reviewing every field, attachment, or related list. Now Assist analyzes key case attributes—such as timelines, impacted areas, evidence, and actions—and generates a structured summary directly inside the compliance case.</p>\n<p>This solves a common problem: case data is often lengthy, scattered across multiple related lists, and difficult for analysts to digest efficiently. Analysts can also save and edit summaries as case data evolves, ensuring the record stays current.</p>\n<p>By consolidating all relevant information into a single, coherent narrative, Now Assist reduces investigation time, improves consistency across reviewers, and supports faster decision-making.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-compliancecasemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Compliance Case Management",
    "type": "Activation Information",
    "products": [
      "IRM",
      "ITSM",
      "Core Platform"
    ],
    "details": "<p>Install Compliance Case Management by requesting it from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-compliancecasemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "New feature",
    "products": [
      "UI",
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-da-ui-interactions&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">UI interactions for declarative actions</a></strong></p>\n<p>Combine logic, script, and configurable UI with a UI interaction, and apply it from any page event or declarative action. When you use a declarative action to apply a UI interaction, you can extend a page without taking ownership.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong>Record List component bundle enhancements in UI Builder</strong></p>\n<p>Configure these enhancements to the Record List component bundle in UI Builder:</p>\n<ul>\n<li>Pin columns to keep them visible while scrolling horizontally.</li>\n<li>Change the medium default size for highlighted values.</li>\n<li>View list data as a data visualization.</li>\n<li>Show a filter overview in the list header for a summary of the filters currently applied to the list.</li>\n<li>Catalog variables and questions are supported as list columns.</li>\n<li>Open lists in multiple session tabs from the list menu.</li>\n<li>Customize gallery list card layouts including images, icons, text placement, and sizing.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI",
      "AI Search",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=use-ai-filter-assist&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">AI filter assist</a></strong></p>\n<p>Convert everyday language into an encoded query with AI filter assist.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-related-list-grouping&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Grouping for related lists</a></strong></p>\n<p>Configure related lists to persist selections for the Group by filter.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://developer.servicenow.com/dev.do#!/reference/next-experience/australia/now-components/now-predicate-builder/uib-setup\" target=\"_blank\" rel=\"noopener noreferrer\">Predicate Builder component enhancements in UI Builder</a>:</strong></p>\n<p>Configure these enhancements to the Predicate Builder component in UI Builder:</p>\n<ul>\n<li>Customize condition rows.</li>\n<li>Configure a simple filtering mechanism.</li>\n<li>Use a search term for filtering panel definitions.</li>\n<li>Configure fixed queries.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=data-hierarchies&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Hierarchical queries</a></strong></p>\n<p>Configure a record hierarchy to create filter queries that traverse levels of hierarchy.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=working-with-dynamic-schema&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Dynamic queries</a></strong></p>\n<p>Configure dynamic attributes and dynamic categories to create filter queries that use the dynamic schema field type.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://developer.servicenow.com/dev.do#!/reference/next-experience/australia/now-components/form%20record%20page/uib-setup\" target=\"_blank\" rel=\"noopener noreferrer\">Form component enhancements in UI Builder</a>:</strong></p>\n<p>Configure these enhancements to the Form component in UI Builder:</p>\n<ul>\n<li>Wrap field labels on mobile devices.</li>\n<li>Display an indicator dot on unsaved fields.</li>\n<li>Add a background color to unsaved fields to make them more noticeable.</li>\n<li>Add an address field to forms that searches, validates, and automatically fills an address.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=ai-indicator&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">AI indicator</a></strong></p>\n<p>The AI indicator is a visual cue that identifies form fields in configurable workspace and Core UI that have been updated with AI-generated content, providing a consistent and clear indication of AI involvement across the platform.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-unsaved-field-indicator&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Unsaved field indicator</a></strong></p>\n<p>Configure the unsaved field indicator for your entire workspace experience instead of individual pages.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-background-color-unsaved-indicator&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Background color for unsaved fields</a></strong></p>\n<p>Configure a background color to display on unsaved fields for your entire workspace experience instead of individual pages.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-background-color-highlighted-values&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Background color for highlighted values</a></strong></p>\n<p>Configure a background color for fields with highlighted values.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform",
      "CSM",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-journal-fields-keyboard-shortcuts&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Text commands for journal fields</a></strong></p>\n<p>Configure text commands that can be applied by keyboard shortcuts within journal fields.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "Core Platform",
      "CSM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-html-editor-toolbar&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">HTML editor toolbar</a></strong></p>\n<p>Configure toolbar options for the HTML editor within journal input fields.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=format-regex-pattern-string-fields&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Inline validation for string fields</a></strong></p>\n<p>Configure inline validation for string fields that formats inputs automatically, persists guidance text as a placeholder, and restricts unsupported characters.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-watch-list&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Watch lists</a></strong></p>\n<p>Add and remove yourself and multiple records from a watch list.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://developer.servicenow.com/dev.do#!/reference/next-experience/australia/now-components/now-record-common-templates-connected/uib-setup\" target=\"_blank\" rel=\"noopener noreferrer\">Form Templates component enhancements in UI Builder</a></strong></p>\n<p>Configure these enhancements to the Form Templates component in UI Builder:</p>\n<ul>\n<li>Preview form templates before applying them to the record page.</li>\n<li>Display an alert message and confirm reuse when a selected form template is already applied to that record.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "Core Platform",
      "CSM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-template-email-field&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Email field for form templates</a></strong></p>\n<p>Add the email composer as a form template field.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-template-field-conditions&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Field conditions for form templates</a></strong></p>\n<p>Configure conditions that determine which fields to apply to a form template.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-template-variable-picker&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Variable picker for form templates</a></strong></p>\n<p>Configure form template fields with a variable picker.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://developer.servicenow.com/dev.do#!/reference/next-experience/australia/now-components/now-activity-stream-connected/uib-setup\" target=\"_blank\" rel=\"noopener noreferrer\">Activity Stream component enhancements in UI Builder</a></strong></p>\n<p>Configure these enhancements to the Activity Stream component in UI Builder:</p>\n<ul>\n<li>Edit and delete Activity stream posts after submitting.</li>\n<li>Add knowledge base links from recommended actions to Activity stream posts.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "CSM",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=add-response-templates-shortcut&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Keyboard shortcuts for emails</a></strong></p>\n<p>Use keyboard shortcuts to open drafts, email templates, and response templates.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://developer.servicenow.com/dev.do#!/reference/next-experience/australia/now-components/now-record-common-attachments-connected/uib-setup\" target=\"_blank\" rel=\"noopener noreferrer\">Attachments component enhancements in UI Builder</a></strong></p>\n<p>Configure these enhancements to the Attachments component in UI Builder:</p>\n<ul>\n<li>Open the file viewer as a modeless dialog.</li>\n<li>Customize the attachment header, upload instructions, and menu actions in both the full and compact modes.</li>\n<li>Display the loading skeleton as a spinner or as three cards.</li>\n<li>Enable a visible drop zone for file uploads in the compact mode.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-da-layout-group&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Form action layout groups for declarative actions</a></strong></p>\n<p>Upgrade form action layout groups to customize the order, label, and icons for declarative actions without altering the base action.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configurable Workspace",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=using-web-embeddables&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Declarative actions and UI actions on public pages</a></strong></p>\n<p>Non-logged in users may access specified declarative actions and UI actions on embedded web pages while maintaining integrity with security guidance and access control list permissions.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurableworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configuration Management Database (CMDB)",
    "type": "Important Information for upgrading",
    "products": [
      "CMDB",
      "AI Platform",
      "Core Platform",
      "Developers",
      "UI"
    ],
    "details": "<p>Due to changes in the Configuration Item [cmdb\\_ci] table, if you're upgrading to Australia, you might experience an increased upgrade time. To learn more about this change and reducing its impact, see the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB2588894\" target=\"_blank\" rel=\"noopener noreferrer\">Increased Australia Upgrade Time due to cmdb\\_ci composite index addition KB2588894</a> article in the Now Support Knowledge Base.</p>\n<p>If you're upgrading from Xanadu or Yokohama directly to the Australia release, you must run the <strong>Remove CMDB Roles from ITIL roles and Add CUD access to sn\\_cmdb\\_admin/sn\\_cmdb\\_editor roles</strong> scheduled job to correctly configure some user roles, such as CMDB Admin and CMDB Editor. For more information about this scheduled job and its use, see the <a href=\"https://www.servicenow.com/docs/bundle/zurich-release-notes/page/release-notes/now-platform-capabilities/cmdb-rn.html\" target=\"_blank\" rel=\"noopener noreferrer\">CMDB Zurich release notes</a>.</p>\n<p>Strengthen your instance security and maintain backward compatibility through enhanced protections for read‑only fields across the ServiceNow AI Platform®. These back-end changes include a new “read\\_only\\_option” field with granular control levels, including “strict\\_read\\_only” and “client\\_script\\_modifiable\". If you have custom client scripts that modify read‑only fields on the ServiceNow AI Platform® using g\\_form.setValue() or g\\_form.clearValue(), see the [Remediation for strict read-only fields preventing client side updates [KB2718122]](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB2718122) article in the Now Support Knowledge Base. This article provides additional technical details on how to identify affected fields and adjust their settings. For more information about granular read-only security options, see <a href=\"https://www.servicenow.com/docs/access?context=read-only-option&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configuring read-only security options</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurationmanagementdatabasecmdb-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configuration Management Database (CMDB)",
    "type": "New feature",
    "products": [
      "CMDB",
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=cmdb-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">CMDB Workspace v8.0</a>:</strong></p>\n<p>Create a CI with a lookup identifier entry that contains mandatory attributes in the CMDB Workspace. When you select a lookup identifier entry on the Required attributes page, you can set those mandatory attribute values for proper IRE processing. For more information, see <a href=\"https://www.servicenow.com/docs/access?context=create-ci-manual-cmdb-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create a CI manually in CMDB Workspace</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurationmanagementdatabasecmdb-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configuration Management Database (CMDB)",
    "type": "New feature",
    "products": [
      "CMDB",
      "ITOM",
      "CSDM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=cmdb-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">CMDB Workspace v9.0</a>:</strong></p>\n<ul>\n<li>Use the Service Graph Workspace to view data, such as company, location, user, and CMDB data, using panels and dashboards. The Service Graph Workspace is specifically organized to help CMDB administrators, data owners, and analysts work with the CMDB. You can search the CMDB in Service Graph Workspace without having detailed knowledge of the CMDB data model by using contexts that are mapped to CI classes as navigation.</li>\n<li>Configure de-duplication remediation processes for related tables to turn off automated workflows, such as ignoring errors and skipping business rules, that might block referenced duplicate CIs from updating to the main CI. Skipping automated workflows for related tables enables de-duplication tasks, which would otherwise fail, to complete successfully. For more information, see <a href=\"https://www.servicenow.com/docs/access?context=de-duplication-tasks&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Effects on related tables (such as Change)</a> and <a href=\"https://www.servicenow.com/docs/access?context=dedup-ci-disable-workflow&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Turn off workflows of related tables during remediation</a>.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurationmanagementdatabasecmdb-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configuration Management Database (CMDB)",
    "type": "New feature",
    "products": [
      "CMDB",
      "ITOM",
      "CSDM",
      "ITAM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=dynamic-ire&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Dynamic IRE</a></strong></p>\n<p>Use Dynamic IRE to accurately identify CIs across multiple data sources, and by so, minimize duplicate CIs. Dynamic IRE is applicable only to the Hardware [cmdb\\_ci\\_hardware] class and its descending class, using a dynamic identification process which eliminates the need to manually create and maintain identification rules.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurationmanagementdatabasecmdb-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configuration Management Database (CMDB)",
    "type": "New feature",
    "products": [
      "CMDB",
      "Now Assist",
      "AI Platform",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=reconcile-dup-task&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Simplify resolving de-duplication tasks by using a Now Assist for CMDB skill</a></strong></p>\n<p>Use the De-duplication task resolution assistant skill in the Duplicate CI Remediator to use preselected remediation options instead of manually making selections. An AI agent preselects the options to resolve the task, such as the choice of the main CI. Then, before initiating the remediation, you can review all suggested options with supported reasoning.</p>\n<p>To use the De-duplication task resolution assistant skill, you must install the Now Assist for CMDB version v3.0.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurationmanagementdatabasecmdb-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configuration Management Database (CMDB)",
    "type": "New feature",
    "products": [
      "CMDB",
      "Core Platform",
      "ITOM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=quick-start-tests-cmdb&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Quick start tests for CMDB</a></strong></p>\n<p>Run quick start tests after upgrades and deployments of new applications or integrations to verify that CMDB works as expected. If you customized CMDB, copy the quick start tests and configure them for your customizations.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurationmanagementdatabasecmdb-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configuration Management Database (CMDB)",
    "type": "Change",
    "products": [
      "CMDB",
      "Core Platform",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=manage-cmdb&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Elevated user roles are no longer required for CMDB tasks</a>:</strong></p>\n<p>Access to CMDB tables is no longer restricted to users with elevated privileges. Instead, for improved security, users with access privileges that are trimmed to CMDB features can complete any administrative or end-user CMDB task:</p>\n<ul>\n<li>CMDB tables that required the admin or itil\\_admin roles are now also accessible to the sn\\_cmdb\\_admin user role.</li>\n<li>CMDB tables that required the itil role are now also accessible to the sn\\_cmdb\\_editor user role.</li>\n</ul>\n<p>For more information, see the <a href=\"https://support.servicenow.com/kb_view.do?sysparm_article=KB0561055\" target=\"_blank\" rel=\"noopener noreferrer\">CMDB Granular Role EPIC changes KB0561055</a> article in the Now Support Knowledge Base.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurationmanagementdatabasecmdb-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configuration Management Database (CMDB)",
    "type": "Change",
    "products": [
      "CMDB",
      "ITOM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=id-detect-dup-ci&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Automatically generate de-duplication tasks for lookup and related tables</a></strong></p>\n<p>Configure IRE to automatically generate de-duplication tasks for specific lookup or related tables during the identification process. You can then process those de-duplication tasks to remediate any duplications.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurationmanagementdatabasecmdb-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configuration Management Database (CMDB)",
    "type": "Change",
    "products": [
      "CMDB",
      "ITOM",
      "Core Platform",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=id-detect-dup-ci&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Remediate duplicate related items in lookup tables</a></strong></p>\n<p>Configure IRE to create de-duplication tasks for duplicate related items in a lookup table, detected during a lookup-based identification. Sort which duplicates do or don't require remediation by configuring the system property <strong>glide.identification\\_engine.lookup\\_match.create\\_duplicate\\_task\\_ci.enabled</strong>. For more information, see <a href=\"https://www.servicenow.com/docs/access?context=id-detect-dup-ci&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Detecting duplicate CIs</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurationmanagementdatabasecmdb-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configuration Management Database (CMDB)",
    "type": "Change",
    "products": [
      "CMDB",
      "Core Platform",
      "ITAM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c_DomainSeparationSetup&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Domain separation for key CMDB tables</a></strong></p>\n<p>The following tables now support domain separation on instances which are configured with domain separation:</p>\n<ul>\n<li>Key Value [cmdb\\_key\\_value]</li>\n<li>Printer Instance [cmdb\\_print\\_queue\\_instance]</li>\n<li>Software Instance [cmdb\\_software\\_instance]</li>\n<li>Client Access [samp\\_client\\_access]</li>\n<li>Oracle Options [samp\\_oracle\\_options]</li>\n</ul>\n<p>Domain separation can help protect sensitive information by supporting domain-specific data segregation.</p>\n<p>For more information about domain separation and how to activate it, see <a href=\"https://www.servicenow.com/docs/access?context=c_DomainSeparationSetup&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Setup and administration</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurationmanagementdatabasecmdb-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configuration Management Database (CMDB)",
    "type": "Removed",
    "products": [
      "CMDB",
      "Core Platform",
      "ITOM",
      "CSDM",
      "UI"
    ],
    "details": "<p>The Multisource Report Builder has been removed. Use CMDB 360 in CMDB Workspace or in Service Graph Workspace to generate reports for multisource data. For more information, see <a href=\"https://www.servicenow.com/docs/access?context=multisource-cmdb&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">CMDB 360</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurationmanagementdatabasecmdb-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Configuration Management Database (CMDB)",
    "type": "Activation Information",
    "products": [
      "CMDB",
      "AI Platform",
      "ITSM",
      "ITOM",
      "CSDM",
      "UI"
    ],
    "details": "<p>Configuration Management Database (CMDB) is a ServiceNow AI Platform feature that is active by default.</p>\n<p>The Australia release includes an installation of CMDB Workspace. However, you can download the latest version of CMDB Workspace store app (which includes Service Graph Workspace) so that you can use its latest features in your Australia instance. For more information, visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-configurationmanagementdatabasecmdb-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Continuous Authorization and Monitoring",
    "type": "New feature",
    "products": [
      "IRM",
      "SecOps",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=oscal-assessment-plan-import-export&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">OSCAL Assessment Plan import and export</a></strong></p>\n<p>After upgrading to version 22.0.2, Continuous Authorization and Monitoring supports import and export of OSCAL Assessment Plan (AP) files.</p>\n<p>Import OSCAL AP files from external tools to automatically generate engagements, control tests, test plans, user assignments, and test scope. Multiple AP files can be imported together for packages with multiple engagements.</p>\n<p>Export generates OSCAL AP files for auditors and authorizers, enabling other systems to understand what testing is planned or was performed.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-continuousauthorizationandmonitoring-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Continuous Authorization and Monitoring",
    "type": "New feature",
    "products": [
      "IRM",
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=request-control-tailoring&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Request control tailoring</a></strong></p>\n<p>After upgrading to version 22.0.2, make incremental changes to control sets while preserving the state of unchanged controls without having to reset the entire package life cycle. Supported modifications include adding new controls, marking controls as not applicable, changing control allocation (baseline to inherited or hybrid), and modifying inheritance configurations.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-continuousauthorizationandmonitoring-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Continuous Authorization and Monitoring",
    "type": "New feature",
    "products": [
      "IRM",
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=inherit-from-multiple-providers&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Inherit from multiple providers</a></strong></p>\n<p>After upgrading to version 22.0.2, Controls can inherit individual control requirements from multiple Common Control Providers (CCPs) across different authorization packages. Previously, inheritance was limited to a single provider per control, which required creating multiple duplicate inherited controls when requirements came from different sources.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-continuousauthorizationandmonitoring-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Continuous Authorization and Monitoring",
    "type": "New feature",
    "products": [
      "IRM",
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong>Control grid view</strong></p>\n<p>After upgrading to version 22.0.2, edit implementation statements and attestation respondents directly in a hierarchical data grid through the Controls tab in an authorization package.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-continuousauthorizationandmonitoring-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Continuous Authorization and Monitoring",
    "type": "New feature",
    "products": [
      "IRM",
      "SecOps"
    ],
    "details": "<p><strong>Control tests grid view in Engagements</strong></p>\n<p>After upgrading to version 22.0.2, toggle between traditional related list and hierarchical data grid on the Control tests tab. Changes to assessment procedure effectiveness automatically cascade to parent control test effectiveness.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-continuousauthorizationandmonitoring-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Continuous Authorization and Monitoring",
    "type": "New feature",
    "products": [
      "IRM",
      "SecOps",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong>CAM workflow configuration enhancements</strong></p>\n<p>After upgrading to version 22.0.2, control button visibility, UI page access, and related list actions across different workflow steps. Previously, related list actions (such as add or remove buttons for information types or baseline control actions) required manual scripting to support custom workflows.</p>\n<p>The following new state model attributes have been introduced:</p>\n<ul>\n<li>Required Authorization Documents Page</li>\n<li>Required Overlay Page</li>\n<li>Required Information Type Actions</li>\n<li>Required Baseline Actions</li>\n<li>Required Overlay Actions</li>\n<li>Generate OSCAL AP</li>\n<li>Generate OSCAL AR</li>\n<li>Generate OSCAL POAM</li>\n<li>Generate OSCAL SSP</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-continuousauthorizationandmonitoring-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "CPQ",
    "type": "New feature",
    "products": [
      "CRM",
      "CSM",
      "Core Platform",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=cpq-transaction-manager-transaction-access-control&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Transaction Access Control</a></strong></p>\n<p>Transaction Access Control enables precise control over who can view and edit each transaction, improving security and compliance. Admins and creators automatically receive full access and can grant access to others. Any user with access can also grant or remove access for others.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-cpq-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "CPQ",
    "type": "New feature",
    "products": [
      "CRM",
      "Now Assist",
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=cpq-transaction-converse&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Transaction AI – Bulk Line Update via File Upload</a></strong></p>\n<p>A new transaction AI feature enables users to update transaction lines in bulk by uploading a .csv file. Add non-configurable products as new lines and update existing lines.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-cpq-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "CPQ",
    "type": "New feature",
    "products": [
      "CRM",
      "UI",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=transaction-manager-layouts-ui-effects&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Export Lines UI Effect</a></strong></p>\n<p>Easily export Transaction Lines to a .csv file via a new UI effect. The exported file includes all lines in the transaction that meet the current line sort, filter, and column show/hide settings. For more information about this and other UI effects.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-cpq-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "CPQ",
    "type": "New feature",
    "products": [
      "CRM",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong>Visual layout editor</strong></p>\n<p>Layouts can now be designed and maintained in a visual-based editor. Easily add and organize layout components, configure UI Effect and element properties, manage theming and more, all in an intuitive visual interface.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-cpq-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "CPQ",
    "type": "New feature",
    "products": [
      "CSM",
      "CRM"
    ],
    "details": "<p><strong>Share product favorites</strong></p>\n<p>Users can now share their saved favorite products and configurations with other users, improving collaboration and user efficiency by enabling easy sharing and reuse of product configurations.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-cpq-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "CPQ",
    "type": "New feature",
    "products": [
      "CRM",
      "Integrations"
    ],
    "details": "<p><strong>Tenant-configurable namespace prefixes for Salesforce field generation</strong></p>\n<p>Configure a custom namespace at the tenant level to align Salesforce fields and references with your managed package. When a custom namespace is set, CPQ uses it for all generated Salesforce fields and all field lookups instead of the default LGK\\_ prefix. If no custom namespace is configured, the system defaults to LGK\\_ to preserve compatibility with existing tenants.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-cpq-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "CPQ",
    "type": "New feature",
    "products": [
      "CRM",
      "OTSM",
      "UI",
      "AI Search"
    ],
    "details": "<p><strong>Dynamic selection of SOM catalog items in the CPQ Admin UI</strong></p>\n<p>Select product offerings, product specifications, and product characteristic values directly in the CPQ Admin UI without manually entering system IDs. Search and select SOM catalog items using built-in UI selectors when configuring products, creating product rules, or setting up pickers, advanced product actions, BOM enrichments, and library functions. Advanced functions support structured reference syntax for SOM entities, enabling dynamic lookup of product offerings, product specifications, and product characteristic values in configuration logic.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-cpq-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "CPQ",
    "type": "New feature",
    "products": [
      "CSM",
      "SPM",
      "CRM"
    ],
    "details": "<p><strong>Node cloning for solution configuration</strong></p>\n<p>Duplicate an existing solution configuration node in a set, directly from the solution configuration navigation sidebar to use it as the starting point for a new node. The original node in a set must be in the valid state. Cloned nodes are independent of the original — edits to a cloned node do not affect the source node. You can also rename cloned nodes for easier identification and delete nodes from the navigation sidebar. Adding blank nodes remains available as before.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-cpq-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "CPQ",
    "type": "Activation Information",
    "products": [
      "CRM",
      "CSM"
    ],
    "details": "<p>Features such as product and configuration sharing in Transaction Manager features, require activation by ServiceNow. Submit a support ticket to enable these features.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-cpq-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "CPQ",
    "type": "Localization Information",
    "products": [
      "CRM",
      "SPM",
      "UI",
      "Core Platform"
    ],
    "details": "<p>Japanese Localization for CPQ Admin UI: The CPQ Admin UI supports internationalization for the CPQ Configurator and Transaction Manager. Static user interface elements, including labels, headings, and system text, can be displayed in Japanese as part of an initial pilot to support SoftBank onboarding. Administrators can select their preferred language through the ServiceNow platform. If any static content is not translated, the system automatically falls back to English. It also supports Japanese character input across applicable fields and controls. User-generated content remains in the language in which it is entered.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-cpq-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Customer Contracts and Entitlements",
    "type": "New feature",
    "products": [
      "CSM",
      "SPM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=using-customer-cnt-ent-wf&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Derived priced products</a></strong></p>\n<p>Reflects dynamically calculated prices, ensuring consistency with underlying pricing logic and improving accuracy across contract‑driven workflows.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-customercontractsandentitlements-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Customer Contracts and Entitlements",
    "type": "New feature",
    "products": [
      "CSM",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=cce-renew-service-contract-line&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Contracts consolidation</a></strong></p>\n<p>Enables users to merge multiple customer contract lines into a single consolidated renewed quote line. This helps in reducing duplication and improves operational efficiency across renewals.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-customercontractsandentitlements-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Customer Contracts and Entitlements",
    "type": "Activation Information",
    "products": [
      "CSM",
      "AI Platform"
    ],
    "details": "<p>Customer Contracts and Entitlements is a ServiceNow AI Platform feature that is available with activation of the (com.sn\\_pss\\_core) plugin, which requires a separate subscription. For details, see <a href=\"https://www.servicenow.com/docs/access?context=configuring-post-sales-support&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure Post-Sales Support</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-customercontractsandentitlements-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Customer self-service for Sales and Order Management",
    "type": "New feature",
    "products": [
      "CSM",
      "OTSM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=view-invoices-business-portal&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Invoice management on Business Portal</a></strong></p>\n<p>Enable your customers to view invoices and invoice line details directly on the Business Portal, providing transparency into quantity, billing location, shipping location, and sold product information.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-customerselfserviceforsalesandordermanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Customer self-service for Sales and Order Management",
    "type": "New feature",
    "products": [
      "CSM",
      "CRM",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=order-mgt-business-portal&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Invoice case creation through playbook experience</a></strong></p>\n<p>Provide self-service capability to your customers to create invoice dispute cases directly from the Business Portal for quantity, pricing, or date discrepancies using a guided self-service experience, supporting both single invoice and multiple invoice scenarios.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-customerselfserviceforsalesandordermanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Customer self-service for Sales and Order Management",
    "type": "New feature",
    "products": [
      "CSM",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=view-invoice-cases-business-portal&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Invoice case management on Business Portal</a></strong></p>\n<p>Enable your customers to view and track invoice cases on the Business Portal, reducing support inquiries and keeping them informed on dispute resolution progress.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-customerselfserviceforsalesandordermanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Customer self-service for Sales and Order Management",
    "type": "Activation Information",
    "products": [
      "CSM",
      "CRM",
      "OTSM",
      "UI"
    ],
    "details": "<p>The Business Portal application (sn\\_b2b\\_portal) is automatically installed when you install the Customer Service Portal (sn\\_csm\\_portal). Install the Customer Service Portal by requesting it from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-customerselfserviceforsalesandordermanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Customer Service Problem Management",
    "type": "New feature",
    "products": [
      "CSM",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=alternative-dispute-resolution&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Alternative Dispute Resolution (ADR)</a></strong></p>\n<p>Use the ADR case type to capture complete case details and manage investigations and resolutions while enforcing Service Level Agreement (SLA) compliance. You can also maintain audit and Root Cause Analysis (RCA) history and generate deadlock letters for customer or partner communication.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-customerserviceproblemmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Customer Success Management",
    "type": "New feature",
    "products": [
      "CSM",
      "SPM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=account-lifecycle-par-roadmap&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Product adoption roadmap</a></strong></p>\n<p>Enable customer success managers to create structured roadmaps that can guide customers through adoption of purchased products based on business value and current adoption scores. The planner supports two planning levels—Product (strategic) and Capabilities (tactical)—with sequencing to establish clear adoption pathways.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-customersuccessmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Customer Success Management",
    "type": "Change",
    "products": [
      "CSM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=account-lifecycle-touchpoint-home&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Touchpoint home page</a></strong></p>\n<p>Internal touchpoints ensure that the internal teams are aligned on the objectives and outcomes of the engagement.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-customersuccessmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management",
    "type": "New feature",
    "products": [
      "Core Platform",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c_ArchiveData&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Store archive data in columnar format</a></strong></p>\n<p>Store archive records and attachments in columnar format outside the primary instance, freeing up primary storage and improving query performance for active data. Columnar storage is exclusive to RaptorDB Professional V2.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management",
    "type": "New feature",
    "products": [
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=data-management-role-1&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Granular admin role</a></strong></p>\n<p>Enable administrators to perform basic Data Management tasks by granting the data\\_mgmt\\_tools\\_admin role instead of the full admin role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management",
    "type": "Activation Information",
    "products": [
      "Core Platform",
      "AI Platform"
    ],
    "details": "<p>Data Management is a ServiceNow AI Platform capability that is active by default.</p>\n<p>The ability to store archive data in columnar format is available with activation of the Data Archiving – Columnar Storage (com.glide.db.columnar.archive) plugin, which requires a separate subscription. For details, see <a href=\"https://www.servicenow.com/docs/access?context=activate-columnar-storage&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Activate columnar storage</a>.</p>\n<p>The ability to migrate archived attachments from row store to column store is available with activation of the Data Management Columnar Attachments Migration (com.glide.data\\_management.columnar\\_attachments) plugin, which requires a separate subscription. For details, see <a href=\"https://www.servicenow.com/docs/access?context=activate-columnar-attachments-migration&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Activate migration of attachments to columnar storage</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "CRM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=configuring-a-contact-as-a-unified-consumer&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configuring a contact as a consumer</a></strong></p>\n<p>Model a single user who functions as both a contact and a consumer within your customer data structure. This capability improves administrative efficiency by reducing the overhead of creating and maintaining multiple user records for the same individual. It also provides a unified experience, eliminating the need to switch logins across different personas.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=customer-data&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Granular administrative roles for Customer Data Foundation</a></strong></p>\n<p>Implemented administrative roles that provide fine-grained access control across CDF. These roles can be assigned to administrators and other personas based on job functions and security requirements. It includes the following capabilities:</p>\n<ul>\n<li>Added 25 admin roles with specific read, write, create, and delete permissions.</li>\n<li>Updated Before you begin sections across all Customer Data Foundation configuration topics with role prerequisites.</li>\n<li>Improved security compliance through role-based access segregation.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=customer-data&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">New fields in the Customer Account table</a></strong></p>\n<p>Added the following fields to the Customer Account (customer\\_account) table to improve business identification and record management:</p>\n<ul>\n<li>DUNS Number: Store the Data Universal Numbering System (DUNS) identifier for business accounts to support data enrichment and third-party integrations.</li>\n<li>Active: Indicates whether an account record is active for filtering and workflow purposes.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "Core Platform",
      "CSDM"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=csm-cust-access-mgmt-tables&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Description field added Customer Data Foundation configuration tables</a></strong></p>\n<p>Added a Description field to the following Customer Data Foundation (CDF) configuration tables to capture additional details about each record:</p>\n<ul>\n<li>Related Party Configuration [sn\\_customerservice\\_related\\_party\\_configuration] table</li>\n<li>Responsibility Definition [sn\\_customerservice\\_responsibility\\_def] table</li>\n<li>Responsibility Access Configuration [sn\\_customerservice\\_responsibility\\_access\\_config] table</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "CSDM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=add-related-parties-to-a-billing-account&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Billing accounts data model enhancements</a></strong></p>\n<p>Grant contacts and consumers access to billing accounts through the related parties data model, using out of base system responsibilities and roles.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=granular-admin-roles&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Granular admin roles</a></strong></p>\n<p>Added new granular admin roles to enable targeted permission assignments based on functional responsibilities, replacing broad admin access.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "CMDB",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=add-related-party-install-base&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Add related parties to an install base item</a></strong></p>\n<p>The Sold product is enhanced to support Related pricing.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "CRM",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=add-related-parties-to-sp&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Adding related parties to a sold product</a></strong></p>\n<p>Use flexible price and quantity ramps that adapt over a product’s lifecycle, enabling time-based pricing, segment modifications during post-sale workflows, and accurate calculations across multi-year contracts.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "CSDM",
      "ITAM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=sold-product-form&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Sold product form</a></strong></p>\n<p>Use scheduled jobs to update the state of the Sold product based on start and end dates. Ensure that sold products follow clear start and end dates with automatic state updates, giving customers fair access, predictable billing, and reducing errors through accurate lifecycle management and delta pricing.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=sold-product-form&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Sold product form</a></strong> - Billing Account</p>\n<p>Billing Account support on Sold Products to give agents immediate financial context, streamline billing‑related case resolution, and improve billing accuracy and transparency for customers and enterprises.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=business-stakeholder-for-csm&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enhanced Customer Data Viewer role</a></strong></p>\n<p>The Customer Data Viewer (sn\\_customerservice.customer\\_data\\_viewer) role includes expanded access to additional data tables and menu items. These enhancements enable users to view a broader range of customer data while maintaining read-only access restrictions. With this enhancement, you can:</p>\n<ul>\n<li>Extend access to additional tables for the customer data viewer role</li>\n</ul>\n<p>    - Inherit household role in customer data viewer role</p>\n<ul>\n<li>Explore additional menu items now accessible to the customer data viewer role.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=activate-customer-service-household&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Household plugin migration to ServiceNow Store</a></strong></p>\n<p>Starting with the Australia release, the Household family plugin (com.snc.household) has been migrated to the ServiceNow Store as a standalone application. Any new enhancements to this application are delivered through the Household store app. This change provides improved packaging, versioning, and deployment flexibility for B2C implementations that require household relationship management.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=import-csm-accounts&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Guided setup access for granular admin roles</a></strong></p>\n<p>Access to foundation data steps in guided setup now aligns with CDF admin roles. This access change enables administrators to delegate specific configuration tasks to users based on their assigned roles, providing greater flexibility in managing setup responsibilities.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=csm-account-code-account-path&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Extensible account code support</a></strong></p>\n<p>Updated the account code generation logic to support dynamic length scalability. Account codes now automatically expand from 4 digits to 5 or more as needed, ensuring unlimited account growth without manual intervention. Administrators can resolve invalid insert errors by clearing the system property to regenerate codes based on the maximum existing code.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=declarative-resposibility-framework&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Declarative Responsibility Framework enhancements</a></strong></p>\n<p>Introduced usability and functional enhancements to the Customer Access Management (CAM) Declarative Responsibility Framework. These updates streamline access configuration management and improve flexibility for responsibility definitions. With this enhancement, you can now:</p>\n<ul>\n<li>Import or copy access configurations from one responsibility definition to another.</li>\n<li>Manage CAM-related assets through improved cleanup capabilities.</li>\n<li>Reference any field name in the Responsibility Definition field configuration.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=configuring-unified-user&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Unified User configuration enhancements</a></strong></p>\n<p>Added a system property (sn\\_customerservice.consumer.allowed\\_user\\_types) to enhance unified user management. This property specifies which user types (classes) can be associated with consumers.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "Core Platform",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=customer-life-cycle-management-workflows&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Customer Life Cycle Management Workflows</a></strong></p>\n<p>Added core primitives to support price and quantity ramps, enabling flexible, time‑based changes across the sold product lifecycle. The feature delivers scalable pricing aligned with usage, simplifies post-sale workflows, and improves revenue forecasting without custom scripts.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Management for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=sold-product-form&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Sold product form</a></strong></p>\n<p>Create future‑dated subscription products in a <strong>Pending Activation</strong> state to improve the Add‑Order‑to‑Sold‑Product process. It also ensures lifecycle accuracy, predictable billing, and fair access for customers while improving revenue recognition for businesses.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-datamanagementforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Privacy",
    "type": "New feature",
    "products": [
      "Core Platform",
      "AI Platform",
      "Now Assist",
      "SecOps",
      "IRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=real-time-protection&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Real-time alerting and blocking of sensitive data</a></strong></p>\n<p>Analyze user input in real time at the field level to identify sensitive data and alert users about potential sensitive data entry. You can also choose to block users from saving this information.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-dataprivacy-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Privacy",
    "type": "New feature",
    "products": [
      "SecOps",
      "IRM",
      "Core Platform",
      "AI Platform",
      "Now Assist",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=dps-data-privacy-overview&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Data logs for real-time sensitive data</a></strong></p>\n<p>Leverage real-time alerting and blocking capabilities to obtain insights into where sensitive data is being entered into the instance and by which users.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-dataprivacy-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Privacy",
    "type": "New feature",
    "products": [
      "SecOps",
      "IRM",
      "Now Assist",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=attachment-quarantine-policies&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Real-time sensitive data-scanning for attachments</a></strong></p>\n<p>Scan attachments for sensitive data during user uploads into fields. If sensitive data is detected, the attachment is quarantined. This restricts the access and download of the file to the original document owner and authorized users until the admin reviews the files.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-dataprivacy-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Privacy",
    "type": "New feature",
    "products": [
      "Core Platform",
      "AI Platform",
      "Now Assist",
      "AI Search"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=default-data-patterns&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">New Named Entity Recognition (NER) model data patterns</a></strong></p>\n<p>Employ new AI/ML-based model data patterns (Address, City, State, Country, Job Position, and Salary) to detect and anonymize sensitive data.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-dataprivacy-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Privacy",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=dps-create-anonymization-policies&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Anonymization support for catalog variables</a></strong></p>\n<p>Anonymize sensitive data in catalog items (including record producers) using anonymization jobs (in production and during cloning).</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-dataprivacy-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Privacy",
    "type": "New feature",
    "products": [
      "Core Platform",
      "IRM",
      "Now Assist",
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=dds-review-discovery-findings&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">New base system Regular Expression (RegEx) data patterns</a></strong></p>\n<p>Employ new base system regular expression data patterns to detect and anonymize sensitive data in line with global compliance requirements.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-dataprivacy-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Privacy",
    "type": "New feature",
    "products": [
      "IRM",
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=dps-create-anonymization-job&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enhanced anonymization reporting</a></strong></p>\n<p>Demonstrate defensible compliance to regulators, auditors and internal teams using the new anonymization dashboard to provide quantitative insights into anonymization and data protection operations.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-dataprivacy-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Privacy",
    "type": "Change",
    "products": [
      "Core Platform"
    ],
    "details": "<p><strong>New experience</strong></p>\n<ul>\n<li><a href=\"https://www.servicenow.com/docs/access?context=dps-create-anonymization-job&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Optional condition filter</a> when running anonymization jobs to fine tune the scope of data to be anonymized.</li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=dps-create-anonymization-policies&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Specific anonymization policy</a> for catalog variables to anonymize sensitive data in catalog requests.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-dataprivacy-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Data Separation",
    "type": "Important Information for upgrading",
    "products": [
      "Core Platform",
      "CSM",
      "ITSM"
    ],
    "details": "<p>This application is no longer deployed, enhanced, or supported. For details, see the <a href=\"https://support.servicenow.com/kb_view.do?sysparm_article=KB0867184\" target=\"_blank\" rel=\"noopener noreferrer\">Deprecation Process KB0867184</a> article in the Now Support Knowledge Base.</p>\n<p>Alternatively, you can use Data Filters and access control lists (ACLs) to configure data separation for your use cases. For details on how to enable data separation for different use cases using data filters and ACLs, see the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB1772519\" target=\"_blank\" rel=\"noopener noreferrer\">Managing data separation using data filters and ACLs KB0558290</a> article in the Now Support Knowledge Base.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-dataseparation-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Developer Sandboxes",
    "type": "New feature",
    "products": [
      "Developers",
      "Core Platform",
      "SDK"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=dsb-installed-with&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">New granular roles for administration</a></strong></p>\n<p>Several new granular roles enable developers to complete administrative and configuration tasks without requiring the full admin role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-developersandboxes-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Developer Sandboxes",
    "type": "New feature",
    "products": [
      "AI Search",
      "Developers",
      "SDK"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=exploring-sandboxes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Support for separate indices for AI Search</a></strong></p>\n<p>AI Search (AIS) now maintains separate indices for each sandbox environment, ensuring development activities that rely on AIS are correctly supported.</p>\n<p><strong>Note:</strong></p>\n<p>The AIS integration with Developer Sandboxes is supported only on non-production environments.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-developersandboxes-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Developer Sandboxes",
    "type": "Change",
    "products": [
      "App Engine",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=dev-sbx-clone-upgrade-info&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Upgrade enhancements</a></strong></p>\n<p>After an upgrade, Developer Sandboxes now recreates the sandboxes on an instance and automatically backs up update sets to the base instance.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-developersandboxes-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Developer Sandboxes",
    "type": "Change",
    "products": [
      "Core Platform",
      "Developers",
      "App Engine"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=dev-sbx-clone-upgrade-info&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Cloning enhancements</a></strong></p>\n<p>After a clone, sandboxes on an instance are automatically re-created with the same name, but without the previous work.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-developersandboxes-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Developer Sandboxes",
    "type": "Change",
    "products": [
      "App Engine",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=allocating-sandboxes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Queuing for successive sandbox creation</a></strong></p>\n<p>To improve performance, Developer Sandboxes has implemented queuing when multiple sandboxes are created in succession.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-developersandboxes-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Developer Sandboxes",
    "type": "Change",
    "products": [
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=dev-sbx-general-guidelines&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">SSO support for vanity URLs</a></strong></p>\n<p>Instances with vanity URLs can now support Single Sign-On (SSO).</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-developersandboxes-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Developer Sandboxes",
    "type": "Change",
    "products": [
      "Developers",
      "Now Assist",
      "AI Platform",
      "SDK"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=vibe-coding-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">New vibe coding documentation</a></strong></p>\n<p>Documentation is now available that introduces vibe coding, which is a natural language approach to application development in ServiceNow, including how to get started, when to use it, and how it fits within the broader suite of AI-powered development tools.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-developersandboxes-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "DevOps Change Velocity",
    "type": "Change",
    "products": [
      "ITSM",
      "Integrations",
      "Developers",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=devops-jfrog-connect-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enhanced JFrog integration with DevOps Change Velocity</a></strong></p>\n<p>Gather JFrog evidence seamlessly and create change records automatically using the improved JFrog integration with DevOps Change Velocity.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-devopschangevelocity-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "DevOps Change Velocity",
    "type": "Change",
    "products": [
      "ITSM",
      "Integrations",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=devops-jfrog-connect-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Bearer authentication in JFrog</a></strong></p>\n<p>Connect to JFrog using the secure bearer token authentication to comply with JFrog’s updated security policies.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-devopschangevelocity-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "DevOps Change Velocity",
    "type": "Change",
    "products": [
      "ITSM",
      "Developers",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=servicenow-custom-actions-for-gitlab&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">HTTP proxy for Docker</a></strong></p>\n<p>Connect to DevOps Change Velocity through HTTP proxy settings using environment variables in your Docker deployment for instances that run a proxy server.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-devopschangevelocity-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "DevOps Change Velocity",
    "type": "Change",
    "products": [
      "Core Platform",
      "ITSM",
      "ITOM",
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=run-health-scan-check&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Health scan enhancements</a></strong></p>\n<ul>\n<li>Identify any callback processing issues in your instance.</li>\n<li>Identify any access control rule (ACL) that is incorrectly associated with a role in your instance.</li>\n<li>Verify whether all DevOps tables are present in your instance and confirm whether all metadata in sys\\_\\* tables is present.</li>\n<li>Verify whether all DevOps roles in your instance contain all expected roles, including inherited roles.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-devopschangevelocity-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "DevOps Change Velocity",
    "type": "Change",
    "products": [
      "ITSM",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=dev-ops-change-acceleration&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Auto close without Change Management - State Model - Legacy - plugin</a></strong></p>\n<p>Change requests can now be auto-closed without requiring you to install the Change Management - State Model [Legacy] plugin.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-devopschangevelocity-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Digital End-User Experience",
    "type": "New feature",
    "products": [
      "ITSM",
      "ITOM",
      "Event Management"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=process-snapshot&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Review top processes by resource usage</a></strong></p>\n<p>Service desk agents can now view automated snapshots of the top 10 CPU and memory-consuming processes directly in the <strong>Investigation</strong> tab of incident records. The snapshots that are captured every 30 minutes are initially triggered when an incident is created and a configuration item is tagged. You can refresh and filter snapshots over different time ranges and monitor processes causing device issues.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-digitalenduserexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Digital End-User Experience",
    "type": "New feature",
    "products": [
      "ITOM",
      "Event Management",
      "ITAM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=event-monitoring-dex&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Event monitoring with DEX</a></strong></p>\n<p>Monitor system events on Windows and macOS devices to track critical system events available with your base DEX application, configure additional events to monitor, and review collected event data stored in your ServiceNow instance.</p>\n<p>Monitor system-level events, such as application crashes, unexpected shutdowns, disk space warnings, failed login attempts, and service failures. The DEX agent captures event data directly from managed endpoints and stores it in the Event Log Monitoring Configs table. Activate or deactivate events or add custom events to extend monitoring beyond the base system catalog.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-digitalenduserexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Digital End-User Experience",
    "type": "New feature",
    "products": [
      "ITOM",
      "ITAM",
      "CSDM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=user-health-card&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Monitor boot performance metrics</a></strong></p>\n<p>View detailed boot performance metrics and identify issues that might cause slow startup times on the device.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-digitalenduserexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Digital End-User Experience",
    "type": "New feature",
    "products": [
      "ITOM",
      "CMDB",
      "ITAM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=user-device-metrics&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">View GPU device metric details</a></strong></p>\n<p>Monitor GPU and VRAM (Video Random Access Memory) usage on the Device page to assess graphics performance and identify bottlenecks. GPU usage shows the percentage of graphics processing capacity in use, while VRAM usage highlights memory consumption for graphics intensive workloads. These metrics help detect rendering issues, memory intensive applications, and performance degradation enabling faster investigation and resolution of GPU related device problems.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-digitalenduserexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Digital End-User Experience",
    "type": "New feature",
    "products": [
      "ITOM",
      "ITSM",
      "CSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=dex-workspace-application-tab&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Applications</a></strong></p>\n<p>Monitor application performance by application version to accelerate incident resolution and improve deployment quality. This enables the Service desk agent in faster root cause analysis and data-driven deployment decisions improving the overall end-user experience.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-digitalenduserexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Digital End-User Experience",
    "type": "New feature",
    "products": [
      "ITSM",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=dex-insights-and-lists&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Bulk Remediation for Impacted Devices</a></strong></p>\n<p>Select multiple impacted devices from the Insights page and apply remedial actions in bulk. Service desk agents can now resolve issues across multiple devices simultaneously, improving productivity and reducing manual effort.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-digitalenduserexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Digital End-User Experience",
    "type": "New feature",
    "products": [
      "ITSM",
      "ITAM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=dex-diff-ra&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">DEX remedial actions</a></strong></p>\n<p>The DEX base system includes the new remedial action Sync device to Intune.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-digitalenduserexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Dispute Content Pack for US Regulations",
    "type": "Change",
    "products": [
      "CSM",
      "IRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=using-the-dispute-content-pack-for-us-regulation&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enhanced SLA Definitions for Reg E and Reg Z</a></strong></p>\n<p>Improve regulatory adherence in your dispute workflow with the following enhancements to Reg E and Reg Z SLA definitions, ensuring timely dispute resolution and reducing regulatory risk exposure:</p>\n<ul>\n<li>SLA tracking now anchors to the dispute report date instead of the case creation date.</li>\n<li>SLA timelines for Reg Z are updated to require the financial institution to resolve the dispute within two complete billing cycles or 90 calendar days from the dispute report date.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-disputecontentpackforusregulations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Dispute Content Pack for US Regulations",
    "type": "Activation Information",
    "products": [
      "CSM",
      "IRM"
    ],
    "details": "<p>Install Dispute Content Pack for US Regulations by requesting it from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-disputecontentpackforusregulations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Dispute Rules Content Pack for Mastercard",
    "type": "Change",
    "products": [
      "CSM",
      "CRM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=dispute-rules-content-pack-for-mastercard-landing-page&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Dispute Rules Content Pack for Mastercard chargeback eligibility rules updates</a></strong></p>\n<p>Determine the eligibility of a selected transaction for chargeback through chargeback eligibility rules transformed into technical formulas.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-disputerulescontentpackformastercard-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Dispute Rules Content Pack for Mastercard",
    "type": "Change",
    "products": [
      "CSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=dispute-rules-content-pack-for-mastercard-landing-page&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Dispute Rules Content Pack for Mastercard intake questionnaire updates</a></strong></p>\n<p>Benefit from the dispute questionnaire provided through Dispute Rules Content Pack for Mastercard with some modified questions and added hard stop alerts.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-disputerulescontentpackformastercard-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Document Intelligence",
    "type": "Change",
    "products": [
      "Now Assist",
      "AI Search",
      "Core Platform",
      "AI Platform"
    ],
    "details": "<p><strong>Starting with the Zurich release, Document Intelligence is being prepared for future deprecation.</strong></p>\n<p>It will be hidden and no longer activated on new instances but will continue to be supported. For details, see the Deprecation Process article <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0867184\" target=\"_blank\" rel=\"noopener noreferrer\">KB0867184</a> in the Now Support Knowledge Base. Instead, you can extract information from documents using the Now Assist in Document Intelligence application. For more information, see <a href=\"https://www.servicenow.com/docs/access?context=docintel-nowassist-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist in Document Intelligence</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-documentintelligence-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Document Services",
    "type": "New feature",
    "products": [
      "HRSD",
      "CSM",
      "WSD",
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=document-management-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Document Management components in Workspace</a></strong></p>\n<p>Organize, access, and collaborate on files efficiently with unified Document Management in Workspace through intuitive folder structures, streamlined cloud integration, one-click actions, and embedded workflows.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-documentservices-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Document Services",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Developers",
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=granular-admin-roles-dms&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Granular admin roles required to secure the instance</a></strong></p>\n<p>Enable developers and administrators to complete administrative configuration tasks for Document Services without requiring the full admin role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-documentservices-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Domain Separation",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong>Upgraded Process Overrides Report</strong></p>\n<p>System and domain administrators can now track and review process overrides that are affected by global process upgrades. A new admin dashboard provides a comprehensive list of impacted overrides with filtering and sorting by date and process type. Use the scriptable API to build custom integrations or automations on top of the override tracking data.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-domainseparation-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Domain Separation",
    "type": "New feature",
    "products": [
      "Core Platform"
    ],
    "details": "<p><strong>Domain Visibility Performance Improvements for Large MSPs</strong></p>\n<p>Domain visibility queries now complete in under one second on average — a 70% reduction from the previous 3.2 second average for large instances. A new query optimization replaces multiple OR conditions with a single IN clause on the domain ID for instances that exceed the configured domain collection size threshold. All 785 Domain Separation customers benefit from faster queries, with the greatest impact for the 20 customers operating 10,000 or more domains.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-domainseparation-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Domain Separation",
    "type": "Change",
    "products": [
      "Core Platform"
    ],
    "details": "<p><strong>Dot-Walk Scoping Bypass Compliance (DIRS0000335)</strong></p>\n<p>Domain Separation has been updated to comply with the platform-wide dot-walk scoping bypass directive (DIRS0000335). Customers who have customizations involving dot-walk queries on domain-separated tables should review their configurations after upgrading.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-domainseparation-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Domain Separation",
    "type": "Change",
    "products": [
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong>Java 21 Runtime Support</strong></p>\n<p>Domain Separation has been validated and updated to run on the Java 21 runtime introduced in the Australia release. Deprecated Java APIs have been removed from the Domain Separation codebase. No action is required for customers — this update is included automatically with the Australia upgrade.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-domainseparation-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Employee Center",
    "type": "Important Information for upgrading",
    "products": [
      "AI Platform",
      "Core Platform",
      "Developers",
      "HRSD",
      "UI",
      "WSD"
    ],
    "details": "<p>Strengthen your instance security and maintain backward compatibility through enhanced protections for read‑only fields across the ServiceNow AI Platform®. These back-end changes include a new “read\\_only\\_option” field with granular control levels, including “strict\\_read\\_only” and “client\\_script\\_modifiable\". If you have custom client scripts that modify read‑only fields on the ServiceNow AI Platform® using g\\_form.setValue() or g\\_form.clearValue(), see the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB2718122\" target=\"_blank\" rel=\"noopener noreferrer\">Remediation for strict read-only fields preventing client side updates KB2718122</a> article in the Now Support Knowledge Base. This article provides additional technical details on how to identify affected fields and adjust their settings. For more information about granular read-only security options, see <a href=\"https://www.servicenow.com/docs/access?context=read-only-option&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configuring read-only security options</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-employeecenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Employee Center",
    "type": "New feature",
    "products": [
      "Core Platform",
      "HRSD",
      "WSD",
      "UI",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=simple-portal-navigation-ec&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Simplified Navigation</a></strong></p>\n<p>Simplify how employees move through Employee Center by providing a modern, left‑aligned, one‑level navigation that reduces cognitive load and adapts seamlessly across desktop and mobile.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-employeecenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Employee Center",
    "type": "New feature",
    "products": [
      "Now Assist",
      "HRSD",
      "WSD",
      "ITSM",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=manage-approvals-with-approvals-agent&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Approve your requests with AI Agent</a></strong></p>\n<p>Accelerate request approvals by automatically aggregating relevant details, validating requests against policies, and recommending approval decisions to managers.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-employeecenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Employee Center",
    "type": "New feature",
    "products": [
      "HRSD",
      "UI",
      "WSD"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=config-heading-widget-instance&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure widget heading levels for accessibility</a></strong></p>\n<p>Improve accessibility by allowing admins to configure widget heading levels (H1–H6) to meet organizational standards and support technologies.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-employeecenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Employee Center",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITSM",
      "CSM",
      "HRSD",
      "WSD",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=my-requests-update-intro&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enhanced Requests Experience</a></strong></p>\n<p>Improve the Enhanced Requests Experience functionality by enabling specific tabs created for specific filters. Help employees find relevant requests faster while giving admins, experience owners, and service owners greater control over curating page design for specific purposes.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-employeecenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Employee Center",
    "type": "New feature",
    "products": [
      "HRSD",
      "WSD",
      "Now Assist",
      "AI Search",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=moveworks-for-employeecenter&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Moveworks for Employee Center</a></strong></p>\n<p>Empower employees with Moveworks for Employee Center and its AI-powered conversational support. Using the Moveworks embedded AI assistant plugin, your employees can ask questions, get instant answers, and complete tasks end-to-end from Employee Center and Employee Center Pro.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-employeecenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Employee Center",
    "type": "New feature",
    "products": [
      "Core Platform",
      "CSM",
      "HRSD",
      "ITSM",
      "UI",
      "WSD"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=quick-start-tests-employee-center&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Quick start tests for Employee Center</a></strong></p>\n<p>After upgrades and deployments of new applications or integrations, run quick start tests to verify that Employee Center works as expected. If you customized Employee Center, copy the quick start tests and configure them for your customizations.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-employeecenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Employee Center",
    "type": "Accessibility Information",
    "products": [
      "Core Platform",
      "HR",
      "HRSD",
      "UI",
      "WSD"
    ],
    "details": "<p>Improve accessibility by allowing admins to configure widget heading levels (H1–H6) to meet organizational standards and support technologies. Clear heading hierarchies improve navigation for screen reader and keyboard users.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-employeecenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Employee Center Pro",
    "type": "Important Information for upgrading",
    "products": [
      "Core Platform",
      "AI Platform",
      "Developers",
      "UI",
      "HRSD"
    ],
    "details": "<p>Strengthen your instance security and maintain backward compatibility through enhanced protections for read‑only fields across the ServiceNow AI Platform®. These back-end changes include a new “read\\_only\\_option” field with granular control levels, including “strict\\_read\\_only” and “client\\_script\\_modifiable\". If you have custom client scripts that modify read‑only fields on the ServiceNow AI Platform® using g\\_form.setValue() or g\\_form.clearValue(), see the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB2718122\" target=\"_blank\" rel=\"noopener noreferrer\">Remediation for strict read-only fields preventing client side updates KB2718122</a> article in the Now Support Knowledge Base. This article provides additional technical details on how to identify affected fields and adjust their settings. For more information about granular read-only security options, see <a href=\"https://www.servicenow.com/docs/access?context=read-only-option&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configuring read-only security options</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-employeecenterpro-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Employee Center Pro",
    "type": "New feature",
    "products": [
      "HRSD",
      "CSM",
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=ex-fdback-ovrvw&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Integrated experience and service feedback</a></strong></p>\n<p>Add granular admin roles to the Integrated experience and service feedback functionality to decentralize administrative task management.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-employeecenterpro-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Employee Center Pro",
    "type": "New feature",
    "products": [
      "HRSD",
      "CSM",
      "Now Assist",
      "AI Search",
      "Integrations",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=moveworks-for-employeecenter&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Moveworks for Employee Center</a></strong></p>\n<p>Empower employees with Moveworks for Employee Center and its AI-powered conversational support. Using the Moveworks embedded AI assistant plugin, your employees can ask questions, get instant answers, and complete tasks end-to-end from Employee Center and Employee Center Pro.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-employeecenterpro-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Employee Center Pro",
    "type": "New feature",
    "products": [
      "HRSD",
      "WSD",
      "CSM",
      "ITSM",
      "HR"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=quick-start-tests-employee-center-pro&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Quick start tests for Employee Center Pro</a></strong></p>\n<p>After upgrades and deployments of new applications or integrations, run quick start tests to verify that Employee Center Pro works as expected. If you customized Employee Center Pro, copy the quick start tests and configure them for your customizations.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-employeecenterpro-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Encryption",
    "type": "New feature",
    "products": [
      "Core Platform",
      "SecOps",
      "IRM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-platform-encryption&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Manage Field Encryption Enterprise with an enhanced Administration interface</a></strong></p>\n<p>Configure encryption settings, monitor key usage, and streamline administration for Field Encryption and Field Encryption Enterprise with the following features:</p>\n<ul>\n<li>Simplify key rotation and policy updates.</li>\n<li>Access encryption status and audit details.</li>\n<li>Navigate improved layouts for faster configuration.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-encryption-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Encryption",
    "type": "Activation Information",
    "products": [
      "Core Platform",
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=ekms-external-key-management&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Integrate External Key Management Service (EKMS) with Encryption Modules</a></strong></p>\n<p>Configure and manage encryption keys externally through EKMS integration with an enhanced encryption framework, which enables you to:</p>\n<ul>\n<li>Hold encryption keys outside the instance for improved security.</li>\n<li>Perform key rotation and revocation with automated security tasks.</li>\n<li>Manage EKMS configurations and enforce the immutability of critical fields after they're active.</li>\n<li>Simplify rekeying following instance clone and restore operations.</li>\n<li>Monitor key state transitions, encrypted cache, and node-to-node communication.</li>\n<li>Access UI improvements for configuration visibility and error handling.</li>\n<li>Benefit from telemetry and performance-tested operations.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-encryption-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Encryption",
    "type": "Activation Information",
    "products": [
      "Core Platform",
      "SecOps",
      "ITOM"
    ],
    "details": "<p>Platform Encryption is available with activation of the com.glide.encryption.external\\_kms, which requires a separate subscription. For details, see <a href=\"https://www.servicenow.com/docs/access?context=encryption-sku&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Encryption and Key Management subscription bundle</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-encryption-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Architecture",
    "type": "New feature",
    "products": [
      "SPM",
      "CMDB",
      "CSDM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=eaw-work-with-ent-model-and-visual&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enterprise Modeling and Visualization enhancements</a></strong></p>\n<p>Label management improvements for diagrams:</p>\n<ul>\n<li>Add labels: Double-click blank areas or use the adornment tool to automatically place labels in optimal positions. You can add multiple labels to relationship lines.</li>\n<li>Edit and delete labels: Change existing labels or remove them as needed.</li>\n<li>Move with shapes: Labels maintain their relative position when you move associated shapes.</li>\n<li><strong>Note:</strong></li>\n<li>After submitting the diagram for approval, the labels can’t be edited.</li>\n</ul>\n<p>Accessibility enhancements in Enterprise Modeling and Visualization:</p>\n<ul>\n<li>Magnify content up to 400% while maintaining full access to all information and features.</li>\n<li>Navigate the interface using the keyboard.</li>\n<li>Access the shape context menu using the keyboard.</li>\n<li>See pop-over menus when hovering over connector lines.</li>\n</ul>\n<p>ArchiMate shape library enhancements:</p>\n<p>The ArchiMate shape library has been enhanced to align with ArchiMate 3.2 standards, with new categories, elements, and updates to existing shapes.</p>\n<ul>\n<li>Implementation and Migration category: Added this category with the following shape elements:</li>\n</ul>\n<p>    - Implementation event</p>\n<p>    - Gap</p>\n<p>    - Work package</p>\n<p>    - Deliverable</p>\n<p>    - Plateau</p>\n<p>    - Location</p>\n<p>    - Group</p>\n<ul>\n<li>Relationship Type category- Added this category with the following shape elements:</li>\n</ul>\n<p>    - And junction</p>\n<p>    - Or junction</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterprisearchitecture-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Architecture",
    "type": "New feature",
    "products": [
      "SPM",
      "ITAM",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=publishing-center-in-ea-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Exploring the publishing center in Enterprise Architecture Workspace</a></strong></p>\n<p>Use the Publishing Center to control publishing workflows, monitor status, and view publishing history from a single location.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterprisearchitecture-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Architecture",
    "type": "New feature",
    "products": [
      "SPM",
      "ITAM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=working-with-publishing-center&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Publish TRM catalog to a knowledge base</a></strong></p>\n<ul>\n<li>Configure TRM catalogs and apply filters for products and lifecycle phases.</li>\n<li>Manage publishing workflows with status updates from Draft to Published.</li>\n<li>View publishing job history in the Run logs tab.</li>\n<li>Access the published TRM catalog using the generated knowledge base URL.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterprisearchitecture-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Architecture",
    "type": "New feature",
    "products": [
      "SPM",
      "Core Platform"
    ],
    "details": "<p><strong>Enhancements to the <a href=\"https://www.servicenow.com/docs/access?context=eaw-manage-value-streams&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Value stream</a> and <a href=\"https://www.servicenow.com/docs/access?context=eaw-manage-value-stream-stages&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Value stream stage</a> related lists</strong></p>\n<ul>\n<li>Value stream: View associated value stream stages and application models as related lists. You can add, edit, or remove the associated value stream stages and application models.</li>\n<li>Value stream stage: View associated business processes and business capabilities. Add or remove business processes and business capabilities. You can also view the value stream stage as a related list in the business process and business capability records.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterprisearchitecture-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Architecture",
    "type": "New feature",
    "products": [
      "SPM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=eaw-manage-business-processes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enhancements to the Business Process related lists</a></strong></p>\n<p>View the value stream stage as a related list of a business process.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterprisearchitecture-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Architecture",
    "type": "New feature",
    "products": [
      "SPM",
      "CSDM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=eaw-manage-business-capabilities&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enhancements to the Business Capability related lists</a></strong></p>\n<p>View the value stream stage as a related list of a business capability.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterprisearchitecture-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Architecture",
    "type": "New feature",
    "products": [
      "SPM",
      "CSDM",
      "AI Ops",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-documents-for-diagrams&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create documents for the Enterprise Modeling and Visualization diagrams</a></strong></p>\n<ul>\n<li>Save diagram as a document using the Generate document option from the Enterprise Modeling and Visualization diagrams page.</li>\n<li>Define templates for the documents that can be created and used from the Diagrams page.</li>\n<li>Tag components that can be included in the templates to generate documents.</li>\n<li>View associated documents from the Diagrams page.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterprisearchitecture-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Architecture",
    "type": "New feature",
    "products": [
      "SPM",
      "CMDB",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=eaw-explore-arch-analyzer&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Exploring the architecture analyzer</a></strong></p>\n<p>The Architectural Analyzer helps you to analyze architecture data without creating or maintaining custom diagrams. You can visually explore relationships across applications, services, and infrastructure to quickly understand dependencies and collaborate on architecture decisions. You can also understand the potential impact of architectural changes across applications and services.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterprisearchitecture-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Architecture",
    "type": "New feature",
    "products": [
      "SPM",
      "UI",
      "CMDB",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=eaw-rationalize-business-applications&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Application rationalization page enhancements</a></strong></p>\n<p>Added an Overall score indicator to show the overall average score of a business application. Use this indicator to determine the bubble size of a business application on the Bubble Chart page. You can compare the overall scores of different business applications using their individual bubble sizes.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterprisearchitecture-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Architecture",
    "type": "Change",
    "products": [
      "SPM",
      "CMDB",
      "ITAM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=eaw-gran-admin-role-changes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Granular admin role changes in Enterprise Architecture</a></strong></p>\n<p>Added the granular level admin role (sn\\_apm.apm\\_admin) to the following system properties in the Enterprise Architecture:</p>\n<ul>\n<li><strong>sn\\_apm\\_trm.is\\_product\\_life\\_cycle\\_tech\\_debt\\_enabled</strong>: Make this property false to disable calculating level 2 technical debt.</li>\n<li><strong>glide.ui.sn\\_apm\\_trm\\_product\\_request\\_activity.fields</strong>: TRM Product Request activity formatter fields.</li>\n<li><strong>sn\\_apm\\_trm.noOfPublishersPerTRMPage</strong>: The number of publishers to show per page.</li>\n<li><strong>glide.ui.sn\\_apm\\_trm\\_product\\_lifecycle\\_request\\_activity.fields</strong>: TRM Product Lifecycle Request activity formatter fields.</li>\n<li><strong>sn\\_apm.noOfSoftwareModelsPerTPMPage</strong>: The number of software models to show per page. This property is used for client-side pagination.</li>\n<li><strong>sn\\_apm.discoveryModelProductTypesForTPMSuggestions</strong>: Product types of discovery models to consider for TPM software suggestions.</li>\n<li><strong>sn\\_apm.noOfSDLCComponentPerTPMPage</strong>: The number of SDLC components to show per page.</li>\n<li><strong>glide.ui.cmdb\\_ci\\_business\\_app\\_activity.fields</strong>: Business application activity formatter fields.</li>\n<li><strong>sn\\_apm.startRangeOfTPMLifecycle</strong>: The number of years prior to the current date is included when displaying software model lifecycle phases in the TPM timeline.</li>\n<li><strong>sn\\_apm.endRangeOfTPMLifecycle</strong>: The number of years beyond the current date is included when displaying software model lifecycle phases in the TPM timeline.</li>\n<li><strong>noOfBusinessAppsPerTPMPage</strong>: The number of business applications to show per page.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterprisearchitecture-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Architecture",
    "type": "Change",
    "products": [
      "SPM",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=manage-requests-certs-assessments&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enhancements to the My certifications section</a></strong></p>\n<p>View only the certifications that are relevant to you in the <strong>My certifications</strong> tab on the Enterprise Architecture Workspace home page.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterprisearchitecture-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Architecture",
    "type": "Change",
    "products": [
      "SPM",
      "CMDB",
      "CSDM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=eaw-work-with-application-portfolio&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enhancements to the Application Portfolio</a></strong></p>\n<p>Business applications with the Retired state or Lifecycle stage as End of life are no longer displayed in the Business Portfolio section.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterprisearchitecture-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Architecture",
    "type": "Change",
    "products": [
      "Core Platform",
      "CMDB",
      "CSDM",
      "SPM",
      "UI"
    ],
    "details": "<p>Navigate the interface using the keyboard on the Enterprise Modeling and Visualization pages.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterprisearchitecture-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Architecture",
    "type": "Change",
    "products": [
      "SPM",
      "Core Platform",
      "Integrations"
    ],
    "details": "<p>Access the shape context menu using the keyboard on the Enterprise Modeling and Visualization canvas. On navigating to a particular shape context menu button, the selected button gets highlighted.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterprisearchitecture-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Architecture",
    "type": "Change",
    "products": [
      "SPM",
      "CMDB",
      "CSDM",
      "UI"
    ],
    "details": "<p>See pop-over menus when hovering over connector lines on the Enterprise Modeling and Visualization canvas.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterprisearchitecture-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Architecture",
    "type": "Change",
    "products": [
      "SPM",
      "UI"
    ],
    "details": "<p>Reflow- The Enterprise Architecture Workspace supports reflow, which enables pages and content to be zoomed up to 400% through your browser settings without loss of content or functionality. Additionally, content can be enlarged without scrolling in two dimensions at a width equivalent to 320 CSS pixels or a height equivalent to 256 CSS pixels. Page layouts are transformed into a vertical, stacked view automatically when users increase browser zoom to 400%.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterprisearchitecture-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Architecture",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform"
    ],
    "details": "<p>This enhancement helps users with low vision or who have trouble seeing web content in a browser due to monitor size, device type, poor lighting, or other situations. Reflow can be turned off with a system property for instances, experiences, and pages.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterprisearchitecture-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Asset Management",
    "type": "New feature",
    "products": [
      "ITAM",
      "FSM",
      "CMDB",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=manage-work-order-plans&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Define, schedule, and track complex asset-centric work tasks through work order plans</a></strong></p>\n<p>Manage complex asset-centric work tasks with unified work order plans that can be applied across assets, asset groups, or locations. The work order plans offer the following benefits:</p>\n<ul>\n<li>Save work order plans as reusable templates for use across assets.</li>\n<li>Organize sequential operations—shutdowns, safety inspections, calibrations, asset conditions, and restarts—using the structured playbook.</li>\n<li>Assign, schedule, and track work order tasks for technicians within the playbook.</li>\n<li>Enable technicians to receive assigned work order tasks and update task status through the ServiceNow Mobile Agent application.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterpriseassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Asset Management",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITAM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-model-eam&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Manage multimedia production equipment models and assets</a></strong></p>\n<p>Create, track, and manage multimedia production equipment models and assets in the Enterprise Asset Workspace. Get a comprehensive view of these models and assets so that you can manage them effectively throughout their life cycles.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterpriseassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Asset Management",
    "type": "New feature",
    "products": [
      "ITAM",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=eam-roles&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Replace broad admin checks with granular admin roles and ACL updates</a></strong></p>\n<p>Manage admin access precisely with granular admin roles. Instead of giving full admin privileges to the users, you can assign specific roles based on the tasks they perform.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterpriseassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Asset Management",
    "type": "New feature",
    "products": [
      "ITAM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=audit-eam-assetinventory&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enhanced and unified hardware asset inventory auditing experience</a></strong></p>\n<p>Streamline and improve your inventory auditing experience with the enhanced and unified hardware asset inventory process:</p>\n<ul>\n<li>Initiate a single audit that covers both hardware and enterprise assets assigned to a specific location or stockroom, eliminating the need to switch between multiple workspaces.</li>\n<li>Include consumable assets in the inventory audit to avoid asset shrinkage and ensure that inventory data remains accurate.</li>\n<li>The ServiceNow Agent app features selectable audit results, enabling you to view a real-time list of all scanned assets.</li>\n<li>When new assets are identified during the single scan audit, essential information is collected in real time through the ServiceNow Agent app to initiate asset creation.</li>\n<li>Scanned asset locations are automatically updated to reflect their precise aisle, space, or sub location during the audit, supporting the accuracy and quality of inventory records.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterpriseassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Asset Management",
    "type": "Change",
    "products": [
      "ITAM",
      "FSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-eam-work-order-task&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Multiple assets and asset groups in a work order</a></strong></p>\n<p>A work order and work order task can now be created for asset groups in addition to individual assets. Additionally, the sn\\_eam.enterprise\\_asset\\_manager role can add more assets to tasks while they're in the draft stage. When technicians start the task, they can take action on all included assets. The Deploy Asset, Swap Asset, and Remove Asset actions within work order tasks support multiple assets and asset groups.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterpriseassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Asset Management",
    "type": "Change",
    "products": [
      "ITAM",
      "FSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-eam-work-order-task&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Shutdown and Startup work types</a></strong></p>\n<p>The <strong>Shutdown</strong> and <strong>Startup</strong> work types available in the work order tasks enable you to manage asset shutdown and restart tasks.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterpriseassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Asset Management",
    "type": "Change",
    "products": [
      "ITAM",
      "FSM",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=complete-eam-work-order&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Multiple calibration playbooks</a></strong></p>\n<p>When a calibration work order is created for multiple assets or an asset group, the system generates a separate calibration playbook for each asset in the Affected assets list.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterpriseassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Asset Management",
    "type": "Change",
    "products": [
      "ITAM",
      "FSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=perform-condition-assessment-webui&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Multiple condition lines</a></strong></p>\n<p>When an asset condition work order is created for multiple assets or an asset group, the system generates a separate condition line for each asset in the Affected assets list. All condition lines must be evaluated before the work order can be completed.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterpriseassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Enterprise Asset Management",
    "type": "Activation Information",
    "products": [
      "ITAM",
      "CMDB",
      "ITOM",
      "FSM"
    ],
    "details": "<p>Install the following applications by requesting them from the ServiceNow Store:</p>\n<ul>\n<li>Enterprise Asset Management</li>\n<li>Enterprise Asset Management for Healthcare</li>\n<li>Enterprise Asset Management for Facilities</li>\n<li>OT Asset Management</li>\n<li>Enterprise Asset Management for Data Center and Network Asset Management (DCNAM)</li>\n<li>Enterprise Asset Management for Providers</li>\n<li>Expanded Model and Asset Classes</li>\n</ul>\n<p>Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-enterpriseassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Event Management",
    "type": "New feature",
    "products": [
      "Event Management",
      "ITOM",
      "AI Ops"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=group-alert-sow-itom&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Unified alert grouping across Event Management and HLA</a></strong></p>\n<p>Improve alert quality, reduce noise, and achieve higher compression to act faster on issues by grouping Health Log Analytics and Event Management alerts.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-eventmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Event Management",
    "type": "New feature",
    "products": [
      "Event Management",
      "ITOM",
      "CMDB",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=enrich-alert-sow-itom&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create Enrich automation</a></strong> <strong>Explicit node-based control for CI binding</strong></p>\n<p>Increase binding accuracy and reliability and improve alert-to-CI binding with explicit node-based control, configurable node-field usage, enhanced mapping logic, and backward-compatible updates.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-eventmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Event Management",
    "type": "Deprecation",
    "products": [
      "Event Management",
      "ITOM",
      "AI Ops",
      "UI"
    ],
    "details": "<p>Alert Clustering Definitions (ACD) have been deprecated and fully replaced by Alert Automation in Service Operations Workspace. All existing configurations remain supported with full feature parity.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-eventmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Event Management",
    "type": "Deprecation",
    "products": [
      "Event Management",
      "ITOM",
      "UI"
    ],
    "details": "<p>Service Management Dashboard is now deprecated and no longer supported or available for new activation. For details, see the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0867184\" target=\"_blank\" rel=\"noopener noreferrer\">Deprecation Process KB0867184</a> article in the Now Support knowledge base.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-eventmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Field Service Management",
    "type": "New feature",
    "products": [
      "FSM",
      "CSM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=using-dispatcher-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Dispatcher Workspace</a></strong></p>\n<p><a href=\"https://www.servicenow.com/docs/access?context=using-dispatcher-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Dispatcher Workspace</a> now enables you to perform the following tasks:</p>\n<ul>\n<li>Show multiple time zones on the map in Dispatcher Workspace with a segmented time indicator to see which time zone each Field Service technician is in. For more information, see <a href=\"https://www.servicenow.com/docs/access?context=time-zones-dispatcher&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Time zones</a>.</li>\n<li>Quickly see a work order task in the task panel and find it on the calendar rather than having to search through multiple days. For more information, see <a href=\"https://www.servicenow.com/docs/access?context=open-task-platform-list&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Open tasks from the task list</a>.</li>\n<li>See live traffic on the map in Dispatcher Workspace. For more information, see <a href=\"https://www.servicenow.com/docs/access?context=map-overlay-dispatcher&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Show map overlays in Dispatcher Workspace</a>.</li>\n<li>Flag multiple tasks at once. For more information, see <a href=\"https://www.servicenow.com/docs/access?context=flag-task-list-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Flag or unflag tasks from the list</a>.</li>\n<li>Quickly find tasks in the calendar from the task list. For more information, see <a href=\"https://www.servicenow.com/docs/access?context=flag-task-list-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Flag or unflag tasks from the list</a>.</li>\n<li>View analytics, including the number of technicians without a work schedule or valid location. For more information, see <a href=\"https://www.servicenow.com/docs/access?context=scheduling-health-dashboard&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Scheduling Health dashboard</a>.</li>\n<li>Show an overtime indicator on the calendar to visually see which technicians have overtime tasks. For more information, see <a href=\"https://www.servicenow.com/docs/access?context=dispatcher-wrkspc-settings&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Show overtime indicator</a>.</li>\n<li>Control the size of the cells on the calendar to see shorter tasks more easily. For more information, see <a href=\"https://www.servicenow.com/docs/access?context=calendar-zoom-dispatcher&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Zoom in or out on the calendar</a>.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-fieldservicemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Field Service Management",
    "type": "New feature",
    "products": [
      "FSM",
      "CSM",
      "ITOM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=manager-mobile-app&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Field Service Manager Mobile</a></strong></p>\n<p>Field Service Managers can do their work from anywhere on their mobile device, including the following tasks:</p>\n<ul>\n<li><a href=\"https://www.servicenow.com/docs/access?context=mange-agents-mobile&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Manage Field Service technicians from Field Service Manager mobile</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=create-task-manager-mobile&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create a work order task</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=event-manager-mobile&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create a personal event</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=view-analytics-manager&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">View analytics from Field Service Manager Mobile</a></li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-fieldservicemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Field Service Management",
    "type": "New feature",
    "products": [
      "FSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-personal-event&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Locations on personal events</a></strong></p>\n<p>See locations for personal events regardless of where they’re created in Field Service Management applications including Dispatcher Workspace and Field Service Manager Mobile.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-fieldservicemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Field Service Management",
    "type": "New feature",
    "products": [
      "FSM",
      "ITAM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=Use-mobile-app-fsm&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Agent mobile app</a></strong></p>\n<ul>\n<li>Generate work summary reports and capture signatures in them at the work order task level along with the existing work order level. Additionally, you can view responses and score information for the smart assessment questionnaires in the work summary report.</li>\n<li>Perform asset audits for the technician's personal stockroom to verify and reconcile assets between a physical stockroom and the data on the ServiceNow instance.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-fieldservicemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Field Service Management",
    "type": "New feature",
    "products": [
      "FSM",
      "CSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=respond-task-review-mobile&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Respond to a reviewed work order task</a></strong></p>\n<p>View and resubmit smart assessment questionnaire responses that need additional information, enabling more informed and timely corrections of responses from job sites.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-fieldservicemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Field Service Management",
    "type": "New feature",
    "products": [
      "FSM",
      "AI Ops",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=schedule-optimization-engine&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Schedule Optimization</a></strong></p>\n<p>Enhance scheduling accuracy and performance with <a href=\"https://www.servicenow.com/docs/access?context=schedule-optimization-engine&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Schedule Optimization</a></p>\n<ul>\n<li>View comprehensive details for all optimization runs to quickly identify issues. Access standardized information about run status, included tasks and qualifiers, unassigned tasks with explanations, and the objectives and constraints applied during each optimization.</li>\n<li>Manage integrations more easily by configuring options to enable or disable third-party map providers beyond the default provider.</li>\n<li>Leverage all available trainers to reduce processing time and accelerate end-to-end scheduling for high-volume scenarios by splitting qualifiers into non-overlapping sets and running multiple optimization jobs in parallel.</li>\n<li>Improve scheduling accuracy by introducing a <strong>Window End Buffer Duration</strong> field on the Work Order task record that enables you to configure a buffer duration that extends optimization beyond the defined window end so tasks are retained in the schedule.</li>\n<li>Ensure that only specified technicians can be assigned to the task, overriding all other assignment preferences, by marking technicians as <strong>Required</strong> when creating work order tasks.</li>\n<li>Maintain consistency by removing intraday events that do not meet the defined condition for both scheduled and prioritized optimization runs. When an event is removed from prioritized optimization, it's also removed from the scheduled intraday run.</li>\n<li>Improve optimization control by applying matching rules to intraday events by accessing them in the <strong>Table</strong> field on Matching Rules.</li>\n<li>View how qualifiers are grouped for efficient creation of multiple ML jobs using the <strong>Job Distribution</strong> column in both batch and intraday runs.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-fieldservicemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Field Service Management",
    "type": "New feature",
    "products": [
      "FSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=appointment-booking-administer&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Appointment Booking</a></strong></p>\n<p>Use <a href=\"https://www.servicenow.com/docs/access?context=appointment-booking-administer&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Appointment Booking</a> to perform the following tasks:</p>\n<ul>\n<li>Ensure better alignment with your operations by defining advanced lead time and cut-off logic through APIs or extension points. You can implement a custom script through an extension point based on job type, time of day, and day of week.</li>\n<li>Accommodate emergencies or priorities even if the capacity or appointment slots are full by enabling overbooking of appointments.</li>\n<li>Configure appointment slots to consider the holiday settings for a territory and display the available slots accordingly.</li>\n<li>Ensure guaranteed appointment slots by configuring availability checks to be performed at the time of slot retrieval so that any slot displayed is assured to be bookable without needing further capacity validation during the appointment booking.</li>\n<li>Ensure an accurate calculation of the duration for a task while booking an appointment by defining work and travel duration either in the appointment schedule configuration or in the schedule override configuration.</li>\n<li>Determine appointment availability using territory and demand channel mapping when contact or location details are not provided.</li>\n<li>Consider task dependencies while booking or rescheduling appointments and display the slots for the successor tasks after the estimated completion time including the defined lag time for the predecessor task.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-fieldservicemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Field Service Management",
    "type": "Change",
    "products": [
      "FSM",
      "CSM",
      "AI Search",
      "Now Assist",
      "Integrations",
      "UI"
    ],
    "details": "<p>The following plugins are planned for deprecation in the C release. Beginning with the Australia release this plugin will be migrated to a store application. Upgrade your instance to Australia or later release versions and the store applications will be automatically installed.</p>\n<p>Beginning with the Australia release, the following applications have been moved to the <https://www.servicenow.com/docs/access?context=external.sn-app-store&family=australia&ft:locale=en-US>. Any application enhancements will be delivered through the related store app.</p>\n<ul>\n<li><a href=\"https://www.servicenow.com/docs/access?context=appintment-booking-day-level-config&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Advanced Appointment Booking</a> (com.snc.advanced\\_appointment\\_booking)</li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=configuring-fsm-contractor-management&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Field Service Contractor Management</a> (com.snc.fsm\\_contractor\\_management)</li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=configuring-contractor-marketplace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Field Service Marketplace</a> (com.snc.fsm\\_marketplace)</li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=configuring-territory-planning-fsm&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Field Service Territory Planning</a> (com.snc.fsm\\_territory\\_planning)</li>\n<li>Field Service Advanced Capacity and Reservations management (com.snc.fsm\\_advanced\\_capacity\\_management)</li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=configuring-capacity-management&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Field Service Capacity and Reservations Management</a> (com.snc.fsm\\_capacity\\_management)</li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=Configuring-service-location&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Field Service with Service Locations Support</a> (com.snc.fsm\\_service\\_locations)</li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=create-opportunity&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Technician driven sales with Field Service</a> (com.snc.fsm\\_technician\\_sales)</li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=schedule-optimization-engine-plugin&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Schedule Optimization</a> (com.snc\\_schedule\\_optimization)</li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=config-quality-mgmt&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Field Service Quality Management</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=setting-up-field-service-mobile-agent&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Field Service Mobile Agent</a></li>\n<li>Map Integrations for Field Service (com.snc.app\\_fsm\\_map\\_integr)</li>\n<li>Beans.ai plugin (com.sn\\_beans\\_ai\\_spoke)</li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=activate-intelligent-task-recommendation&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Intelligent Task Recommendations</a> (sn\\_fsm\\_task\\_rec)</li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=activate-intraday-scheduling-plugin&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Field Service Management Scheduling Automations</a> (sn\\_fsm\\_sched\\_flws)</li>\n<li>Application Common Configuration (sn\\_app\\_cmn\\_config): This is a component of Dispatcher Workspace.</li>\n<li>Intelligent Task Recommendations (sn\\_task\\_recommend): This is a component of Intelligent Task Recommendations.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-fieldservicemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Field Service Management",
    "type": "Change",
    "products": [
      "FSM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=r_PropInstallWFieldServMgmnt&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Google maps ID</a></strong></p>\n<p>The <strong>google.maps.map\\_id</strong> system property enables Field Service Management to use Google Maps for cloud-based map styling, vector mapping, and advanced markers. You must obtain your own map ID.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-fieldservicemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Financial Services Card Operations",
    "type": "Change",
    "products": [
      "CSM",
      "Core Platform",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=chargeback-stage-mastercard&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Automated document submission in Mastercard transaction dispute process</a></strong></p>\n<p>Streamline the submission of supporting documents to Mastercard in the Mastercard Dispute Management workflow through document attachment and validation. Attached files are automatically checked against Mastercard requirements for file type and size. This update reduces the need for manual intervention, minimizes rework, and helps avoid rejection risk.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-financialservicescardoperations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Financial Services Card Operations",
    "type": "Change",
    "products": [
      "CSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=card-data-security&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">New subflow and action to support Card data security</a></strong></p>\n<p>Support attaching documents to a specified table record using the following subflow and action in Card data security:</p>\n<ul>\n<li>Attach Document to Table Record</li>\n<li>Attach Tokenized Document to Table Record</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-financialservicescardoperations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Financial Services Card Operations",
    "type": "Activation Information",
    "products": [
      "CSM",
      "Integrations"
    ],
    "details": "<p>Install Financial Services Card Operations by requesting it from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-financialservicescardoperations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Financial Services Operations Integration with Mastercard",
    "type": "New feature",
    "products": [
      "FSM",
      "Integrations",
      "CSM"
    ],
    "details": "<p><strong>​ <a href=\"https://www.servicenow.com/docs/access?context=financial-services-operations-integration-with-mastercard-subflows&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Integration components for the Mastercard document attachment and validation enhancement</a></strong></p>\n<p>Simplify dispute document submission to Mastercard with improved document attachment and validation feature. The application compresses multiple attachments into a single zipped file, validates files for type and size, and alerts you to non-compliant files. This capability adds the following integration subflow and action:</p>\n<ul>\n<li>Mastercom - Validate and Process Attachments of Card Disputes Task</li>\n<li>Create a Zip Attachment from Uploaded Documents</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-financialservicesoperationsintegrationwithmastercard-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Financial Services Operations Integration with Mastercard",
    "type": "Change",
    "products": [
      "Integrations",
      "SecOps",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=financial-services-operations-integration-with-mastercard-subflows&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Updated subflows</a></strong></p>\n<p>The following subflows were updated to support integration with the Card data security application:</p>\n<ul>\n<li>Mastercom - Look up Case Documents</li>\n<li>Mastercom - Look up Chargeback Documents</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-financialservicesoperationsintegrationwithmastercard-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Financial Services Operations Integration with Mastercard",
    "type": "Change",
    "products": [
      "CSM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=financial-services-operations-integration-with-mastercard-subflows&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Updated subflows for the Mastercard document attachment and validation enhancement</a></strong></p>\n<p>The following subflows were updated to support the document attachment and validation enhancement:</p>\n<ul>\n<li>Mastercom - Create Case Filing</li>\n<li>Mastercom - Create Chargeback</li>\n<li>Mastercom - Take Action on Case</li>\n<li>Mastercom - Update Chargeback</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-financialservicesoperationsintegrationwithmastercard-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Financial Services Operations Integration with Visa",
    "type": "Change",
    "products": [
      "Core Platform",
      "CSM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=components-installed-with-the-financial-services-operations-integration-with-visa&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Updated subflows</a></strong></p>\n<p>The following subflows have been updated to support integration with the Card data security application:</p>\n<ul>\n<li>Look up Associated Transactions</li>\n<li>Look up Dispute Pre Arbitration Details</li>\n<li>Look up Dispute Filing Details</li>\n<li>Look up Dispute Response Details</li>\n<li>Look up Dispute Pre Arbitration Response Details</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-financialservicesoperationsintegrationwithvisa-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Goal Framework for SPM",
    "type": "New feature",
    "products": [
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=goal-framework&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Define targets at multiple organizational levels</a></strong></p>\n<p>Define targets across multiple organizational levels with the <strong>Assigned entity type</strong> and <strong>Assigned entity</strong> fields in the target form. This enables targets created at higher levels (for example, Company) to be directly assigned to lower levels (for example, Business Unit, Department), eliminating redundant subgoal creation, and streamlining overall goal management.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-goalframeworkforspm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Hardware Asset Management ",
    "type": "Important Information for upgrading",
    "products": [
      "ITAM",
      "SecOps",
      "Core Platform",
      "CMDB"
    ],
    "details": "<p>To enhance security and manage admin access precisely, the granular admin roles are now installed. These roles replace broad admin checks by assigning specific privileges based on user tasks, rather than granting full admin access:</p>\n<ul>\n<li>sn\\_hamp.ham\\_system\\_admin: Provides access to HAM licensing, HAM Guided Setup, HAM application properties and system properties, and a few tables.</li>\n<li>sn\\_hamp.ham\\_asn\\_admin: Provides access to the Advanced Shipment Notification (ASN) feature.</li>\n<li>asset\\_integration\\_admin: Provides access to Standard hardware Zero touch request and carrier integration features, and shipment tables.</li>\n<li>asset\\_system\\_admin: Provides access to asset job log, content audit, transfer order, expense management, and model management.</li>\n<li>asset\\_task\\_admin: Provides access to asset tasks.</li>\n<li>procurement\\_system\\_admin: Provides access to procurement module, tables, and tasks.</li>\n<li>contract\\_system\\_admin: Provides access to contract module, tables, and tasks.</li>\n<li>asset\\_licensing\\_admin: Provides access to the ITAM licensing module.</li>\n<li>asset\\_recommendation\\_admin: Provides access to recommendation actions.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-hardwareassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Hardware Asset Management ",
    "type": "Important Information for upgrading",
    "products": [
      "ITAM",
      "Core Platform",
      "UI",
      "Developers",
      "AI Platform"
    ],
    "details": "<p>Strengthen your instance security and maintain backward compatibility through enhanced protections for read‑only fields across the ServiceNow AI Platform®. These back-end changes include a new “read\\_only\\_option” field with granular control levels, including “strict\\_read\\_only” and “client\\_script\\_modifiable\". If you have custom client scripts that modify read‑only fields on the ServiceNow AI Platform® using g\\_form.setValue() or g\\_form.clearValue(), see the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB2718122\" target=\"_blank\" rel=\"noopener noreferrer\">Remediation for strict read-only fields preventing client side updates KB2718122</a> article in the Now Support Knowledge Base. This article provides additional technical details on how to identify affected fields and adjust their settings. For more information about granular read-only security options, see <a href=\"https://www.servicenow.com/docs/access?context=read-only-option&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configuring read-only security options</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-hardwareassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Hardware Asset Management ",
    "type": "New feature",
    "products": [
      "ITAM",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=approximated-lifecycles-hardware-products&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Gain visibility into approximated life cycle dates for hardware and consumable model</a></strong></p>\n<p>Enhance the operational efficiency by gaining visibility into the estimated and approximate life- cycle dates for models when manufacturers haven’t explicitly published key dates, such as End of Life (EoL) and End of Service (EoS). This insight enables you to manage your asset portfolio strategically, reducing unexpected downtime and improve budgeting.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-hardwareassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Hardware Asset Management ",
    "type": "New feature",
    "products": [
      "ITAM",
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=ham-inventory-audit&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enhanced and unified hardware asset inventory auditing experience</a></strong></p>\n<p>Streamline and improve your inventory auditing experience with the enhanced and unified hardware asset inventory process:</p>\n<ul>\n<li>Initiate a single audit that covers both hardware and enterprise assets assigned to a specific location or stockroom, eliminating the need to switch between multiple workspaces.</li>\n<li>Include consumable assets in the inventory audit to avoid asset shrinkage and verify that inventory data remains accurate.</li>\n<li>The ServiceNow Agent app features selectable audit results, enabling you to view a real-time list of all scanned assets.</li>\n<li>When new assets are identified during the single scan audit, essential information is collected in real time through the ServiceNow Agent app to initiate asset creation.</li>\n<li>Scanned asset locations are automatically updated to reflect their precise aisle, space, or sub location during the audit, supporting the accuracy and quality of inventory records.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-hardwareassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Hardware Asset Management ",
    "type": "New feature",
    "products": [
      "ITAM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-resale-order&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enhanced asset disposal workflow to streamline the management of retired assets</a></strong></p>\n<p>Resell the retired assets that are no longer in use to reduce waste and receive credit. The extended asset disposal flow in the Documentation stage enables you to resell planned assets instead of disposing of them, enabling you to receive credit.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-hardwareassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Hardware Asset Management ",
    "type": "New feature",
    "products": [
      "ITAM",
      "ITSM",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=advanced-shipment-notification&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enable your key functional roles or personas to directly manage Advanced Shipment Notification (ASN) imports</a></strong></p>\n<p>Upload ASN files and trigger the import process from the Procurement view within the Hardware Asset Workspace without requiring admin privileges. Users with the ham\\_admin, ham\\_user, procurement\\_admin, or asset role can now initiate the ASN workflow themselves, creating asset records seamlessly.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-hardwareassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Hardware Asset Management ",
    "type": "New feature",
    "products": [
      "ITAM",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=copy-hardware-model&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Streamline model creation by copying a model directly from the Content lookup portal</a></strong></p>\n<p>Reduce manual effort by copying a model from the Content lookup portal to create a record in the Product Model [cmdb\\_model] table. The copied model is automatically normalized, where applicable, and relevant fields are pre-populated with information from the content record.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-hardwareassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Healthcare and Life Sciences Service Management Core",
    "type": "Important Information for upgrading",
    "products": [
      "Core Platform",
      "AI Platform",
      "CSM"
    ],
    "details": "<p>Strengthen your instance security and maintain backward compatibility through enhanced protections for read‑only fields across the ServiceNow AI Platform®. These back-end changes include a new “read\\_only\\_option” field with granular control levels, including “strict\\_read\\_only” and “client\\_script\\_modifiable\". If you have custom client scripts that modify read‑only fields on the ServiceNow AI Platform® using g\\_form.setValue() or g\\_form.clearValue(), see the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB2718122\" target=\"_blank\" rel=\"noopener noreferrer\">Remediation for strict read-only fields preventing client side updates KB2718122</a> article in the Now Support Knowledge Base. This article provides additional technical details on how to identify affected fields and adjust their settings. For more information about granular read-only security options, see <a href=\"https://www.servicenow.com/docs/access?context=read-only-option&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configuring read-only security options</a>.</p>\n<p>If you have the feature administrator role you can now complete tasks that were initially reserved for users with the broader administrator role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-healthcareandlifesciencesservicemanagementcore-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Healthcare and Life Sciences Service Management Core",
    "type": "Activation Information",
    "products": [
      "CSM",
      "Core Platform"
    ],
    "details": "<p>Install Healthcare and Life Sciences Service Management Core by requesting it from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-healthcareandlifesciencesservicemanagementcore-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Healthcare Operations Core",
    "type": "Important Information for upgrading",
    "products": [
      "Core Platform",
      "AI Platform",
      "Developers",
      "UI"
    ],
    "details": "<p>Strengthen your instance security and maintain backward compatibility through enhanced protections for read‑only fields across the ServiceNow AI Platform®. These back-end changes include a new “read\\_only\\_option” field with granular control levels, including “strict\\_read\\_only” and “client\\_script\\_modifiable\". If you have custom client scripts that modify read‑only fields on the ServiceNow AI Platform® using g\\_form.setValue() or g\\_form.clearValue(), see the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB2718122\" target=\"_blank\" rel=\"noopener noreferrer\">Remediation for strict read-only fields preventing client side updates KB2718122</a> article in the Now Support Knowledge Base. This article provides additional technical details on how to identify affected fields and adjust their settings. For more information about granular read-only security options, see <a href=\"https://www.servicenow.com/docs/access?context=read-only-option&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configuring read-only security options</a>.</p>\n<p>If you have the feature administrator role you can now complete tasks that were initially reserved for users with the broader administrator role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-healthcareoperationscore-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Hermes Messaging Service",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Integrations",
      "Event Management",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=exploring-hermes-messaging-service&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Expanded topic limits in Hermes</a></strong></p>\n<p>Create more topics in Hermes with an increased topic limit. The total number of partitions across all topics can't exceed 960.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-hermesmessagingservice-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Hermes Messaging Service",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Integrations",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=monitoring-data-usage-hermes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Hermes Usage Dashboard improvements</a></strong></p>\n<p>View Hermes data usage by source, including the total number of bytes received and bytes sent over time, in the Hermes Usage Dashboard.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-hermesmessagingservice-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Hermes Messaging Service",
    "type": "New feature",
    "products": [
      "Core Platform",
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=restricting-access-hermes-topics&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Access restrictions by IP address</a></strong></p>\n<p>Restrict access to Hermes by enabling IP address access control rules.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-hermesmessagingservice-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Hermes Messaging Service",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Event Management",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=hermes-messaging-service-roles-4&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">View-only role</a></strong></p>\n<p>Enable administrators to view topics and namespaces in Hermes by granting the hermes\\_viewer role instead of the full admin role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-hermesmessagingservice-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Identity",
    "type": "New feature",
    "products": [
      "SecOps",
      "Integrations",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=machine-identity-console&family=zurich&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Machine Identity Console</a></strong></p>\n<p>Use the Machine Identity Console to see what data integration accounts are accessing and how they’re configured. This console helps you make smarter security decisions about setting up these accounts.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-identity-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Identity",
    "type": "New feature",
    "products": [
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=roles-within-platform-security&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Bundle psec.roles within platform security</a></strong></p>\n<p>The granular admin role enables developers and administrators to complete administrative configuration tasks for Identity without requiring the full admin role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-identity-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Identity",
    "type": "New feature",
    "products": [
      "Now Assist",
      "Core Platform",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=aia-role-masking&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Role masking in Now Assist AI agents</a></strong></p>\n<p>Use role masking for AI agents and agentic workflows to limit the inherited roles during tool execution, verifying that AI agents run with restricted privileges, minimizing potential security risks and helping prevent unintended actions.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-identity-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Identity",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=t_CreateAUser&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">User management enhancements</a></strong></p>\n<p>User management enhancements:</p>\n<ul>\n<li>Configure AI agents or AI users by selecting the AI option from the Identity type drop-down menu.</li>\n<li>Use the ai\\_user\\_admin role for creating, editing, and role management of AI users. Use this role to view, create, edit, assign roles to, and delete users with the identity type as AI.</li>\n<li>Use the Identity sub-type field to categorize the identity type while creating a user.</li>\n<li>Use the new date and time formats based on the user's preference while creating users.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-identity-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Identity",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=federated-id&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Federated ID</a></strong></p>\n<p>Use Federated ID to uniquely identify roles across multiple instances. Federated ID provides a unique identifier for roles, making it easier to manage and track them across instances.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-identity-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Identity",
    "type": "New feature",
    "products": [
      "SecOps",
      "Integrations",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=machine-identity-console&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Machine Identity Console</a></strong></p>\n<p>View the Inbound API Integration Usage dashboard under the Machine Identity Console's Unique API calls page to access statistics for requesters and their API calls.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-identity-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Identity",
    "type": "New feature",
    "products": [
      "Core Platform",
      "AI Platform",
      "AI Governance",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=scripting-governance&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Scripting Governance Tool</a></strong></p>\n<p>Manage user permissions for scripting on the ServiceNow AI Platform from the enhanced scripting governance tool.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-identity-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Identity",
    "type": "Accessibility Information",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong>Coral theme</strong></p>\n<p>Coral is now the default theme for new portal, web, and mobile experiences with Next Experience or Core UI enabled. This theme provides a fresh look and feel, featuring brand-neutral illustrations to enhance your user experience. A dark theme option is available for web and mobile experiences.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-identity-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Impact",
    "type": "New feature",
    "products": [
      "Now Assist",
      "Core Platform",
      "AI Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=impact-health-agent&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for Platform Health</a></strong></p>\n<p>Help customers proactively identify, prioritize, and resolve technical debt by using the collection of AI-native tools embedded within the Impact Platform Health experience.</p>\n<p>Track and resolve issues in developer code throughout the end-to-end workflow by reviewing and applying AI-recommended fixes through the <a href=\"https://www.servicenow.com/docs/access?context=code-fix-ai-remediation-agent&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Remediate Scan Engine findings with Now Assist</a>, which provides AI-generated code fixes for leading practice violations.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-impact-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Impact",
    "type": "New feature",
    "products": [
      "CSDM",
      "ITSM",
      "ITOM",
      "AI Governance",
      "Integrations",
      "Core Platform",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=new-accelerators-australia-release&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">New Accelerators in the Australia Release</a></strong></p>\n<p>Jumpstart your Impact Platform health, Data privacy, Walk-up experience, Digital product release, Modern change management, Major incident management, CSDM for service operations, and Integration hub by using technical Accelerators.</p>\n<p>Improve your business outcomes by using the OCM: Preparing for change and adopt AI governance impact strategy Accelerators.</p>\n<p>Assess your CSDM maturity, improve CSDM Data modeling, and accelerate your portal’s user experience with the help of usage insights and virtual agent experience design provided by the architecture Accelerators.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-impact-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Impact",
    "type": "New feature",
    "products": [
      "SPM",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=impact-roles&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Roles installed with Impact</a></strong></p>\n<p>Grant selected users with partner accounts access to the Impact Store Application through the new <strong>Impact Partner</strong> role. Users assigned with the partner role can efficiently manage Impact for their customers. You can view the users added as partners on the Impact homepage.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-impact-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Impact",
    "type": "New feature",
    "products": [
      "SPM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=manage-capability-maps&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Manage Capabilities Maps for the Impact Store Application</a></strong></p>\n<p>The Capabilities Map homepage now shows true application capabilities organized by product line.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-impact-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Impact",
    "type": "Change",
    "products": [
      "Core Platform",
      "ITSM",
      "CSM",
      "HRSD",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=guided-setup-impact-in-app&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure Impact with Guided Setup</a></strong></p>\n<p>The Impact Guided Setup provides a more efficient, streamlined way for you to configure the Impact Store Application. For information about how to upgrade, see <a href=\"https://www.servicenow.com/docs/access?context=configuring-impact-platform&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure the Impact Store Application</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-impact-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Impact",
    "type": "Activation Information",
    "products": [
      "SPM",
      "CSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=impact-landing-page&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Impact</a></strong></p>\n<p>For information on package entitlement and features activation, see <a href=\"https://www.servicenow.com/docs/access?context=impact-packages&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Impact packages</a>.</p>\n<p>For details on configuring Impact and its features, see <a href=\"https://www.servicenow.com/docs/access?context=configuring-impact&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configuring Impact</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-impact-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Import and Export",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=parallel-exports&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enable large exports with parallel export sets</a></strong></p>\n<p>Export data with multiple small attachments in parallel. Exporting data in parallel can enable your integrations to finish in less time and create less of an impact on other tasks.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-importandexport-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Import and Export",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Integrations",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-import-connection-alias&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Use a connection alias for a JDBC data source</a></strong></p>\n<p>Configure a separate connection alias for JDBC data sources. Configuring the connection alias separately enables you to reuse it rather than having to reconfigure it with each JDBC data source.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-importandexport-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Import and Export",
    "type": "Change",
    "products": [
      "Integrations",
      "ITOM",
      "CMDB"
    ],
    "details": "<p><strong>The mssql-jdbc.7.4.1.jre8 jar file is no longer part of the MID Server distribution</strong></p>\n<p>If you have a JDBC data source integration that uses this jar file (that is, any MSSQL connections) install this jar file or the vendor recommended jar file according to KB0862383.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-importandexport-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Import and Export",
    "type": "Activation Information",
    "products": [
      "AI Platform",
      "Core Platform",
      "Integrations"
    ],
    "details": "<p>Import and Export is a ServiceNow AI Platform feature that is active by default.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-importandexport-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Incident Management",
    "type": "New feature",
    "products": [
      "ITSM",
      "CMDB",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=req-itsm-roles-inci-mgmt&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Introduction of granular admin roles</a></strong></p>\n<p>Configure all the incident, major incident, task outage and related communication features for both UI16 and SOW using the following granular admin roles:</p>\n<ul>\n<li>sn\\_incident\\_admin: Configure all Incident Management features including incident management properties.</li>\n<li>sn\\_mim\\_admin: Configure all Major Incident Management features including major incident properties and trigger rules.</li>\n<li>sn\\_tcm\\_admin: Configure all Task Communications Management features including communication plans and tasks.</li>\n<li>sn\\_iam\\_admin: Configure all Incident Communications Management features including creating, editing, or canceling incident communication plan, communication task, and managing contact information. Additionally, this role can administrate all Incident Communications Management capabilities.\"</li>\n<li>sn\\_contact\\_admin: Configure all Contact Management features including creating and editing contact definitions, contact responsibilities, configuration of MI users, recipient lists, and groups.</li>\n<li>sn\\_task\\_outage\\_admin: Configure all Task Outage features including the mapping between the Task [task] table and the Outage [cmdb\\_ci\\_outage] table.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-incidentmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Incident Management",
    "type": "New feature",
    "products": [
      "ITSM",
      "CSM",
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=working-incident-record-form&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Form channel for response templates</a></strong></p>\n<p>The form channel is added to the Need more information and Schedule meeting response templates. The channel enables you to access the response templates from the incident record, copy the response templates texts to the clipboard from the incident form to be shared in the work notes, comments or other communication channels.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-incidentmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Connected Workforce Core",
    "type": "Activation Information",
    "products": [
      "Core Platform",
      "FSM",
      "OTSM"
    ],
    "details": "<p>ICW Core is automatically installed when you install Industrial Connected Workforce Mobile Experience as part of the ICW Foundational SKU. You can request ICW Mobile from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialconnectedworkforcecore-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Connected Workforce Mobile Experience",
    "type": "New feature",
    "products": [
      "FSM",
      "WSD",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=using-icw-mobile-experience&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Mobile Task Management</a></strong></p>\n<p>Manage all task‑related activity from intuitive mobile views tailored for shop floor workers to improve visibility and responsiveness during operations.</p>\n<p>Clear status indicators and color cues help in identifying critical or overdue tasks, improving responsiveness during operations.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialconnectedworkforcemobileexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Connected Workforce Mobile Experience",
    "type": "New feature",
    "products": [
      "FSM",
      "ITOM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=standards-hub-mobile&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Mobile Standards Hub</a></strong></p>\n<p>Browse, request, and access published standards tailored to your functional location using the mobile Standards Hub.</p>\n<p>Embedded rating and feedback mechanisms support continuous improvement of documentation and frontline usability.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialconnectedworkforcemobileexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Connected Workforce Mobile Experience",
    "type": "New feature",
    "products": [
      "FSM",
      "ITOM",
      "UI",
      "WSD"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-action-mobile&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Intuitive and minimal input actions</a></strong></p>\n<p>Create actions, deviations, breakdowns, and follow‑up tasks directly from the mobile interface with minimal input to accelerate issue reporting.</p>\n<p>Integrated escalation workflows help operators move seamlessly from detection to analysis, such as starting an RCA directly from a deviation.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialconnectedworkforcemobileexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Connected Workforce Mobile Experience",
    "type": "New feature",
    "products": [
      "FSM",
      "OTSM",
      "HRSD",
      "WSD"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=execute-igt-icw-mobile&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Guided Task Execution</a></strong></p>\n<p>Execute guided tasks on the shop floor by following step‑by‑step instructions with embedded media, validation checks, and barcode or QR scanning.</p>\n<p>Skill validation helps prevent unauthorized execution of tasks that require specific certifications or training.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialconnectedworkforcemobileexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Connected Workforce Mobile Experience",
    "type": "New feature",
    "products": [
      "FSM",
      "UI",
      "ITOM",
      "App Engine"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-now-mobile-agent-application-icw-mobile&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Performance & Reliability Enhancements</a></strong></p>\n<p>Continue working in low‑connectivity environments with offline caching that saves your progress and synchronizes updates when connectivity returns.</p>\n<p>Optimized load times and reduced latency to create a smooth user experience across industrial environments.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialconnectedworkforcemobileexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Connected Workforce Mobile Experience",
    "type": "New feature",
    "products": [
      "ITOM",
      "FSM",
      "ITSM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=icw-mobile-report-safety-incident&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Report any safety related incident</a></strong></p>\n<p>Report, triage, and investigate health and safety‑related incidents directly from the mobile interface through ICW integration with Health and Safety.</p>\n<p>You can create Industrial Standards based on a safety incident that helps you maintain safe working environment.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialconnectedworkforcemobileexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Connected Workforce Mobile Experience",
    "type": "Activation Information",
    "products": [
      "OTSM",
      "ITOM",
      "FSM",
      "UI",
      "Core Platform",
      "WSD",
      "HRSD"
    ],
    "details": "<p>Install Industrial Connected Workforce Mobile Experience as part of the ICW Foundational SKU. Install ICW Mobile by requesting it from the ServiceNow Store. The application is optimized for latest iOS and Android devices and may require a Mobile UI Framework dependency provided by the ICW suite. You can request ICW Mobile from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialconnectedworkforcemobileexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Guided Tasks",
    "type": "New feature",
    "products": [
      "FSM",
      "ITOM",
      "WSD"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=task-authoring-configuration-settings&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Authoring Guided Tasks</a></strong></p>\n<p>Design structured workflows with sections, steps, assessments, and conditional paths by using an authoring interface that enforces consistency and quality.</p>\n<p>Built‑in rules help to maintain consistency by following correct steps sequence, naming, and safety requirements. Authors can preview the guided tasks’ end‑user experience before publishing.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialguidedtasks-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Guided Tasks",
    "type": "New feature",
    "products": [
      "OTSM",
      "FSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=scoring-industrial-guided-tasks&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Assessment-driven scoring, evaluation, and execution</a></strong></p>\n<p>Capture and evaluate task data by using multiple assessment types, including numeric inputs, selections, measurements, and conditional evaluations. Supports multiple assessment types including numeric inputs, selections, measurements, and conditional evaluations.</p>\n<p>Automatic scoring determines the following task outcomes based on configured thresholds: Successful, Unsuccessful, or Not Scored. Assessment data is captured for reporting, quality control, and continuous improvement.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialguidedtasks-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Guided Tasks",
    "type": "New feature",
    "products": [
      "FSM",
      "ITOM",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=industrial-guided-tasks-reference&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Automation and Smart Actions</a></strong></p>\n<p>Reduce manual intervention by configuring automation features that trigger follow‑up work, standard tasks, or actions based on assessment results.</p>\n<p>Complex logic can route execution flows, creating dynamic experiences that adapt to operator input. This reduces manual intervention and maintains consistent responses to equipment or process conditions. You need an additional plugin to use this functionality.</p>\n<p>Template capabilities for duplication of task structures.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialguidedtasks-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Guided Tasks",
    "type": "New feature",
    "products": [
      "FSM",
      "UI",
      "ITAM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=execute-igt-icw-mobile&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Easy accessibility and execution</a></strong></p>\n<p>Execute guided tasks through a clean step‑by‑step interface that supports images, instructions, validations, and attachments for accurate task completion.</p>\n<p>Integrated barcode or QR scanning helps identify parts, equipment, or materials during task execution.</p>\n<p>Offline access to guided tasks in the ICW mobile application. Offline mode minimizes interruption in your work, even in low‑connectivity industrial environments.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialguidedtasks-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Guided Tasks",
    "type": "New feature",
    "products": [
      "FSM",
      "IRM",
      "ITOM",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=industrial-guided-task-life-cycle&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">IGT Lifecycle Governance</a></strong></p>\n<p>Govern your guided tasks through separated life-cycle states that provide clearer oversight and a better audit trail.</p>\n<p>Review and approval workflows helps in maintaining quality, safety, and operational standards of guided tasks before release. Historical versions are archived for audits, root cause analysis (RCA) investigations, and long‑term reporting.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialguidedtasks-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Guided Tasks",
    "type": "New feature",
    "products": [
      "OTSM",
      "ITOM",
      "Core Platform",
      "FSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=creating-standards-from-templates&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create standards using templates</a></strong></p>\n<p>Accelerate guided task creation by duplicating existing tasks or using them as reusable templates.</p>\n<p>Structural components such as steps, assessments, and conditional logic can be reused across multiple workflows, which maintains consistency while reducing authoring time.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialguidedtasks-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Guided Tasks",
    "type": "New feature",
    "products": [
      "FSM",
      "OTSM",
      "Core Platform",
      "UI"
    ],
    "details": "<p>Industrial Guided Tasks is automatically installed when you install Industrial Connected Workforce Mobile Experience as part of the ICW Foundational SKU. You can request ICW Mobile from the ServiceNow Store.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialguidedtasks-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Process Manager",
    "type": "New feature",
    "products": [
      "ITOM",
      "CMDB",
      "ITAM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=automate-mappings-between-ot-assets-and-equipment-model-entity&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Discovered subnets supported by the AMAZING feature</a></strong></p>\n<p>Use the AMAZING feature, which uses discovered subnets, to identify OT devices and assign them to the correct equipment model entity during OT subnet mapping.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialprocessmanager-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Process Manager",
    "type": "New feature",
    "products": [
      "ITOM",
      "CMDB",
      "ITAM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=map-ot-devices-in-iw&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Map OT devices from the Equipment Model Manager</a></strong></p>\n<p>Map OT devices to equipment model entities using the <strong>Unmapped OT Devices</strong> and the <strong>All Devices</strong> tabs in the Equipment Model Manager of the Industrial Workspace.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialprocessmanager-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Process Manager",
    "type": "New feature",
    "products": [
      "ITOM",
      "CMDB",
      "CSDM",
      "ITAM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-location-hierarchy-isa&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Generate a location hierarchy</a></strong></p>\n<p>Generate a complete location hierarchy for an ISA equipment model entity tree when no locations exist to establish location references that match the ISA hierarchy.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialprocessmanager-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Process Manager",
    "type": "New feature",
    "products": [
      "ITOM",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=utilizing-ot-network-map&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Use the OT Network Map to visualize your OT network</a></strong></p>\n<p>Visualize your OT network, subnets, and device-to-device connections with the OT Network Map in the Industrial Workspace.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialprocessmanager-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Process Manager",
    "type": "Change",
    "products": [
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=granular-admin-roles&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Admin role dependency</a></strong></p>\n<p>Several new granular admin roles were added to enable developers to complete administrative configuration tasks without requiring the full admin role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialprocessmanager-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Standards",
    "type": "New feature",
    "products": [
      "ITOM",
      "FSM",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=industrial-standards-library&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Standards hub</a></strong></p>\n<p>Browse and compare standards using an upgraded hub that provides tile and list views with filters for state, scope, category, functional location, and equipment model.</p>\n<p>Users can quickly compare similar standards and see linked tasks, skills, and knowledge.</p>\n<p>Access policies differentiate enterprise and site standards to help prevent misapplication.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialstandards-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Standards",
    "type": "New feature",
    "products": [
      "FSM",
      "ITOM",
      "Event Management"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=scheduling-standards&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Scheduling</a></strong></p>\n<p>Generate recurring work from standards by configuring daily, weekly, monthly, and custom scheduling patterns to maintain a consistent operational cadence.</p>\n<p>A system property (for example, an offset in minutes) lets admins align task creation with shift handovers or production calendar boundaries.</p>\n<p>Runtime tracing improves visibility into created tasks, their status, and exceptions.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialstandards-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Standards",
    "type": "New feature",
    "products": [
      "FSM",
      "WSD",
      "HRSD"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=skill-based-task-management&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Skill-based task management</a></strong></p>\n<p>Define required skills or certifications within standards to ensure that only qualified operators execute safety‑critical tasks. Supervisors can request waivers or alternative routing when skills are missing.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialstandards-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Standards",
    "type": "Activation Information",
    "products": [
      "FSM",
      "ITOM",
      "UI"
    ],
    "details": "<p>Industrial Standards is automatically installed when you install Industrial Connected Workforce Mobile Experience as part of the ICW Foundational SKU. You can request ICW Mobile from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-industrialstandards-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Standards",
    "type": "Important Information for upgrading",
    "products": [
      "Core Platform",
      "ITOM",
      "CMDB"
    ],
    "details": "<p>Log rotation is automatically enabled for the Replication Payload Error [idr\\_replication\\_payload\\_error] table after the upgrade. By default, the log rotation schedule is composed of seven shards, with five days for each shard. All log entries in this table that are created before the upgrade are automatically truncated.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-instancedatareplication-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Industrial Standards",
    "type": "New feature",
    "products": [
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=test-IDR-connectivity&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">IDR Diagnostics page improvements</a></strong></p>\n<p>Access detailed test descriptions and results on the redesigned IDR Diagnostics page.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-instancedatareplication-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Instance Scan",
    "type": "New feature",
    "products": [
      "Core Platform",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=hs-parallel-scan&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Parallel execution of scans</a></strong></p>\n<p>Enable parallel execution of scans instead of sequential processing, eliminating bottlenecks and significantly reducing completion times.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-instancescan-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Instance Scan",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=hs-getting-started&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">New role to write checks in Instance Scan</a></strong></p>\n<p>Experience the new scan\\_check\\_writer role that has the privilege to write checks on the scan\\_check table.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-instancescan-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Instance Scan",
    "type": "New feature",
    "products": [
      "AI Platform",
      "Developers",
      "SDK"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=hs-is-ide&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Instance Scan extension for IDE</a></strong></p>\n<p>You can now access Instance Scan from integrated development environment (IDE) on the ServiceNow AI Platform.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-instancescan-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Instance Scan",
    "type": "Change",
    "products": [
      "Core Platform",
      "Developers",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=hs-sys-properties&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Scan execution of inactive and base system checks</a></strong></p>\n<p>You can now execute scans on inactive checks by setting the glide.scan.inactive\\_records property to true. Add and enable glide.scan.base\\_system\\_records property to execute scans on base system checks.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-instancescan-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Integration Hub",
    "type": "New feature",
    "products": [
      "Integrations",
      "ITOM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=direct-kafka&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Use Direct Kafka to integrate your on-premise ServiceNow instance with your local Kafka environment</a></strong></p>\n<p>Configure a custom Kafka connection to enable your on-premise instance to connect directly to your local Kafka environment.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-integrationhub-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Integration Hub",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=manage-topic-alias&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create topic aliases for Stream Connect topics</a></strong></p>\n<p>Use topic aliases to simplify topic management in Stream Connect. A topic alias is a unique topic name that can be connected to any underlying Hermes or Direct Kafka topic. A topic alias can be moved to different instances and, wherever they’re moved, connected to an underlying topic.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-integrationhub-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Integration Hub",
    "type": "New feature",
    "products": [
      "Integrations",
      "ITOM",
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=stream-connect-dashboard&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Stream Connect Dashboard updates</a></strong></p>\n<ul>\n<li>The Topics menu displays topic aliases, Hermes topics, and Direct Kafka topics.</li>\n<li>The <strong>Data usage</strong> tab shows data for the Hermes cluster or the Direct Kafka cluster. Use the <strong>Kafka Cluster</strong> list to select which cluster data to display.</li>\n<li>The Consumers and Producers menus reference topic aliases instead of Hermes topics.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-integrationhub-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Integration Hub",
    "type": "New feature",
    "products": [
      "Integrations",
      "ITOM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=remote-process-sync-dashboard&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">View the Remote Process Sync Dashboard</a></strong></p>\n<p>View detailed statistics and monitor the health of your Remote Process Sync (RPS) integrations. The Remote Process Sync Dashboard provides real-time visibility into key metrics, including records processed, queue sizes, processing times, and system status. Use this dashboard to identify issues, track performance trends, and promote smooth operation of your RPS integrations.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-integrationhub-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Integration Hub",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITOM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=MID-hermes-API&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Produce messages to Hermes via a MID Server</a></strong></p>\n<p>Send message payloads to Hermes with MID script includes.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-integrationhub-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Integration Hub",
    "type": "New feature",
    "products": [
      "Integrations",
      "ITOM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=direct-kafka-usage-metrics&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">View usage metrics for Direct Kafka</a></strong></p>\n<p>Track data usage between your instance and Direct Kafka systems. The Direct Kafka Usage metrics table provides administrators with visibility into data transfer volumes for bytes produced and consumed. View metrics aggregated by hour, day, or month at the cluster and topic level. Usage records are automatically retained for 13 months.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-integrationhub-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Integration Hub",
    "type": "New feature",
    "products": [
      "Integrations",
      "Core Platform",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=stream-connect-apache-kafka-roles&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Use the read-only role for Stream Connect</a></strong></p>\n<p>Use the new read-only role for Stream Connect to grant users view-only access to Stream Connect resources. Users with this role can view Stream Connect configurations and runtime statistics across all related modules, but can’t create, modify, or delete any Stream Connect settings.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-integrationhub-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Integration Hub",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=producer-statistics&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">View logs for Stream Connect producers</a></strong></p>\n<p>Get detailed log information for producers in the Stream Connect logs. Use the <strong>glide.ih.kafka.producer.message\\_bytes\\_to\\_log</strong> property to specify how much of the message to display in the logs.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-integrationhub-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Integration Hub",
    "type": "New feature",
    "products": [
      "Integrations",
      "ITOM",
      "Core Platform",
      "Event Management"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=sc-alert-properties&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure alert thresholds for undelivered messages in Stream Connect</a></strong></p>\n<p>Set alert thresholds for undelivered messages based on how long a topic has gone without receiving new messages. Use this configuration to trigger INFO, WARNING, or CRITICAL alerts when message delivery stops for a specified period.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-integrationhub-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Integration Hub",
    "type": "New feature",
    "products": [
      "Integrations",
      "ITOM",
      "Core Platform",
      "Event Management"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=sc-alert-properties&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure alert thresholds for unprocessed messages in Stream Connect</a></strong></p>\n<p>Set alert thresholds for messages that remain unprocessed in a topic. You can trigger alerts based on how long messages sit in a topic without being consumed, helping to identify lagging or failing consumers.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-integrationhub-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Integration Hub",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITOM",
      "Developers",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-script-consumer&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Get metadata information for Stream Connect consumers</a></strong></p>\n<p>View the partition, offset, datacenter ID, and timestamp epoch for the script consumer and Kafka Message trigger.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-integrationhub-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Integration Hub",
    "type": "New feature",
    "products": [
      "Integrations",
      "Core Platform",
      "Developers",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-script-consumer&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">View message timestamps in the Stream Connect script consumer</a></strong></p>\n<p>Get the message timestamp in the script consumer as a UTC time-zone string. You can use the UTC time-zone string to convert the timestamp to a <strong>GlideDateTime</strong> object.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-integrationhub-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Integration Hub",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Integrations",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=getting-started-with-remote-process-sync&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Use an error subflow template to create your own error subflows in Remote Process Sync</a></strong></p>\n<p>Copy and modify the RPS Error Subflow Template to create error subflows. The template enables you to select notification methods for when the Inbound and Outbound States are errored.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-integrationhub-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Integration Hub",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITOM",
      "Integrations"
    ],
    "details": "<p><strong>Specify attachment details in Remote Process Sync actions</strong></p>\n<p>Specify the max attachment size and allowed attachment extensions in the <a href=\"https://www.servicenow.com/docs/access?context=identify-new-attachments-action&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Identify New Attachments action</a> and the <a href=\"https://www.servicenow.com/docs/access?context=get-attachment-metadata-local-record-action&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Get Attachment Metadata for Local Record action</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-integrationhub-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Integration Hub",
    "type": "New feature",
    "products": [
      "Integrations",
      "Core Platform",
      "ITOM"
    ],
    "details": "<p><strong>Use a new retry policy for Remote Process Sync actions</strong></p>\n<p>Retry failed requests at specified intervals with the RPS Push Attachment Policy. This policy works with the <a href=\"https://www.servicenow.com/docs/access?context=identify-new-attachments-action&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Identify New Attachments action</a> and the <a href=\"https://www.servicenow.com/docs/access?context=get-attachment-metadata-local-record-action&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Get Attachment Metadata for Local Record action</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-integrationhub-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Integration Hub",
    "type": "New feature",
    "products": [
      "Integrations",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=hla-data-input-kafka-credentials&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">SASL authentication support for Apache Kafka connections</a></strong></p>\n<p>Configure SASL authentication for your Apache Kafka connections with support for SASL\\_SSL and SASL\\_PLAINTEXT security protocols. Kafka credentials now support multiple SASL mechanisms: PLAIN- SCRAM-SHA-256, SCRAM-SHA-512.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-integrationhub-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Intelligence for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "AI Search",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=ra-configure-contextual-filtering&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Recommended Actions – Configure contextual filtering of AI search results</a></strong></p>\n<p>Enhance search accuracy by ensuring results are contextually relevant to the record being viewed by the agent. Search results are dynamically filtered based on contextual information passed through additional context parameters. To configure the contextual filtering of the Search results, enable the dynamic filter for a search source in a Search profile and then create the AisDynamicFilter implementation for the source which holds the filtering conditions.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-intelligenceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Intelligence for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "UI",
      "AI Search",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=ra-csm-create-context-inputs&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Recommended Actions – Support for mandatory Contextual Inputs</a></strong></p>\n<p>As an RA author, you can mark specific context inputs as mandatory by selecting the Mandatory check box in the Context Inputs form. When one or more context inputs are configured as mandatory, you must set the values for these contextual inputs directly on Recommended Actions component on the record page in the UI Builder for the recommendations to be generated.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-intelligenceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Intelligence for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "Now Assist",
      "Developers",
      "Core Platform",
      "AI Search"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=ra-csm-installed-components&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Recommended Actions - Manage and conﬁgure metadata with delegated developer approach</a></strong></p>\n<p>Grant granular admin users delegated developer privileges and required roles to manage and configure metadata. This includes the Manage update set permission, domain\\_picker role, and metadata\\_scope\\_viewer role for viewing and modifying the application scope of metadata records.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-intelligenceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Intelligence for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "Now Assist",
      "AI Platform",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=interaction-wrapup-ai-generated&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">AI interaction wrap-up</a></strong></p>\n<p>Provides agents with AI assistance during the interaction wrap-up period. This feature generates wrap-up content for interaction records, such as the wrap-up code and notes.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-intelligenceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Intelligence for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=process-opt-csm&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Process mining - Pre‑configured templates for CSM Process Mining Projects</a></strong></p>\n<p>Select pre‑configured templates from the Process Mining Content Pack for CSM to quickly set up customer service case projects with default settings already applied. These templates help accelerate project creation by providing standardized configurations tailored for common Customer Service Management scenarios.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-intelligenceforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ITOM Visibility",
    "type": "New feature",
    "products": [
      "ITOM",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=powershell-remoting&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">PowerShell 7 support for Discovery</a></strong></p>\n<p>Discovery now supports PowerShell 7, while maintaining backward compatibility with PowerShell 5.1. This update enhances security, accelerates onboarding, and reduces deployment blockers through improved runtime detection and comprehensive test coverage.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-itomvisibility-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ITOM Visibility",
    "type": "New feature",
    "products": [
      "ITOM",
      "SecOps",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=code-sign-disco-probes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Discovery on Code Signing instances</a></strong></p>\n<p>Discovery now enforces code signing for probes, parameters, and sensors to guarantee authenticity, integrity, and secure execution on MID Servers. This update blocks unsigned or tampered payloads, provides signature validation, and strengthens compliance by helping prevent audit gaps without impacting discovery performance.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-itomvisibility-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ITOM Visibility",
    "type": "New feature",
    "products": [
      "ITOM",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=disco-generic-attributes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Discovery generic attributes</a></strong></p>\n<p>Enhance Configuration Management Database (CMDB) data accuracy with new Discovery capabilities that auto-populate non-discoverable attributes using a schedule-based mechanism. This update simplifies configuration item (CI) management by propagating generic attribute values across schedules and ranges, reducing manual effort and improving usability.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-itomvisibility-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ITOM Visibility",
    "type": "New feature",
    "products": [
      "ITOM",
      "CMDB",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=mapping-k8s-sm-kva&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Use Kubernetes Visibility Agent (KVA) and Service Mapping to create service maps for extended services beyond Kubernetes</a></strong></p>\n<p>Service Mapping complements Kubernetes Visibility Agent (KVA) capabilities to map services that include Kubernetes and all related service resources beyond the Kubernetes environment. Install the latest version of Kubernetes Visibility Agent (KVA) to detect the latest changes in your Kubernetes cluster and run Service Mapping to have an up to date visualization of your services across Kubernetes and related resources.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-itomvisibility-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ITOM Visibility",
    "type": "New feature",
    "products": [
      "ITOM",
      "CMDB",
      "CSDM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=quick-start-tests-service-mapping&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Quick start tests for Service Mapping</a></strong></p>\n<p>After upgrades and deployments of new applications or integrations, run quick start tests to verify that Service Mapping works as expected. If you customized Service Mapping, copy the quick start tests and configure them for your customizations.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-itomvisibility-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ITOM Visibility",
    "type": "Deprecation",
    "products": [
      "ITOM",
      "CMDB",
      "CSDM"
    ],
    "details": "<p>Starting with the Zurich release, Cloud Discovery Workspace is being prepared for future deprecation. It’s hidden and no longer activated on new instances but continues to be supported. Discovery Admin Workspace provides the latest experience for this functionality. For details, see the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0867184\" target=\"_blank\" rel=\"noopener noreferrer\">Application/Plugin Deprecation Process KB0867184</a> article in the Now Support knowledge base.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-itomvisibility-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Key Management",
    "type": "Important Information for upgrading",
    "products": [
      "Core Platform",
      "SecOps"
    ],
    "details": "<p>In pre-Zurich releases, the GlideEncrypter API used the three-key Triple Data Encryption Standard (3DES) encryption standard, which <a href=\"https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-131Ar2.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">NIST 800-131A Rev 2</a> has recommended against using after 2023. The following changes are taking place in the Australia release in preparation for a full deprecation of GlideEncrypter/3DES in the future:</p>\n<p>    - New Australia instances can’t use GlideEncrypter. All base system scripts have been changed to use alternative encryption processes.</p>\n<p>    - if you’re upgrading your Australia instances, you can still GlideEncrypter, which has been updated to use AES256-GCM encryption via the Key Management Framework.</p>\n<p>    - Learn more about 3DES deprecation in <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB1704481\" target=\"_blank\" rel=\"noopener noreferrer\">KB1704481</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-keymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Key Management",
    "type": "New feature",
    "products": [
      "Core Platform",
      "SecOps",
      "Developers",
      "SDK"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c_GlideDigestScopedAPI&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Added SHA512 support for message digests</a></strong></p>\n<p>GlideDigest has been updated to allow creation and verification of message digests using the SHA512 cryptographic hash function.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-keymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Key Management",
    "type": "New feature",
    "products": [
      "Core Platform",
      "SecOps"
    ],
    "details": "<p><strong>Offline key exchange to share module keys between instances</strong></p>\n<p>Admins can share module keys between instances offline to facilitate instance clones between on-premise instances using KMF.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-keymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Key Management",
    "type": "New feature",
    "products": [
      "Core Platform",
      "SecOps",
      "Developers",
      "SDK"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=KMFCryptoOperationBothAPI&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Sign and verify JSON web tokens (JWT) through KMFCryptoOperation</a></strong></p>\n<p>The signing and verification processes for JWTs are now integrated as operation types in the existing KMFCryptoOperation class.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-keymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Key Management",
    "type": "New feature",
    "products": [
      "Core Platform",
      "SecOps",
      "ITOM"
    ],
    "details": "<p><strong>Centralized Crypto Management console</strong></p>\n<p>Use the new Crypto Management Console to streamline and track the certificate management lifecycle. The new console scans your instance for certificates and displays their details in a central location,</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-keymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Key Management",
    "type": "New feature",
    "products": [
      "Core Platform",
      "SecOps"
    ],
    "details": "<p><strong>Clone and restore support for on-premise instances</strong></p>\n<p>Support for cloning and restoring on-premise instances. Support has also been added from migrating a commercial instance to on-premise instances, and vice-versa.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-keymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Key Management",
    "type": "New feature",
    "products": [
      "SecOps",
      "Core Platform",
      "ITOM"
    ],
    "details": "<p><strong>Certificate Revocation List (CRL) validation support</strong></p>\n<p>ServiceNow now supports Certificate Revocation List (CRL) validation for certificate revocation checks as an alternative to Online Certificate Status Protocol (OCSP), with automatic fallback when OCSP is unavailable.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-keymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Key Management",
    "type": "Change",
    "products": [
      "Core Platform",
      "SecOps",
      "IRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-cryptographic-module&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Updated workflow for creating cryptographic modules</a></strong></p>\n<p>Use the streamlined workflow designed for faster, easier creation of cryptographic modules.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-keymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Key Management",
    "type": "Change",
    "products": [
      "SecOps",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=GlideSecurityUtilsScopedAPI&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">SecurityUtils Enhancements</a></strong></p>\n<p>The SecurityUtils API has been enhanced to help prevent cross-site scripting attacks, including methods to sanitize and escape input</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-keymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Key Management",
    "type": "Activation Information",
    "products": [
      "Core Platform",
      "SecOps"
    ],
    "details": "<p>The Platform Encryption subscription bundle is a group commercial entitlement that includes Field Encryption Enterprise and Cloud Encryption.</p>\n<p>Field Encryption Enterprise is the unlimited license of Field Encryption. The Enterprise plugin is available with the activation of the com.glide.now.platform.encryption plugin. For details, see <a href=\"https://www.servicenow.com/docs/access?context=encryption-sku&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Encryption and Key Management subscription bundle</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-keymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Knowledge Center",
    "type": "New feature",
    "products": [
      "CSM",
      "HRSD",
      "ITSM",
      "AI Search"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=search-knowledge-article&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Search knowledge article</a></strong></p>\n<p>Build a complete and accurate knowledge base, focus on continuous improvement by discovering and filling content gaps, removing redundant information, and optimizing existing articles for better quality.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-knowledgecenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Legacy Application Manager",
    "type": "Important Information for upgrading",
    "products": [
      "Core Platform",
      "App Engine"
    ],
    "details": "<p>Starting with Australia release, Legacy Application Manager is being prepared for future deprecation. It will be hidden but will continue to be supported. For details, see the <a href=\"https://hi.service-now.com/kb_view.do?sysparm_article=KB0867184\" target=\"_blank\" rel=\"noopener noreferrer\">Application/Plugin Deprecation Process KB0867184</a> article in the Now Support Knowledge Base.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-legacyapplicationmanager-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Localization Workspace",
    "type": "New feature",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=lw-language-setup&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Guided tours in the Localization Workspace interface</a></strong></p>\n<p>Leverage new guided tours that assist users with setting up language providers and language groups.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-localizationworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Localization Workspace",
    "type": "New feature",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=lw-language-asset-management&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Language Asset Management</a></strong></p>\n<p>Upload, store, and edit multiple glossaries in the new <strong>Language Asset Management</strong> tab of Localization Workspace. Each glossary can include terms translated into multiple languages. In the Australia release, Language Asset Management provides upload, storage, and editing functions only.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-localizationworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Localization Workspace",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=lw-status-synchronization&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Cancel translation requests, delete draft requests, and review archived requests from the landing page</a></strong></p>\n<p>Monitor and control your requests on the landing page with functions to cancel translation requests, delete draft requests, and review archived requests.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-localizationworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Localization Workspace",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=lw-status-synchronization&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">View the translation method from the translation request summary</a></strong></p>\n<p>View the translation method, such as TMS or machine translation, from the translation request summary. The summary is available from the My Requests list on the landing page.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-localizationworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Localization Workspace",
    "type": "Change",
    "products": [
      "Core Platform",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=lw-estimate&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Use intelligent due date suggestions based on the size and scope of your requests</a></strong></p>\n<p>Use intelligent due date suggestions, which provide an estimated completion date for your translations, based on the size and scope of your translation request. You can accept the suggested due date when submitting your request.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-localizationworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Manufacturing Commercial Operations",
    "type": "New feature",
    "products": [
      "CSM",
      "FSM",
      "Now Assist",
      "AI Search"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=mco-product-non-conformances&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">MCO product non-conformances</a></strong></p>\n<p>It’s a unified, AI-assisted life-cycle management from submission to resolution, helping teams capture quality inputs, identify duplicates early, take faster informed actions, and maintain control throughout.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-manufacturingcommercialoperations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Manufacturing Commercial Operations",
    "type": "New feature",
    "products": [
      "CSM",
      "FSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=mco-report-an-issue&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">MCO report an issue</a></strong></p>\n<p>Dealers can submit product non-conformance issues through the dealer portal.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-manufacturingcommercialoperations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Manufacturing Commercial Operations",
    "type": "New feature",
    "products": [
      "CSM",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=mco-playbook-create-non-conformance&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">MCO playbook create non-conformance</a></strong></p>\n<p>It’s a playbook-driven resolution workflow that provides context-aware recommendations based on historical data. AI guidance identifies correction actions early, reducing manual analysis and enabling focus on validation, execution, and closure.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-manufacturingcommercialoperations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Manufacturing Commercial Operations",
    "type": "New feature",
    "products": [
      "CSM",
      "FSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=recall-claims&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Recall claims</a></strong></p>\n<p>Recall management data model for parts availability and parts groups enable OEMs to manage complex product recalls by structuring parts, assets, and customer data for identification, grouping, tracking, and allocation across recall phases.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-manufacturingcommercialoperations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "MID Server",
    "type": "Important Information for upgrading",
    "products": [
      "Core Platform",
      "ITOM",
      "CMDB",
      "Event Management",
      "Integrations"
    ],
    "details": "<p>For the latest MID Server system requirements, see <a href=\"https://www.servicenow.com/docs/access?context=r_MIDServerSystemRequirements&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">MID Server system requirements</a>. The minimum JRE version supported is 17.0.10 and the recommended version is 21.0.7.</p>\n<p>If you have installed your own JRE, the upgrade process takes the following actions to verify that the MID Server uses a supported JRE:</p>\n<ul>\n<li>If a MID Server is using an unsupported version of the JRE when it upgrades, the upgrade process displays a warning message with the minimum and recommended JRE version.</li>\n<li>If a supported JRE is running on the MID Server host, the upgraded MID Server uses that version.</li>\n</ul>\n<p>All MID Server host machines require access to the download site at install.service-now.com to enable auto-upgrades. For additional details, read how the system manages <a href=\"https://www.servicenow.com/docs/access?context=c_UpgradeAndTestMIDServer&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">MID Server upgrades</a>.</p>\n<p>Only one Windows MID Server service is permitted according to the executable path. Upgraded Windows MID Servers that have multiple services pointing to the same installation folder can’t start. See <a href=\"https://www.servicenow.com/docs/access?context=mid-startup-fails&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">MID Server fails to start</a> for more information.</p>\n<p>For more information about MID Server upgrades, see the following topics:</p>\n<ul>\n<li><a href=\"https://www.servicenow.com/docs/access?context=c_UpgradeAndTestMIDServer&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">MID Server pre-upgrade check</a>: Describes how the AutoUpgrade monitor tests the ability of the MID Server to upgrade on your system before the actual upgrade.</li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=c_UpgradeAndTestMIDServer&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Upgrade the MID Server manually</a>: Describes how to upgrade your MID Servers manually.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-midserver-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "MID Server",
    "type": "Change",
    "products": [
      "ITOM",
      "Core Platform",
      "ITAM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=powershell-remoting&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">MID Server supports PowerShell 7 for Discovery</a></strong></p>\n<p>MID Server now supports PowerShell 7, while maintaining backward compatibility with PowerShell 5.1. This update enhances security, accelerates onboarding, and reduces deployment blockers through improved runtime detection and comprehensive test coverage.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-midserver-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "MID Server",
    "type": "Change",
    "products": [
      "Core Platform",
      "ITOM",
      "SecOps",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=t_ConfigureTheMIDServerForCyberArkCCP&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure the MID Server for CyberArk CCP</a></strong></p>\n<p>MID Server's CyberArk integration adds a REST-based CCP option alongside the existing AIM SDK method, providing flexible, interchangeable integration choices. This additional option can reduce dependency overhead and enables you to choose between the AIM SDK and REST-based approaches according to your requirements.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-midserver-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "MID Server",
    "type": "Change",
    "products": [
      "ITOM",
      "Core Platform",
      "Event Management"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=t_ConfigureAMIDServerCluster&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Smart Workload Manager in clusters</a></strong></p>\n<p>MID Servers in a cluster now assign jobs based on the true load, using a variety of criteria. The smart workload manager continuously evaluates the queue size, execution time, CPU usage, and buffer size. The manager then assigns tasks to ensure that no server is overloaded.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-midserver-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "MID Server",
    "type": "Change",
    "products": [
      "Core Platform",
      "ITOM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=r_MIDServerSystemRequirements&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">MID Server is bundled with Java Runtime Environment 21</a></strong></p>\n<p>MID Server comes bundled with Java Runtime Environment version 21.0.7 and requires a minimum JRE version 17.0.10. The installer automatically configures Java 21.0.7 to run in your environment. If you have installed your own JRE, see the <strong>Important information for upgrading MID Server to Australia</strong> section to ensure your JRE is compatible.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-midserver-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Mobile Platform",
    "type": "New feature",
    "products": [
      "Core Platform",
      "App Engine",
      "FSM",
      "UI",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=mobile-offline-mode&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Mobile offline enhancements</a></strong></p>\n<p>Use the following enhancements added to the mobile offline capability:</p>\n<ul>\n<li>Use the seamless online-to-offline continuity, by enabling users to start a form online, save it, and then proceed offline. While offline, users can continue viewing and editing the same data, including attachments, comments, and navigation, for uninterrupted productivity in low or no-connectivity environments. All changes automatically sync after your connection is restored.</li>\n<li>Save or submit forms offline, and reopen them later while still offline with all data fully restored.</li>\n<li>Support of offline capabilities for descriptive elements in input forms.</li>\n<li>Support of offline capabilities for input actions in input forms.</li>\n<li>Improved outbox efficiency for input forms by continually combining saved and submitted data.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-mobileplatform-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Mobile Platform",
    "type": "New feature",
    "products": [
      "Core Platform",
      "App Engine",
      "UI",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=mobile-admin-role&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Dedicated mobile\\_admin role for mobile configuration</a></strong></p>\n<p>Assign the new mobile\\_admin role to administrators who configure mobile applications, granting them precisely the permissions needed to complete their tasks. This new role helps reduce reliance on the broader admin role for controlled, secure access of your ServiceNow® account.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-mobileplatform-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Mobile Platform",
    "type": "New feature",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=pin-timeout&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configurable timing for PIN application timeout</a></strong></p>\n<p>Configure a new property to define the PIN timeout for different ServiceNow mobile apps. This configuration helps reinforce security by controlling how long users are can remain inactive before being required to reenter their PIN.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-mobileplatform-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Mobile Platform",
    "type": "New feature",
    "products": [
      "Core Platform",
      "UI",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=record-screen-script-type&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Dynamic variable support in record screens</a></strong></p>\n<p>Use the script screen field in record screens to display dynamic field values. For example, you can display translated content for dynamic variables within an email.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-mobileplatform-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Mobile Platform",
    "type": "New feature",
    "products": [
      "Now Assist",
      "UI",
      "Core Platform",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=mobile-voice-agent&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Mobile AI Voice Agent</a></strong></p>\n<p>Speak with an AI-powered voice assistant on your mobile device for real-time support. Follow along with live conversation transcripts that can also be saved or shared after the call.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-mobileplatform-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Mobile Platform",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=sg-mobile-push-notifications&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Push notifications for logged-out users</a></strong></p>\n<p>Configure push notifications to be sent to users even when they’re logged out so critical updates aren't missed.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-mobileplatform-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Mobile Platform",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=branded-landing-page&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enhanced prelogin page customization</a></strong></p>\n<p>Configure the placement of the branded landing page login button to be either in the top menu header or as a part of the web page. Integrating the button into a web page helps you to implement a secure flow that addresses issues like short authentication session lifetimes.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-mobileplatform-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Mobile Platform",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI",
      "AI Platform",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-mobile-va&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Tone in Virtual Agent</a></strong></p>\n<p>Adjust the Virtual Agent tone and response lengths in Assistant Designer.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-mobileplatform-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Mobile Platform",
    "type": "Change",
    "products": [
      "Core Platform",
      "Now Assist",
      "UI",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=using-enhanced-chat-mobile&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Suggested actions</a></strong></p>\n<p>Configure suggested actions across all agentic workflows.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-mobileplatform-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Mobile Platform",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=servicenow-lens-mobile&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Input form screen buttons</a></strong></p>\n<p>Enable up to two top action buttons on mobile device input forms that have the <strong>Screen presentation</strong> attribute.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-mobileplatform-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Mobile Platform",
    "type": "Change",
    "products": [
      "Now Assist",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-mobile-va&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Markdown support for tables in Virtual Agent</a></strong></p>\n<p>Render tables in Virtual Agent with markdown support to keep table sizing consistent.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-mobileplatform-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Mobile Platform",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=mobile-impersonate-2&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Turn off mobile impersonation</a></strong></p>\n<p>Configure the <strong>impersonationEnabled</strong> property to turn off mobile impersonation functionality. With this property, administrators can hide the impersonation option from the mobile app, regardless of assigned user roles.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-mobileplatform-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience",
    "type": "New feature",
    "products": [
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=enable-auto-focus-on-page-alerts&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enable auto-focus on page alerts new accessibility preference</a></strong></p>\n<p>Turn on the Enable auto-focus on page alerts preference to automatically move focus to the page alert. See the Accessibility section for details.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience",
    "type": "New feature",
    "products": [
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=next-experience-all-menu-editing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Next experience all menu editing</a></strong></p>\n<p>Create and edit application menus and modules directly from the Next Experience UI. Admins can configure Record, List, Dashboard, and Custom page modules from a centralized, platform-native interface.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience",
    "type": "Accessibility Information",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=enable-auto-focus-on-page-alerts&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enable auto-focus on page alerts new accessibility preference</a></strong></p>\n<p>When enabled, this preference automatically moves your keyboard focus to important alerts so you don't miss critical messages while navigating with a keyboard or screen reader.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "New feature",
    "products": [
      "UI",
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong>Activity timer</strong></p>\n<p>Tracks time spent on an activity, such as working on a record, and creates time log entries for reporting.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "New feature",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong>Card data security container</strong></p>\n<p>Provides secure, encrypted handling of card details and supports uploading and viewing sensitive documents.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "New feature",
    "products": [
      "UI",
      "Core Platform",
      "CSM"
    ],
    "details": "<p><strong>Contextual sidebar</strong></p>\n<p>Sidebar that enables users to initiate real-time collaboration through chats and calls to resolve tasks.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "New feature",
    "products": [
      "UI",
      "Developers",
      "Core Platform"
    ],
    "details": "<p><strong>Grouped button</strong></p>\n<p>Multiple related buttons presented in a unified layout. Interactions for the component are similar to that of button stateful.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "New feature",
    "products": [
      "UI",
      "Developers",
      "SDK",
      "Core Platform"
    ],
    "details": "<p><strong>Sheet</strong></p>\n<p>Container that slides in from the edge of the screen to present related content or actions, designed for mobile experiences.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "New feature",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong>Dashboard library</strong></p>\n<p>Includes all dashboards available to users. Users can filter dashboards by various criteria, such as recently opened, bookmarked, certified, by category, and ones the user owns. The Library section also lets users create dashboards. Users with analytics admin roles have an enhanced library view, enabling them to access usage data and other metadata. Admins can also deactivate, activate, or delete dashboards from this view.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "New feature",
    "products": [
      "UI",
      "Core Platform",
      "Now Assist"
    ],
    "details": "<p><strong>Data visualization library</strong></p>\n<p>Includes all data visualizations available to users. Users can filter dashboards by various criteria, such as bookmarked, certified, and ones that the user owns. The Library section also lets users create dashboards. Users with analytics admin roles have an enhanced library view, enabling them to access usage data and other metadata. Admins can also deactivate, activate, or delete dashboards from this view.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform",
      "Now Assist",
      "AI Search"
    ],
    "details": "<p><strong>Activity Stream</strong></p>\n<ul>\n<li>Enable users to edit or delete journal posts.</li>\n<li>Add a dropdown with check boxes for author names using the Posted by filter that enables users to filter posts by author, select all, or clear all. Users can also filter for any AI-generated posts.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong>Alert\t</strong></p>\n<p>Enable keyboard focus to move to the alert when it appears.</p>\n<p>Add AI variants with updated color palettes for generative AI workflows.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong>Alert list</strong></p>\n<p>Enable keyboard focus to move to the Show alerts button when the alert list appears.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong>Button</strong></p>\n<p>Add AI variants with updated color palettes for generative AI workflows.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "AI Platform",
      "Now Assist",
      "Core Platform"
    ],
    "details": "<p><strong>Button iconic</strong></p>\n<p>Add AI variants with updated color palettes for generative AI workflows.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "AI Platform",
      "Now Assist",
      "Core Platform"
    ],
    "details": "<p><strong>Button circular</strong></p>\n<p>Add AI variants with updated color palettes for generative AI workflows.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong>Card base container</strong></p>\n<p>Add AI variants with updated color palettes for generative AI workflows.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Developers",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong>Date-time</strong></p>\n<p>Customize the background color.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong>Dropdown</strong></p>\n<p>Add AI variants with updated color palettes for generative AI workflows.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Developers",
      "Core Platform"
    ],
    "details": "<p><strong>Dropdown list\t</strong></p>\n<p>The mobile version uses the sheet component instead of a popover.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong>Form</strong></p>\n<p>Place each form field label in line with the input field and adjacent to other field labels using the “Tabbed” (horizontal) layout.</p>\n<p>Highlight form fields with unsaved changes using a background color, in addition to the existing field indicator, which is now selected by default.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong>Form Templates\t</strong></p>\n<p>Show the preview option displays modal preview to help agents understand all the fields affected when they apply a particular template.</p>\n<p>Alert to inform users if a template has already been applied to a record.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Now Assist",
      "Core Platform"
    ],
    "details": "<p><strong>Highlighted value\t</strong></p>\n<p>Enter additional text to display in a popover when the highlighted value is selected.</p>\n<p>Add AI variants with updated color palettes for generative AI workflows.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong>Icon</strong></p>\n<p>Support for theme-specific custom icon uploads.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI"
    ],
    "details": "<p><strong>Input\t</strong></p>\n<p>Display persistent placeholder text to guide users in entering data in the correct format.</p>\n<p>Customize the background color.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Developers"
    ],
    "details": "<p><strong>Input password</strong></p>\n<p>Customize the background color.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Developers"
    ],
    "details": "<p><strong>Input phone</strong></p>\n<p>Customize the background color.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Developers"
    ],
    "details": "<p><strong>Input URL</strong></p>\n<p>Customize the background color.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Developers"
    ],
    "details": "<p><strong>List selector</strong></p>\n<p>Disable the selection feature for a chosen array of list selector items.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "AI Search",
      "Now Assist",
      "Core Platform"
    ],
    "details": "<p><strong>Schedule recurrence\t</strong></p>\n<p>Automatically update all recurring events in a series.</p>\n<p>Fill in event details using AI.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "App Engine",
      "Developers"
    ],
    "details": "<p><strong>Select</strong></p>\n<p>Customize the background color.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Now Assist"
    ],
    "details": "<p><strong>Split button</strong></p>\n<p>Add AI variants with updated color palettes for generative AI workflows.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform",
      "Now Assist"
    ],
    "details": "<p><strong>Tabs</strong></p>\n<p>Hide padding on the sides of each tab for horizontal (Top) tab position, to provide more room for additional tabs.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI",
      "Developers"
    ],
    "details": "<p><strong>Textarea</strong></p>\n<p>Customize the background color.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Developers",
      "Core Platform"
    ],
    "details": "<p><strong>Typeahead</strong></p>\n<p>Customize the background color.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong>Typeahead multi</strong></p>\n<p>Customize the background color</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong>Bar (including Pareto)</strong></p>\n<ul>\n<li>Show or hide a tooltip that displays on hover showing the percentage of total for a data point.</li>\n<li>Removed the display setting for Height, which can be configured in the UI Builder Styles tab.</li>\n<li>Align title horizontally to the Start, Center, or End. The default is Start.</li>\n<li>Set the line of truncation to 2 or 3 lines instead of truncating long titles after 1 line.</li>\n<li>Wrap long titles to a second line, instead of truncating. Hide the refresh action that is available to users in the More options menu.</li>\n<li>Show incomplete periods for a data snapshot indicator when selecting Metric.</li>\n<li>Enable Auto aggregation to have the most appropriate aggregation level determined based on the selected date range, applied date filters, or data availability.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong>Box plot</strong></p>\n<ul>\n<li>Align the title horizontally to the Start, Center, or End.</li>\n<li>The default is Start. Set the line of truncation to 2 or 3 lines instead of truncating long titles after 1 line.</li>\n<li>Wrap long titles to a second line, instead of truncating.</li>\n<li>Hide the refresh action that is available to users in the More options menu.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI"
    ],
    "details": "<p><strong>Bubble</strong></p>\n<ul>\n<li>Show or hide a tooltip that displays on hover showing the percentage of total for a data point.</li>\n<li>Align the title horizontally to the Start, Center, or End. The default is Start.</li>\n<li>Set the line of truncation to 2 or 3 lines instead of truncating long titles after 1 line.</li>\n<li>Wrap long titles to a second line, instead of truncating.</li>\n<li>Hide the refresh action that is available to users in the More options menu.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform",
      "Developers",
      "SDK"
    ],
    "details": "<p><strong>Dial</strong></p>\n<ul>\n<li>Align the title horizontally to the Start, Center, or End. The default is Start.</li>\n<li>Set the line of truncation to 2 or 3 lines instead of truncating long titles after 1 line.</li>\n<li>Wrap long titles to a second line, instead of truncating.</li>\n<li>Hide the refresh action that is available to users in the More options menu.</li>\n<li>Show incomplete periods for a data snapshot indicator when selecting Metric.</li>\n<li>Enable Auto aggregation to have the most appropriate aggregation level determined based on the selected date range, applied date filters, or data availability.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong>Gauge</strong></p>\n<ul>\n<li>Align the title horizontally to the Start, Center, or End. The default is Start.</li>\n<li>Set the line of truncation to 2 or 3 lines instead of truncating long titles after 1 line.</li>\n<li>Wrap long titles to a second line, instead of truncating.</li>\n<li>Hide the refresh action that is available to users in the More options menu.</li>\n<li>Show incomplete periods for a data snapshot indicator when selecting Metric.</li>\n<li>Enable Auto aggregation to have the most appropriate aggregation level determined based on the selected date range, applied date filters, or data availability.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong>Geomap</strong></p>\n<ul>\n<li>Show or hide a tooltip that displays on hover showing the percentage of total for a data point.</li>\n<li>Align the title horizontally to the Start, Center, or End. The default is Start.</li>\n<li>Set the line of truncation to 2 or 3 lines instead of truncating long titles after 1 line.</li>\n<li>Wrap long titles to a second line, instead of truncating.</li>\n<li>Hide the refresh action that is available to users in the More options menu.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong>Heatmap</strong></p>\n<ul>\n<li>Show or hide a tooltip that displays on hover showing the percentage of total for a data point.</li>\n<li>Align the title horizontally to the Start, Center, or End.</li>\n<li>The default is Start. Set the line of truncation to 2 or 3 lines instead of truncating long titles after 1 line.</li>\n<li>Wrap long titles to a second line, instead of truncating.</li>\n<li>Hide the refresh action that is available to users in the More options menu.</li>\n<li>Show incomplete periods for a data snapshot indicator when selecting Metric.</li>\n<li>Enable Auto aggregation to have the most appropriate aggregation level determined based on the selected date range, applied date filters, or data availability.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong>Indicator Scorecard</strong></p>\n<ul>\n<li>Align the title horizontally to the Start, Center, or End. The default is Start.</li>\n<li>Set the line of truncation to 2 or 3 lines instead of truncating long titles after 1 line.</li>\n<li>Wrap long titles to a second line, instead of truncating.</li>\n<li>Hide the refresh action that is available to users in the More options menu.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong>Pie/Donut</strong></p>\n<ul>\n<li>Show or hide a tooltip that displays on hover showing the percentage of total for a data point.</li>\n<li>Align the title horizontally to the Start, Center, or End. The default is Start.</li>\n<li>Set the line of truncation to 2 or 3 lines instead of truncating long titles after 1 line.</li>\n<li>Wrap long titles to a second line, instead of truncating.</li>\n<li>Hide the refresh action that is available to users in the More options menu.</li>\n<li>Show incomplete periods for a data snapshot indicator when selecting Metric.</li>\n<li>Enable Auto aggregation to have the most appropriate aggregation level determined based on the selected date range, applied date filters, or data availability.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong>Pivot table</strong></p>\n<ul>\n<li>Align the title horizontally to the Start, Center, or End. The default is Start.</li>\n<li>Set the line of truncation to 2 or 3 lines instead of truncating long titles after 1 line.</li>\n<li>Wrap long titles to a second line, instead of truncating. Hide the refresh action that is available to users in the More options menu.</li>\n<li>Show incomplete periods for a data snapshot indicator when selecting Metric.</li>\n<li>Enable Auto aggregation to have the most appropriate aggregation level determined based on the selected date range, applied date filters, or data availability.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong>Single score</strong></p>\n<ul>\n<li>Align the title horizontally to the Start, Center, or End. The default is Start.</li>\n<li>Wrap chart elements instead of truncating. Align the title horizontally to the Start, Center, or End. </li>\n<li>Default is Start. Set the line of truncation to 2 or 3 lines instead of truncating long titles after 1 line. </li>\n<li>Wrap long titles to a second line, instead of truncating. </li>\n<li>Hide the refresh action that is available to users in the More options menu.</li>\n<li> Show incomplete periods for a data snapshot indicator when selecting Metric. </li>\n<li>Enable Auto aggregation to have the most appropriate aggregation level determined based on the selected date range, applied date filters, or data availability.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong>Time series</strong></p>\n<ul>\n<li>Removed the display setting for Height, which can be configured in the UI Builder Styles tab.</li>\n<li>Show or hide a tooltip that displays on hover showing the percentage of total for a data point.</li>\n<li>Align the title horizontally to the Start, Center, or End. The default is Start.</li>\n<li>Align all chart content to the starting edge, center, or ending edge of the visualization.</li>\n<li>Set the line of truncation to 2 or 3 lines instead of truncating long titles after 1 line.</li>\n<li>Wrap long titles to a second line, instead of truncating.</li>\n<li>Hide the refresh action that is available to users in the More options menu.</li>\n<li>Show incomplete periods for a data snapshot indicator when selecting Metric.</li>\n<li>Enable Auto aggregation to have the most appropriate aggregation level determined based on the selected date range, applied date filters, or data availability.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong>Agent Workspace app shell</strong></p>\n<p>Configure alt text for a ServiceNow or customer logo button.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Deprecation",
    "products": [
      "UI"
    ],
    "details": "<p><strong>Dashboard overview template</strong></p>\n<p>Moved under \"Legacy templates\" and renamed to \"Deprecated - Dashboard overview.\" This template can still be used, but you should use the new \"Dashboard library\" template instead, because the Dashboard overview template is marked for eventual deprecation.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Activation Information",
    "products": [
      "Core Platform",
      "UI",
      "AI Platform",
      "Now Assist",
      "Developers"
    ],
    "details": "<p>Next Experience Components is a ServiceNow AI Platform feature that is active by default.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Components",
    "type": "Accessibility Information",
    "products": [
      "UI",
      "Now Assist",
      "Developers",
      "Core Platform"
    ],
    "details": "<p>To view Next Experience Components accessibility conformance information, refer to the components section of the <a href=\"https://horizon.servicenow.com/workspace/components\" target=\"_blank\" rel=\"noopener noreferrer\">Horizon site Components section</a>. The Overview for each component contains accessibility (A11y) information.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencecomponents-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Developer (NED) Tools",
    "type": "Change",
    "products": [
      "UI",
      "Developers"
    ],
    "details": "<p><strong>Events tab in the Next Experience Inspector</strong></p>\n<p>Exclude filters in the Events tab to filter out specific events.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencedevelopernedtools-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Next Experience Developer (NED) Tools",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI",
      "Developers"
    ],
    "details": "<p><strong>Components tab in the Next Experience Inspector</strong></p>\n<p>Use the journal section in the Components tab to get a log of state updates, property updates, actions dispatched, and actions handled.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nextexperiencedevelopernedtools-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Notifications",
    "type": "New feature",
    "products": [
      "CSM",
      "ITSM",
      "Integrations",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=personal-corporate-mailbox&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">User mailbox integration</a></strong></p>\n<p>Enable agents to integrate their personal corporate mail boxes to send and receive emails.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-notifications-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Notifications",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=granular-admin-roles-notifications&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Granular admin roles required to secure the instance</a></strong></p>\n<p>The granular admin role enables developers and administrators to complete administrative configuration tasks for Notifications without requiring the full admin role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-notifications-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Notifications",
    "type": "Change",
    "products": [
      "Core Platform",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=send-email-using-ms-graph&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Send email using Microsoft Graph</a></strong></p>\n<p>Connect Microsoft email accounts using Microsoft Graph within the ServiceNow instance for sending outbound emails.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-notifications-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Notifications",
    "type": "Change",
    "products": [
      "Core Platform",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c_InboundEmailActions&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Email threading for inbound reply email</a></strong></p>\n<p>Enable classification of inbound emails by using the thread-index header for emails originating from Microsoft or Microsoft Outlook ecosystem.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-notifications-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Notifications",
    "type": "Change",
    "products": [
      "Core Platform",
      "SecOps",
      "IRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=cle-for-email-attachments&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Column Level Encryption for email attachments</a></strong></p>\n<p>Attachments from inbound emails are now encrypted when stored in CLE-enabled tables and decrypted when sent in outbound emails, ensuring secure access without requiring scripting.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-notifications-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Notifications",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI",
      "App Engine"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=enable-notifications-logged-out-users&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enable push notifications for logged-out users</a></strong></p>\n<p>Push notifications can now be configured to be sent to users even when they are logged out, ensuring critical updates are not missed.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-notifications-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Notify",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITSM",
      "CSM",
      "Event Management"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=r_NotifyRoles&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Granular admin roles in Notify</a></strong></p>\n<p>Configure the Notify application features using the granular Notify admin role (notify\\_setup\\_admin).</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-notify-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist",
    "type": "Important Information for upgrading",
    "products": [
      "Now Assist",
      "AI Platform",
      "UI",
      "Core Platform",
      "Developers"
    ],
    "details": "<p>If you customized UI actions or other items that are associated with Now Assist skills, confirm that your customized code is updated with the new skill releases. Otherwise, certain functions might not work as expected.</p>\n<p>If you run into issues when you're upgrading a Now Assist product, see the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB1637452\" target=\"_blank\" rel=\"noopener noreferrer\">Issues and mitigation for Now Assist (Generative AI) Applications and Plugin updates KB1637452</a> article in the Now Support Knowledge Base. You might need to log in to view the article.</p>\n<p>The Australia release introduces enhanced protections for read‑only fields across the ServiceNow AI Platform. These changes include a new read\\_only\\_option field with granular control levels, including strict\\_read\\_onlyand client\\_script\\_modifiable. The changes occur in the back end and maintain backward‑compatible behavior. This update helps strengthen instance security while preserving flexibility. If you have custom client scripts that modify read‑only fields using <code>g_form.setValue()</code> or <code>g_form.clearValue()</code>, refer to the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB2718122\" target=\"_blank\" rel=\"noopener noreferrer\">KB2718122</a> article in the Now Support Knowledge Base to identify affected fields and adjust the settings.</p>\n<p>The existing access control lists (ACLs) have been updated to replace the admin role with purpose-driven granular roles within scripts or security attributes. As part of this update, the <code>getRoles()</code> API is replaced with the <code>hasRole()</code> API for authorization purposes. Additionally, all references to the admin role in the code have been substituted with the granular roles for authorization use cases. For more information, see <https://www.servicenow.com/docs/r/platform-security/granular-admin-roles.html>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassist-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist",
    "type": "New feature",
    "products": [
      "Now Assist",
      "CSM",
      "HRSD",
      "ITSM",
      "AI Search",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=merge-duplicate-articles&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Merge duplicate articles</a></strong></p>\n<p>Use Now Assist in Knowledge Management to merge selected duplicate knowledge articles into a single consolidated article, preserving references to the original sources and maintaining a high‑quality, well‑organized knowledge base.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassist-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist",
    "type": "Change",
    "products": [
      "Now Assist",
      "AI Search",
      "CSM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=conversational-help-skills&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Conversational Help</a></strong></p>\n<p>The discovery of Conversational Help Skills from Now Assist panel is no longer configured as auto-enabled.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassist-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist",
    "type": "Activation Information",
    "products": [
      "Now Assist",
      "ITSM",
      "HRSD",
      "CSM",
      "ITOM",
      "App Engine",
      "CMDB",
      "FSM",
      "WSD",
      "ITAM",
      "SecOps",
      "SPM",
      "Developers",
      "Core Platform",
      "AI Search",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-skills&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist skills</a></strong></p>\n<p>Now Assist features are available with activation of any Now Assist plugin from ServiceNow Store. The following plugins are available:</p>\n<ul>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-apo&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for APO</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=add-ai-to-custom-apps-with-now-assist-for-app-engine-enterprise&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for App Engine</a></li>\n<li>[[Placeholder link text to key bundle-itam.now-assist-asset-audit-response]](https://www.servicenow.com/docs/access?context=now-assist-asset-audit-response&family=australia&ft:locale=en-US)</li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-for-healthcare-and-life-sciences&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for Healthcare Operations</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-landing-cmdb&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for Configuration Management Database (CMDB)</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-for-cwm-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for CWM</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-for-creator-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for Creator</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-csm&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for CSM</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assisit-employee-exp&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for Employee Experience</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-ea&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for Enterprise Architecture (EA)</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-fsm&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for FSM</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-for-financial-services-operations&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for FSO</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-ham&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for Hardware Asset Management (HAM)</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-hs-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for Health and Safety</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-hrsd&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for HR Service Delivery (HRSD)</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-for-irm&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-itom&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for ITOM</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-itsm&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for IT Service Management (ITSM)</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-lsd-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for Legal Service Delivery (LSD)</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-for-psds&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for PSDS</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-for-sales-and-order-management-som&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for SOM</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-security-incident-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for Security Incident Response</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-sam&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for Software Asset Management (SAM)</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-slo&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for SLO</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-spo&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for SPO</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-spm&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for Strategic Portfolio Management (SPM)</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-spmc&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for TMT</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-tprm&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-wsd-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for Workplace Service Delivery (WSD)</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=now-assist-for-vulnerability-response-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for Vulnerability Response</a></li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassist-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Collaborative Work Management (CWM)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=generate-formula-cwm-board-now-assist&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist formula generation for CWM tasks</a></strong></p>\n<p>Generate formula columns by describing a calculation in plain language. When adding a formula column to the List view, prompt Now Assist to generate a formula by entering what you want to calculate. For example, days between start date and end date or sum of estimated hours for subtasks.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforcollaborativeworkmanagementcwm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Collaborative Work Management (CWM)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "SPM",
      "Developers",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=generate-scrum-tasks-for-stories-cwm&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist scrum task generation for stories</a></strong></p>\n<p>Generate scrum tasks from user story descriptions and acceptance criteria using Now Assist. Trigger the scrum task generation from the story form or inline from the Sprint planning view, and receive a relevant set of tasks as a starting point for your sprint planning. You can then review, edit, and add the generated tasks to fit your team's workflow.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforcollaborativeworkmanagementcwm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Configuration Management Database (CMDB)",
    "type": "Important Information for upgrading",
    "products": [
      "Now Assist",
      "CMDB"
    ],
    "details": "<p>To enable Now Assist to provide detailed descriptions of CIs and classes, you must activate the 'External Content Connectors' plugin, install the ‘ServiceNow Product Documentation’ connector, and then crawl the product documentation. For configuration instructions, see <a href=\"https://www.servicenow.com/docs/access?context=na-cmdb-skill-form-sense-config&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure the CI form contextual help skill</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforconfigurationmanagementdatabasecmdb-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Configuration Management Database (CMDB)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "CMDB",
      "AI Search",
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=na-cmdb-skill-ci-form-help&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">View CI details on CI forms</a></strong></p>\n<p>The skill answers your questions on CI classes and attributes to help you work in CI forms, dashboards, home pages, and other views on the workspace. You can submit similar queries on the Explore CI view.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforconfigurationmanagementdatabasecmdb-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Configuration Management Database (CMDB)",
    "type": "New feature",
    "products": [
      "CMDB",
      "Now Assist",
      "AI Search",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=na-cmdb-awf-search&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">CMDB searches can include relationships</a></strong></p>\n<p>Search queries can depend on relationships between CIs and can span multiple tables. For example, you might ask: \"Search for servers that depend on databases - only Linux servers running Redhat\".</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforconfigurationmanagementdatabasecmdb-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Configuration Management Database (CMDB)",
    "type": "Change",
    "products": [
      "Now Assist",
      "CMDB",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=na-cmdb-awf-ci-creator&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">New role required for the Create configuration item agentic workflow</a></strong></p>\n<p>The sn\\_cmdb\\_admin role is now required to use the 'Create configuration item' agentic workflow (was sn\\_cmdb\\_editor).</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforconfigurationmanagementdatabasecmdb-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Configuration Management Database (CMDB)",
    "type": "Change",
    "products": [
      "Now Assist",
      "CMDB",
      "AI Platform"
    ],
    "details": "<p><strong>Skills now also require the now\\_assist\\_panel\\_user role</strong></p>\n<p>AI skills that execute in the Now Assist panel now require both the cmdb\\_dedup\\_admin and now\\_assist\\_panel\\_user roles.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforconfigurationmanagementdatabasecmdb-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Configuration Management Database (CMDB)",
    "type": "Activation Information",
    "products": [
      "Now Assist",
      "CMDB"
    ],
    "details": "<p>Install Now Assist for CMDB by requesting it from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforconfigurationmanagementdatabasecmdb-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Creator",
    "type": "Important Information for upgrading",
    "products": [
      "Now Assist",
      "Developers",
      "App Engine",
      "AI Platform"
    ],
    "details": "<p>To upgrade the Build Agent application, upgrade the Now Assist for Creator application (sn\\_now\\_creator), which includes the Build Agent Pro plugin (sn\\_build\\_agent\\_pro). To upgrade the Build Agent (Trial) app, upgrade the sn\\_build\\_agent plugin.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforcreator-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Creator",
    "type": "New feature",
    "products": [
      "Now Assist",
      "Developers",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=build-agent-in-servicenow-studio&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Build Agent in ServiceNow Studio</a></strong></p>\n<p>Use Build Agent in ServiceNow Studio to create and edit full-stack applications conversationally.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforcreator-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Creator",
    "type": "New feature",
    "products": [
      "Now Assist",
      "UI",
      "Developers",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=generate-ai-modules&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Generate modules using Now Assist</a></strong></p>\n<p>Now Assist generates application modules in UI Builder workspaces using natural-language prompts. The Now Assist agent processes your prompts and generates various modules, including lists, records, URLs, scripts, dashboards, and folders.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforcreator-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Creator",
    "type": "New feature",
    "products": [
      "Now Assist",
      "Developers",
      "AI Platform",
      "SDK",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=vibe-coding-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">New vibe coding documentation</a></strong></p>\n<p>Documentation is now available that introduces vibe coding, which is a natural language approach to application development in ServiceNow, including how to get started, when to use it, and how it fits within the broader suite of AI-powered development tools.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforcreator-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Creator",
    "type": "Change",
    "products": [
      "Now Assist",
      "App Engine",
      "Developers",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=sns-app-gen-use-app-gen-skill&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Use the app generation skill to generate apps</a></strong></p>\n<p>Build Agent is the default setting for app generation in ServiceNow Studio. To continue using the app generation skill, change the setting in ServiceNow Studio.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforcreator-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Creator",
    "type": "Removed",
    "products": [
      "Now Assist",
      "Developers",
      "Core Platform",
      "Integrations",
      "AI Platform"
    ],
    "details": "<p>Spoke generation has been removed from Now Assist for Creator. See the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> website for additional information.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforcreator-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Employee Center Pro",
    "type": "Important Information for upgrading",
    "products": [
      "Now Assist",
      "HRSD",
      "WSD",
      "AI Search"
    ],
    "details": "<p>Now Assist for Employee Center Pro only provides employee or requester conversations and might require other Now Assist products to deliver AI agents or other related features.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforemployeecenterpro-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Employee Center Pro",
    "type": "New feature",
    "products": [
      "Now Assist",
      "HRSD",
      "ITSM",
      "AI Search",
      "WSD"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=manage-approvals-with-approvals-agent&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Approve your requests with AI Agent</a></strong></p>\n<p>Accelerate request approvals by automatically aggregating relevant details, validating requests against policies, and recommending approval decisions to managers.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforemployeecenterpro-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Employee Center Pro",
    "type": "New feature",
    "products": [
      "Now Assist",
      "HRSD",
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=quick-start-tests-employee-center&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Quick start tests for Employee Center</a></strong></p>\n<p>After upgrades and deployments of new applications or integrations, run quick start tests to verify that Employee Center works as expected. If you customized Employee Center, copy the quick start tests and configure them for your customizations.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforemployeecenterpro-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Enterprise Architecture (EA)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "SPM",
      "CMDB",
      "AI Platform",
      "EA"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=generate-insights-into-ba&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Business application summarization skill enhancements</a></strong></p>\n<p>Generate context-sensitive business application summaries from the following pages:</p>\n<ul>\n<li>Business capability hierarchy page: On generating a business application summary from this page, information such as the associated primary and secondary capabilities and the position in the capability hierarchy are displayed along with the general information about the business application.</li>\n<li>Application rationalization list view page: On generating a business application summary from this page, information such as the indicator scores (actual and normalized scores), and associated demand details are displayed along with the general information about the business application.</li>\n<li>Application rationalization bubble chart page: On generating a business application summary from this page, information such as x and y-axis details, and planned disposition details are displayed along with the general information about the business application.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforenterprisearchitectureea-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Enterprise Architecture (EA)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "SPM",
      "EA"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=generate-insights-ea-dashboard&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Generate insights for Enterprise Architecture Workspace dashboard widgets</a></strong></p>\n<p>Generate insights for the widgets available on the Enterprise Architecture Dashboard page using the Now Assist Explorer icon available on the header of each widget.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforenterprisearchitectureea-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Enterprise Architecture (EA)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "SPM",
      "AI Platform",
      "EA"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=compare-modeling-diagrams&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Diagram change analysis skill enhancements</a></strong></p>\n<ul>\n<li>Compare any two versions of a diagram and generate a summary of the changes.</li>\n<li>Select any version as a primary or secondary version to compare.</li>\n<li>Generate a summary for real-time changes made to the primary version while already comparing it to another diagram version.</li>\n<li>Modify diagram versions to compare using the Diagram comparison icon on the diagram comparison page.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforenterprisearchitectureea-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for IT Operations Management (ITOM)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "ITOM",
      "AI Ops",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=analyze-a-dashboard-in-service-observability&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Analyze Service Observability dashboard skill</a></strong></p>\n<p>The analyze Service Observability dashboard skill uses generative AI to summarize a single Service Observability dashboard and calls out insights found in charts. This summary helps operators quickly orient to and understand a particular dashboard. Once activated, this skill is available on all Service Observability dashboards.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforitoperationsmanagementitom-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for IT Operations Management (ITOM)",
    "type": "New feature",
    "products": [
      "ITOM",
      "Now Assist",
      "AI Ops",
      "AI Platform",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=analyze-service-health-in-service-observability&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Analyze service health</a></strong></p>\n<p>The analyze service health skill uses generative AI to analyze all available Service Observability dashboards for the selected service in the Service Operations Workspace (SOW). It generates a summary of a service’s health and calls out any found insights. Once activated, this skill is available from the header of a service record in the SOW and runs automatically in incident investigation.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforitoperationsmanagementitom-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Manufacturing Commercial Operations (MCO)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "CSM",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=mco-plan-and-execute-recall-campaign-phases-and-subphases&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">MCO plan and execute recall campaign phases and subphases</a></strong></p>\n<p>Use the plan and execute recall campaign phases and sub-phases AI agent for recall campaign planning and execution through multiple phases and sub-phases. The AI agent generates phases based on parts availability, asset location, operational readiness, and regulatory approvals, with key actions including phase plan creation, modification, recall manager approval, and impacted asset assignment.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistformanufacturingcommercialoperationsmco-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Manufacturing Commercial Operations (MCO)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "AI Search",
      "CSM",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=mco-report-an-issue&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">MCO report an issue</a></strong></p>\n<p>It’s a playbook-driven portal with AI capabilities for description refinement, field prediction, entity extraction, duplicate identification via intelligent search, and pre-submission correction details for improved resolution.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistformanufacturingcommercialoperationsmco-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Operational Sustainability Management",
    "type": "New feature",
    "products": [
      "Now Assist",
      "OTSM",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=ai-driven-document-intelligence-for-utility-invoices&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Document intelligence for utility invoices</a></strong></p>\n<p>After upgrading Now Assist for Operational Sustainability Management to version 22.0.1, the system automatically extracts unit values from invoices and updates metric data accordingly. This automation reduces manual data entry and improves data accuracy.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforoperationalsustainabilitymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Operational Sustainability Management",
    "type": "Change",
    "products": [
      "Now Assist",
      "ITOM",
      "AI Control Tower"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-skills-on-by-default&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Some Now Assist skills, agents, and agentic workflows are turned on by default</a></strong></p>\n<p>The skills are automatically available to appropriate role users for the application, such as ITIL roles on incident forms or change forms. This change simply activates the skill and does not touch the roles that may be needed to use the skill. The new default behavior works as follows:</p>\n<ul>\n<li>New customers: When you install a Now Assist product, designated skills and agentic workflows are turned on automatically.</li>\n<li>Existing customers who are upgrading (starting with Australia Early Access): Any previously unconfigured skill, agent, or agentic workflow is turned on automatically (the AI asset was never configured and turned on, then turned off again). Previously configured skills and agentic workflows that were turned on, then off, remain inactive.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforoperationalsustainabilitymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Operational Technology Service Management (OTSM)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "OTSM",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=summarize-ot-incident-now-assist&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Summarize an OT incident</a></strong></p>\n<p>Automatically summarize an OT incident using the <strong>Summarize</strong> UI action to produce a concise summary of the incident.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforoperationaltechnologyservicemanagementotsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Operational Technology Service Management (OTSM)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "OTSM",
      "UI",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=generate-resolution-notes-ot-incident&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Generate resolution notes</a></strong></p>\n<p>Automatically generate resolution notes for an OT incident using the <strong>Generate resolution notes</strong> UI action to produce a concise summary of the incident.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforoperationaltechnologyservicemanagementotsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Operational Technology Service Management (OTSM)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=agent-ot-knowledge-generator&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Generate OT KB articles</a></strong></p>\n<p>Automatically generate a KB article for an OT incident when the state of the incident is set to <strong>Resolved</strong>. The article contains the following information:</p>\n<ul>\n<li>Site</li>\n<li>OT Device</li>\n<li>Equipment model entity</li>\n<li>Summarization</li>\n<li>Resolution notes</li>\n<li>KB Base</li>\n<li>Author</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforoperationaltechnologyservicemanagementotsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Sales and Order Management for Telecommunications (SOMT)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "OTSM",
      "CRM",
      "CSM",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-move-order-somt&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Move Order Voice AI agent</a></strong></p>\n<p>Use this agent to help you create a move order capture journey by collecting details such as the customer’s name, current service location, product offering, and new service address.</p>",
    "link": "Now Assist for Sales and Order Management for Telecommunications (SOMT)",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Source-to-Pay Operations",
    "type": "New feature",
    "products": [
      "Now Assist",
      "AI Platform",
      "SPM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-spo&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for SPO</a></strong></p>\n<p><a href=\"https://www.servicenow.com/docs/access?context=analyze-sentiments-na-spo&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Analyze sentiment in procurement cases</a>Helps procurement specialists to analyze procurement case fields and live agent chats to determine the tone of the fulfiller.</p>\n<p><a href=\"https://www.servicenow.com/docs/access?context=email-response-na-spo&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Generate email responses</a>Analyze procurement case, sourcing request, purchase requisition, sourcing event, negotiation, and stretch items like procurement, sourcing, and receipt tasks to generate professional email response. This eliminates the need to manually look up information across multiple records and allows procurement specialists to handle inquiries effectively.</p>\n<p><a href=\"https://www.servicenow.com/docs/access?context=now-assist-spo-upload-sow&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Upload a Statement of Work (SOW) to request a purchase</a> Upload SOW documents to submit purchase requests. AI agents parse your documents, extract relevant data, and prepopulate your request, enabling you to focus on reviewing and approving submissions instead of manual data entry.</p>\n<p><a href=\"https://www.servicenow.com/docs/access?context=spo-help-fulfill-pr-agentic&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Conversational intake for sourcing and procurement agentic workflow</a> Streamline end‑to‑end procurement workflows with a conversational intake experience powered by AI agent support. AI agents guide you through relevant steps while providing contextual recommendations and real-time progress updates.</p>\n<p><a href=\"https://www.servicenow.com/docs/access?context=automatically-assign-categories&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Automatically assign categories during SR and PR creation</a> Automatically classify service requests, purchase requisitions, and purchase orders into the correct spend categories using the spend categorization AI agent.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforsourcetopayoperations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Source-to-Pay Operations",
    "type": "New feature",
    "products": [
      "Now Assist",
      "AI Platform",
      "SPM",
      "ITSM",
      "AI Search"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-slo&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for SLO</a></strong></p>\n<p><a href=\"https://www.servicenow.com/docs/access?context=supplier-onboarding-agentic-workflow&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">AI driven supplier onboarding</a> Use theAI driven supplieronboarding workflow to automate data validation, duplicate checking, task generation, and supplier communication. Key enhancements include:</p>\n<ul>\n<li>Extract banking information from uploaded documents to reduce information mismatch.</li>\n<li>Use the document strategy generator AI agent to generate a customized onboarding task list using all published knowledge base articles.</li>\n<li>View a list of AI-suggested suppliers while reviewing supplier onboarding requests initiated through sourcing requests.</li>\n<li>Supplier relationship managers can manually approve or reject supplier onboarding requests.</li>\n<li>Resolve duplicate supplier onboarding requests from the Now Assist panel by updating the supplier legal name, contact email, or both.</li>\n</ul>\n<p><a href=\"https://www.servicenow.com/docs/access?context=automated-supplier-case-creation-from-emails&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Automate supplier case creation from emails</a> Convert supplier emails into cases automatically when registered supplier contacts send emails to a supplier inbox. Supplier cases are created for all SLO related queries and assigned to the supplier relationship manager. For queries unrelated to SLO, a universal request is created for resolution.</p>\n<p><a href=\"https://www.servicenow.com/docs/access?context=summarize-supp-perf&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Summarize supplier performance in Source-to-Pay Workspace</a> Generate comprehensive supplier performance summaries, including performance data, trends, and actionable insights, using the supplier performance summarization skill.</p>\n<p><a href=\"https://www.servicenow.com/docs/access?context=slo-analyze-sentiments&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Analyze sentiments in supplier cases</a> Use the sentiment analysis skill to analyze supplier case fields and determine the tone or sentiment of the fulfiller.</p>\n<p><a href=\"https://www.servicenow.com/docs/access?context=generate-email-response-for-supplier-case&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Generate an email response for supplier cases</a> Use the email response skill to analyze the supplier case details and generate professional email response regardless of the record type using past email responses, KB articles, and related tasks.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforsourcetopayoperations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Source-to-Pay Operations",
    "type": "New feature",
    "products": [
      "Now Assist",
      "SPM",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=source-to-pay-common-skills&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Source-to-Pay Operations common skills</a></strong></p>\n<p>The Email response generation skill uses generative AI to automatically draft professional, context-aware email responses for supplier inquiries, procurement communications, and AP case management across Source-to-Pay workflows (APO, SPO, SLO), reducing manual effort and improving response consistency.</p>\n<p>The Sentiment analysis skill uses large language models to detect emotional tone (Positive, Negative, or Neutral) in cases across Source-to-Pay workflows (APO, SPO, SLO).</p>\n<p>The AI Data Explorer for Source-to-Pay (APO, SPO, SLO) supports AI-driven prompt understanding, recommended queries, and drill-down capabilities within a unified interface.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforsourcetopayoperations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Source-to-Pay Operations",
    "type": "New feature",
    "products": [
      "Now Assist",
      "SPM",
      "AI Platform",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-apo&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for APO</a></strong></p>\n<p>Use the accounts payable document classification skill to identify and categorize email attachments, such as invoices, credit memos, and supporting documents, that were sent by suppliers.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforsourcetopayoperations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Source-to-Pay Operations",
    "type": "New feature",
    "products": [
      "Now Assist",
      "AI Platform",
      "AI Search",
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-for-purch-order-magmt&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for POM</a></strong></p>\n<p>Convert supplier emails into purchase order exceptions automatically when a registered supplier contact sends emails to a supplier inbox. Purchase order exceptions are created for all purchase order queries and assigned to the operational buyer. For queries unrelated to purchase order exceptions, a universal request is created.</p>\n<p>Use the define PO exception mitigation strategy agentic workflow in Now Assist for POM to identify and execute mitigation strategies by analyzing delivery gaps and proposing order changes with alternative suppliers.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforsourcetopayoperations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Strategic Portfolio Management (SPM)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=demand-summarization-skill&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Summarize demand records with the demand summarization skill</a></strong></p>\n<p>Generate a concise, structured summary of any demand using the demand summarization skill through the <strong>Summarize</strong> button in the demand form. The skill reviews the demand fields and helps create a clear summary of the demand.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforstrategicportfoliomanagementspm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Strategic Portfolio Management (SPM)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "SPM",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-a-status-report-in-project-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">AI-generated project status reporting</a></strong></p>\n<p>Generate AI-powered project status reports for quick visibility into project health and executive summaries.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforstrategicportfoliomanagementspm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Strategic Portfolio Management (SPM)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "SPM",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=use-projects-pw&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">AI insights for a project</a></strong></p>\n<ul>\n<li>Use the <strong>AI insights</strong> page to view consolidated information about project tasks, milestones, resources, financials, and RIDACs.</li>\n<li>Configure the insights to monitor critical project elements, such as financials and RIDACs, for a project.</li>\n<li>Send AI‑generated project insights via email, including financials, RIDACs, milestones, resources, and project tasks.</li>\n<li>Track key project indicators, such as budget overruns, cost variance, high‑risk items, issues, decisions, overdue actions, and change requests.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforstrategicportfoliomanagementspm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Strategic Portfolio Management (SPM)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "SPM",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-now-assist-for-spm&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Additional admin configuration for the project insights generation skill</a></strong></p>\n<p>Configure additional settings as an admin for the project insights generation skill. Choose inputs, display and review the changes.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforstrategicportfoliomanagementspm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Strategic Portfolio Management (SPM)",
    "type": "New feature",
    "products": [
      "SPM",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=generate-insights-for-goal&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">AI-generated insights for goals</a></strong></p>\n<p>Generate AI‑powered insights using the goal insights skill to gain predictive, actionable visibility into goal health. By analyzing the goal, goal targets, subgoals, and aligned work, the system delivers data‑driven insights that help goal owners and contributors manage risks proactively and improve goal outcomes. Insights include AI-forecasted status, confidence of achieving the goal, targets at risk, and aligned work or recommendations that have been delayed or stalled.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforstrategicportfoliomanagementspm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Strategic Portfolio Management (SPM)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "SPM",
      "Developers",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=generate-stories-quickly-for-eap-and-agile-2-0&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Story generation for epics in Agile Development 2.0 and EAP</a></strong></p>\n<p>Generate a complete user story, including title, description, and acceptance criteria, directly from an epic instead of creating one. By providing one or two lines of context, you can generate a story and edit inline before saving. This skill is available in both Agile Development 2.0 and EAP.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforstrategicportfoliomanagementspm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Telecommunications, Media and Technology (TMT)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "CSM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-squad-resource-identifier&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Squad resource identifier</a></strong></p>\n<p>Recommend internal experts based on engagement context, skill set, region, and real-time availability. Assist customer success teams to quickly identify and connect with the right individuals to support success plays, initiatives, or critical escalations, helping to ensure faster and more effective collaboration across engagements.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistfortelecommunicationsmediaandtechnologytmt-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Telecommunications, Media and Technology (TMT)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "CSM",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-product-release-email-communication&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Product release email communication</a></strong></p>\n<p>Automatically draft, refine, and publish release announcement emails. It identifies the right stakeholders, helps to ensure consistent messaging, and streamlines distribution.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistfortelecommunicationsmediaandtechnologytmt-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Telecommunications, Media and Technology (TMT)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "CSM",
      "IRM"
    ],
    "details": "<p><strong>Risk signals and solution synchronization</strong></p>\n<p>Monitor solution records linked to risk signals and automatically sync updates back to the original risk signal record. Notify customer success managers with a summarized status, and prompt them to close resolved risks.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistfortelecommunicationsmediaandtechnologytmt-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Telecommunications, Media and Technology (TMT)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "SPM",
      "CSM",
      "AI Search"
    ],
    "details": "<p><strong>Create product adoption roadmaps using Now Assist</strong></p>\n<p>Use generative AI to create product adoption roadmaps by analyzing customer characteristics, identifying similar products, and matching customer goals. Provide contract-level insights to support more effective renewal conversations and expansion opportunities.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistfortelecommunicationsmediaandtechnologytmt-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Telecommunications, Media and Technology (TMT)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "CSM",
      "CRM"
    ],
    "details": "<p><strong>Support renewals and expansion</strong></p>\n<p>Analyze renewal readiness automatically by evaluating health scores, product usage, and value achievement metrics using the Renewal Insight Engine. After receiving assessment reports, create opportunities directly within the renewal playbook.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistfortelecommunicationsmediaandtechnologytmt-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Telecommunications, Media and Technology (TMT)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "CSM",
      "ITOM",
      "AI Platform",
      "Integrations"
    ],
    "details": "<p><strong>Customer 360 AI insights</strong></p>\n<p>Analyze call, chat, billing, and interaction data with Knowledge Graph and Workflow Data Fabric. Provide service and network insights with recommendations on potential customer faults. Deliver task-based insights on recent cases, orders, A2A integration with RADCOM, voice agent interactions, and sentiment analysis related to customer health.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistfortelecommunicationsmediaandtechnologytmt-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Telecommunications, Media and Technology (TMT)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "CSM",
      "OTSM"
    ],
    "details": "<p><strong>Auto-onboarding</strong></p>\n<p>Reduce onboarding complexity for consumers with automated onboarding. This feature autonomously manages onboarding workflows, establishes secure connections, synchronizes settings, and continuously monitors for errors to help ensure reliable, efficient integrations with minimal manual effort.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistfortelecommunicationsmediaandtechnologytmt-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Telecommunications, Media and Technology (TMT)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "CSM",
      "AI Platform",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-tmt-analyze-sentiment-spc-adr&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Analyze the sentiment of a service problem case</a></strong></p>\n<p>Generates the customer's sentiment and the reasoning behind it on the complaint cases. Make informed decisions on complaint cases based on sentiment and link them to the Alternative Dispute Resolution (ADR) case record.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistfortelecommunicationsmediaandtechnologytmt-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Telecommunications, Media and Technology (TMT)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "CSM",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-tmt-summarize-linked-record&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Summarize the linked records</a></strong></p>\n<p>Generate a comprehensive summary of the service problem case records that you have linked on the ADR case.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistfortelecommunicationsmediaandtechnologytmt-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Telecommunications, Media and Technology (TMT)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "CSM",
      "AI Search",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-tmt-generate-resolution-notes-ad&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Generate ADR resolution notes</a></strong></p>\n<p>Enables you to generate resolution for the customer dispute in the ADR case record. You can propose this resolution to the customer and get the customer feedback.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistfortelecommunicationsmediaandtechnologytmt-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Telecommunications, Media and Technology (TMT)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "CSM",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-tmt-generate-deadlock-letter&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Generate a deadlock letter</a></strong></p>\n<p>Generate details of a deadlock letter for an ADR case. If the customer doesn't agree with the ADR case resolution, then you can use this skill to generate the deadlock letter and share with the customer.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistfortelecommunicationsmediaandtechnologytmt-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist for Third-party Risk Management (TPRM)",
    "type": "New feature",
    "products": [
      "Now Assist",
      "IRM",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-recommendation-tprm-issue&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Generate TPRM issue recommendations</a></strong></p>\n<p>After upgrading to version 22.0.8 if you have the third‑party assessment reviewer role [sn\\_vdr\\_risk\\_asmt.vendor\\_assessment\\_reviewer] and have installed the Now Assist for Third-party Risk Management (TPRM) application, you can use generative AI to automatically identify and recommend issues based on assessment responses. The TPRM issue management recommendation skill recommends issues with rationalized summaries. Recommended issues are presented for review and are created as standard TPRM issues only after user confirmation.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistforthirdpartyriskmanagementtprm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist in Document Intelligence",
    "type": "New feature",
    "products": [
      "Now Assist",
      "AI Platform",
      "AI Search"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=document-and-visual-insights-ai-agent&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Document and visual insights AI agent enhancements</a></strong></p>\n<p>The document and visual insights AI agent can recognize and provide citations for multiple attachments.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistindocumentintelligence-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist in Document Intelligence",
    "type": "Change",
    "products": [
      "Now Assist",
      "AI Platform",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=document-and-visual-insights-ai-agent&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Document and visual insights AI agent enhancements</a></strong></p>\n<p>Tools used by the document and visual insights AI agent are consolidated to improve performance.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistindocumentintelligence-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist in Document Intelligence",
    "type": "Change",
    "products": [
      "Now Assist",
      "AI Platform",
      "AI Search"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-document-intelligence-limitations&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Changes to limitations</a></strong></p>\n<p>The file size limit for uploading a file using the attachment summarization feature is changed from 10MB to 20MB.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistindocumentintelligence-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Now Assist in Document Intelligence",
    "type": "Change",
    "products": [
      "Now Assist",
      "AI Platform",
      "Developers",
      "SDK"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=add-a-tool&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Add a tool</a></strong></p>\n<p>Document and visual intelligence capabilities used to leverage extraction, question answering, and summarization for skills created with Now Assist Skill Kit is available to users with the appropriate role(s).</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-nowassistindocumentintelligence-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "On-Call Scheduling",
    "type": "New feature",
    "products": [
      "ITSM",
      "ITOM",
      "HRSD",
      "WSD"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-update-schedule-oncall&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Monthly roster rotation for an on-call schedule</a></strong></p>\n<p>Simplify shift management by configuring a monthly roster rotation for an on-call schedule. This option is available only for the 2024 schedule engine.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-oncallscheduling-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "On-Call Scheduling",
    "type": "New feature",
    "products": [
      "ITSM",
      "ITOM",
      "Event Management"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=roles-assigning-oncall&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Granular role for on-call schedule configurations</a></strong></p>\n<p>Configure on-call schedule features using the granular and specific role, sn\\_on\\_call\\_admin. It contains sn\\_trigger\\_table\\_cfg\\_read and sn\\_trigger\\_table\\_cfg\\_write roles.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-oncallscheduling-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Operational Resilience",
    "type": "Important Information for upgrading",
    "products": [
      "BCM",
      "CSDM",
      "IRM"
    ],
    "details": "<p>Beginning with Operational Resilience release 22.0.x, the following scheduled jobs are deactivated for new installations by default:</p>\n<ul>\n<li><strong>Calculate red flags for CSDM and dependencies</strong></li>\n<li><strong>Update CSDM and other dependencies</strong></li>\n</ul>\n<p>For existing installations, these jobs retain their current active or inactive state.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-operationalresilience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Operational Resilience",
    "type": "New feature",
    "products": [
      "BCM",
      "IRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=work-on-action-tasks&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Export action task reports in Microsoft Word, Microsoft Excel, and JSON formats</a></strong></p>\n<p>Export DRIR assessment action task reports in Microsoft Word, Microsoft Excel, or JSON format from a drop-down menu. Generate Microsoft Word documents for narrative reports, Microsoft Excel spreadsheets with structured question-answer layouts, or JSON files for system integrations.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-operationalresilience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Operational Resilience",
    "type": "New feature",
    "products": [
      "BCM",
      "IRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=currency-conversion-aggregation&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Convert and aggregate contractual expenses to regulator-required currencies</a></strong></p>\n<p>Standardize annual expense values during Register of Information report generation by enabling optional currency conversion and third-party total expense aggregation. The application converts contract amounts to a base currency using 32 European Central Bank (ECB) exchange rates based on the reference date. Administrators upload monthly rates into the system. When eligibility criteria are met, expenses across multiple contracts are aggregated by third-party providers or engagements, generating consolidated reports that comply with DORA regulatory requirements.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-operationalresilience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Operational Sustainability Management (formerly Environmental, Social, and Governance Management)",
    "type": "New feature",
    "products": [
      "IRM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=integrate-operational-sustainability-with-SocialSuite&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Integrating Environmental, Social, and Governance Management with Socialsuite</a></strong></p>\n<p>After upgrading Operational Sustainability Management to version 22.0.1, streamline sustainability reporting and compliance processes by conducting CSRD-compliant double materiality assessments in Socialsuite and automatically syncing the results with Operational Sustainability Management. This integration supports impact and financial materiality assessments following Global Reporting Initiative (GRI) and European Sustainability Reporting Standards (ESRS) standards.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-operationalsustainabilitymanagementformerlyenvironmentalsocialandgovernancemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Operational Sustainability Management (formerly Environmental, Social, and Governance Management)",
    "type": "New feature",
    "products": [
      "IRM",
      "ITOM",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-a-threshold-for-a-metric&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create a threshold for a metric</a></strong></p>\n<p>After upgrading Operational Sustainability Management to version 22.0.1, you can configure thresholds with multiple levels and ranges for granular monitoring. Duplicate and modify existing thresholds to streamline creation. When thresholds are breached, automated actions trigger immediately.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-operationalsustainabilitymanagementformerlyenvironmentalsocialandgovernancemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Operational Technology (OT) Discovery",
    "type": "New feature",
    "products": [
      "CMDB",
      "ITOM",
      "Integrations",
      "OTSM"
    ],
    "details": "<p><strong>Operational Technology Discovery</strong></p>\n<p>The <strong>Discovery Console for OT</strong> user interface is designed to provide the user with a consistent experience across the application. The Console <strong>Home page</strong> provides easy access to your assets, auto queries, variable sets, sensors, and sites.</p>\n<p>The <strong>APIs</strong> delivered with the console provides mechanism to communicate with the <strong>Service Graph Connector for ServiceNow OT Discovery</strong> and ingest the data from the console into the ServiceNow CMDB.</p>\n<p>The <strong>Auto Query</strong> functionality provides automatic asset queries for the Discovery Console for OT in a scheduled fashion The auto queries are classified into Simplified and Advanced.</p>\n<p><strong>Variable sets</strong> allow auto queries to use credentials required and allow users to manage these per site level.</p>\n<p>You can create sites, associate <strong>Network zones</strong> and ranges to define scope of your OT network for discovery to query. You can create <strong>ignore ranges</strong> as well and select assets that need to be excluded from a query.</p>\n<p>You can <strong>monitor</strong> and <strong>manage</strong> the configuration and health of the Sensors and Collectors used for discovery purposes from the Console.</p>\n<p>You can register <strong>Sensors</strong> and <strong>Collectors</strong> to ensure that they can communicate with the <strong>Console</strong>.</p>\n<p>The <strong>Discovery Sensor for OT</strong> and the <strong>OT Discovery Collector</strong> scan your OT environments and create an inventory that guarantees visibility of OT devices.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-operationaltechnologyotdiscovery-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Operational Technology (OT) Discovery",
    "type": "Activation Information",
    "products": [
      "ITOM",
      "CMDB",
      "ITAM",
      "OTSM"
    ],
    "details": "<p>Install the Operational Technology Discovery solution by requesting it from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> website to view all the available apps and for information about submitting requests to the store.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-operationaltechnologyotdiscovery-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Operational Technology Incident Management",
    "type": "New feature",
    "products": [
      "ITSM",
      "ITOM",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=report-ot-incident-in-ot-employee-portal&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Use the Employee Center for OT to report an OT incident</a></strong></p>\n<p>Create an OT incident as a user without an OT incident role with the Report OT incident item in the Employee Center for OT.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-operationaltechnologyincidentmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Operational Technology Incident Management",
    "type": "Change",
    "products": [
      "ITOM",
      "ITSM",
      "SecOps",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=granular-admin-roles&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Admin role dependency</a></strong></p>\n<p>Several new granular admin roles have been added, which enable developers to complete administrative configuration tasks without requiring the full admin role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-operationaltechnologyincidentmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Operational Technology Manager",
    "type": "New feature",
    "products": [
      "OTSM",
      "ITOM",
      "CMDB",
      "CSDM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=utilizing-ot-network-map&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Operational Technology Network Map</a></strong></p>\n<p>Use the OT network map available in the Industrial Workspace to view the subnets of a site and the OT devices in each subnet.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-operationaltechnologymanager-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Operational Technology Manager",
    "type": "New feature",
    "products": [
      "CMDB",
      "ITOM",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=cmdb-ci-class-models-operation-technology&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">CMDB OT class model updates</a></strong></p>\n<p>Configure for your OT devices with the following CMDB OT class model updates:</p>\n<ul>\n<li>The IP Network Subnets related list was added to IT devices in the OT view to show all the subnets related to the device and show IP Network subnets for the selected OT device.</li>\n<li>The IP Network Subnets related list was added to the following CMDB classes:</li>\n</ul>\n<p>    - cmdb\\_ci\\_display</p>\n<p>    - cmdb\\_ci\\_firewall\\_network</p>\n<p>    - cmdb\\_ci\\_security</p>\n<p>    - cmdb\\_ci\\_ids\\_network</p>\n<p>    - cmdb\\_ci\\_imaging</p>\n<p>    - cmdb\\_ci\\_unclassed\\_hardware</p>\n<p>    - cmdb\\_ci\\_multimedia</p>\n<p>    - cmdb\\_ci\\_monitor\\_control</p>\n<p>    - cmdb\\_ci\\_aix\\_server</p>\n<p>    - cmdb\\_ci\\_computer</p>\n<p>    - cmdb\\_ci\\_esx\\_server</p>\n<p>    - cmdb\\_ci\\_hardware</p>\n<p>    - cmdb\\_ci\\_hpux\\_server</p>\n<p>    - cmdb\\_ci\\_hyper\\_v\\_server</p>\n<p>    - cmdb\\_ci\\_iot</p>\n<p>    - cmdb\\_ci\\_ip\\_firewall</p>\n<p>    - cmdb\\_ci\\_ip\\_router</p>\n<p>    - cmdb\\_ci\\_ip\\_switch</p>\n<p>    - cmdb\\_ci\\_linux\\_server</p>\n<p>    - cmdb\\_ci\\_monitor\\_control</p>\n<p>    - cmdb\\_ci\\_netgear</p>\n<p>    - cmdb\\_ci\\_ot</p>\n<p>    - cmdb\\_ci\\_pc\\_hardware</p>\n<p>    - cmdb\\_ci\\_printer</p>\n<p>    - cmdb\\_ci\\_protocol\\_converter</p>\n<p>    - cmdb\\_ci\\_server</p>\n<p>    - cmdb\\_ci\\_solaris\\_server</p>\n<p>    - cmdb\\_ci\\_unix\\_server</p>\n<p>    - cmdb\\_ci\\_ups</p>\n<p>    - cmdb\\_ci\\_win\\_server</p>\n<ul>\n<li>You can now view the OT device details for the following CMDB classes:</li>\n</ul>\n<p>    - cmdb\\_ci\\_esx\\_server</p>\n<p>    - cmdb\\_ci\\_hyper\\_v\\_server</p>\n<ul>\n<li>Because the OT device details are included in the form view of the CMDB class table, the <strong>OT device details</strong> tab was removed for the following CMDB classes:</li>\n</ul>\n<p>    - cmdb\\_ci\\_aix\\_server</p>\n<p>    - cmdb\\_ci\\_hpux\\_server</p>\n<p>    - cmdb\\_ci\\_pc\\_hardware</p>\n<p>    - cmdb\\_ci\\_hyper\\_v\\_server</p>\n<p>    - cmdb\\_ci\\_esx\\_server</p>\n<p>    - cmdb\\_ci\\_solaris\\_server</p>\n<p>    - cmdb\\_ci\\_unix\\_server</p>\n<p>    - cmdb\\_ci\\_ups</p>\n<ul>\n<li>Admins can edit the protection policy for an OT View rule for all CMDB classes.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-operationaltechnologymanager-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Operational Technology Manager",
    "type": "Change",
    "products": [
      "OTSM",
      "ITOM",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=use-cmdb-groups-it-ot-conversion&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Use CMDB groups to add OT context to IT CIs</a></strong></p>\n<p>When you use CMDB groups to add OT context to IT CIs, you can no longer create an Automated IT OT Bulk Contextualization record with more than one CMDB group.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-operationaltechnologymanager-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Operational Technology Manager",
    "type": "Change",
    "products": [
      "OTSM",
      "CMDB",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=use-cmdb-groups-it-ot-conversion&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Automated IT OT Bulk Contextualization - Using CMDB groups scheduled job</a></strong></p>\n<p>The <strong>Automated IT OT Bulk Contextualization - Using CMDB groups</strong> scheduled job can only process 10,000 CIs at one time. If you have more than 10,000 CIs, the remaining CIs will be processed in the next job run.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-operationaltechnologymanager-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Operational Technology Manager",
    "type": "Change",
    "products": [
      "OTSM",
      "ITOM",
      "Core Platform",
      "Developers",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=granular-admin-roles&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Admin role dependency</a></strong></p>\n<p>Several new granular admin roles were added to enable developers to complete administrative configuration tasks without requiring the full admin role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-operationaltechnologymanager-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Operational Technology Manager",
    "type": "Removed",
    "products": [
      "OTSM",
      "ITOM",
      "CMDB"
    ],
    "details": "<p>The <strong>New</strong> button was removed from the following related lists for users with read-only access to a site:</p>\n<p>    - Network Adapters</p>\n<p>    - Memory Modules</p>\n<p>    - Software Installed</p>\n<p>    - IP Addresses</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-operationaltechnologymanager-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Opportunity Management",
    "type": "New feature",
    "products": [
      "CSM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=opportunity-management-tasks-tab&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">View touchpoint records for a task</a></strong></p>\n<p>Gain complete visibility into customer engagement by viewing a complete touchpoint timeline on every opportunity so that teams have context at their fingertips.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-opportunitymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Opportunity Management",
    "type": "New feature",
    "products": [
      "CSM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=opportunity-management-competitors-tab&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Add competitors</a></strong></p>\n<p>Identify and store competitor information for product offerings/product family within an opportunity.​</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-opportunitymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Order Management",
    "type": "New feature",
    "products": [
      "CSM",
      "FSM",
      "OTSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=somt-flow-action-catalog-task&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Task plan template</a></strong></p>\n<p>Define tasks and their dependencies using the task plan template to orchestrate the fulfillment journey for a product to standardize fulfillment processes across products.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-ordermanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Order Management",
    "type": "New feature",
    "products": [
      "OTSM",
      "CSM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=net-pricing-sp-contracts&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Delta pricing on orders</a></strong></p>\n<p>Calculate pricing and quantity changes during MACD activities and renewals by deriving deltas from existing products, contracts, or purchases. This improves accuracy when processing order modifications.</p>\n<ul>\n<li>Defaults contract type and contract line type when empty, based on the order and line actions being performed.</li>\n<li>Adds delta pricing–related header and line fields, along with pricing adjustment rule identifiers and conditions, and supports mapping these fields across order, product instance, and order copy flows.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-ordermanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Order Management",
    "type": "New feature",
    "products": [
      "OTSM",
      "CSM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=defining-products-with-ramps&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Price and quantity ramps on order line items</a></strong></p>\n<p>View price and quantity ramps directly on order line items to model planned changes over time within a single order, providing visibility into pricing changes without managing multiple orders. For more information, see the <a href=\"https://www.servicenow.com/docs/access?context=product-catalog-pricing-management-rn&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Product Catalog Management and Pricing Management release notes</a></p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-ordermanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Order Management",
    "type": "New feature",
    "products": [
      "OTSM",
      "Now Assist",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=bulk-update-order-lines-with-now-assist&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Manage order updates with Now Assist</a></strong></p>\n<p>Use a conversational AI assistant to improve order triage and resolution. The assistant understands order context and supports guided actions such as updating shipping addresses and quantities across order line items. For more information, see the <a href=\"https://www.servicenow.com/docs/access?context=now-assist-order-management-rn&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now assist order management</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-ordermanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Order Management",
    "type": "Change",
    "products": [
      "OTSM",
      "SPM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=inflight-offering-somt&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Managing inflight order for site projects</a></strong></p>\n<p>Use the OM integration with SPM for in-flight orders to support projects for site and maintain program project and sub-project hierarchy.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-ordermanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Password Reset",
    "type": "New feature",
    "products": [
      "ITSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=r_InstalledWithPasswordReset&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Granular admin roles in Password Reset</a></strong></p>\n<p>Configure the Password Reset application features using the granular Password Reset admin role (password\\_reset\\_admin).</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-passwordreset-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Performance Analytics",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITSM",
      "ITOM",
      "CSM",
      "HRSD",
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-ds-automated-indicator&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create data snapshots indicators</a></strong></p>\n<p>Create data snapshots indicators and their sources rather than being able to enable data snapshots only on existing indicators. Benefit from the simplicity of data snapshots indicators, including the escape from the two-level breakdown limit. You can create either automated or formula indicators. Access control for these indicator is the same as for classic Performance Analytics indicators.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-performanceanalytics-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Performance Analytics",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITOM",
      "AI Ops",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-ds-source&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create intraday indicators</a></strong></p>\n<p>Track process changes at a more granular level than daily, such as by work shift. Data snapshots indicator sources support business calendars with intraday periods, which can be as short as per minute.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-performanceanalytics-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Performance Analytics",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITOM",
      "CMDB",
      "Event Management",
      "AI Ops",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=kpi-details-targets&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Explore native data snapshots indicators with KPI Details</a></strong></p>\n<p>KPI Details supports data snapshots indicators that you create, not only those that are enabled from classic indicators. The following features have been created for or extended to native data snapshots indicators:</p>\n<ul>\n<li>Subscriptions for alerts on targets and thresholds, which can be set from the targets and thresholds panels</li>\n<li>Adjustable filtering by breakdown, calendar, or time series aggregation</li>\n<li>Hierarchical breakdowns, with scores rolled up to parent elements</li>\n<li>Customizable score formatting options, such as precision and abbreviation</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-performanceanalytics-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Performance Analytics",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITOM",
      "AI Ops",
      "SPM",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-ds-automated-indicator&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">View data trends in data snapshots as data accumulates</a></strong></p>\n<p>When you select a field by which to trend a data snapshots automated indicator, you have the option to show the trend for incomplete collection periods. This feature shows the trend as it develops for live data without having to wait for the end of the collection period. You can set this behavior either on the automated data snapshot indicator record or in a time series data visualization for a data snapshot indicator.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-performanceanalytics-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Performance Analytics",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITOM",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=tables-unlimited-breakdowns&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Collect data snapshots scores with confidence</a></strong></p>\n<p>Data mining for data snapshots scores has the following improvements:</p>\n<ul>\n<li>Collect scores for tables with any volume of records.</li>\n<li>The system accurately and automatically handles data gaps when data mining is disabled.</li>\n<li>You are warned of the implications before you manually disable data mining (score collection).</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-performanceanalytics-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Performance Analytics",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITOM",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=activate-unlimited-breakdowns&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Activate data snapshots in more cases and with better information</a></strong></p>\n<ul>\n<li>Activate indicators without active data collector jobs.</li>\n<li>Activate indicators regardless of underlying record volume. For example, the INSERT\\_VOLUME\\_EXCEEDED error no longer occurs.</li>\n<li>If the activation fails because of scripted breakdowns, the scripted breakdowns are listed in the failure message.</li>\n<li>Generic parsing errors have been rewritten into specific, categorized messages.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-performanceanalytics-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Performance Analyzer",
    "type": "Important Information for upgrading",
    "products": [
      "Core Platform",
      "ITOM",
      "UI",
      "Developers"
    ],
    "details": "<p>Starting with the Zurich release, Performance Analyzer is available on your instance automatically. For access to Performance Analyzer for earlier instances, install Performance Analyzer from the ServiceNow® Store.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-performanceanalyzer-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Performance Analyzer",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong>Deep linking</strong></p>\n<p>Save and share links that replicate the same view for others.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-performanceanalyzer-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Performance Analyzer",
    "type": "Change",
    "products": [
      "Core Platform",
      "App Engine",
      "ITOM"
    ],
    "details": "<p><strong>Group by variant</strong></p>\n<p>Aggregate pages with data grouped by variant help you to identify performance issues.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-performanceanalyzer-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Performance Analyzer",
    "type": "Change",
    "products": [
      "Core Platform",
      "ITOM",
      "UI"
    ],
    "details": "<p><strong>Filter client interaction lists</strong></p>\n<p>Filters for client interaction lists enable you to investigate user-specific performance issues.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-performanceanalyzer-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Performance Analyzer",
    "type": "Change",
    "products": [
      "UI",
      "Developers",
      "Core Platform"
    ],
    "details": "<p><strong>Waterfall view</strong></p>\n<p>The waterfall view displays which macroponent is associated with server-side calls to help you trace API calls to specific UI components.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-performanceanalyzer-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "Important Information for upgrading",
    "products": [
      "Core Platform",
      "UI",
      "ITOM",
      "SPM"
    ],
    "details": "<p>After upgrading, only admins can create Core UI analytics objects: reports, Performance Analytics widgets, responsive dashboards, and interactive filters. Other users can still view and edit Core UI objects but can create only Platform Analytics objects, such as data visualizations.</p>\n<p>When upgrading, the published status on all Core UI reports changes to <strong>false</strong>, making them unpublished.</p>\n<p>After upgrading, the Analytics Hub isn't available. Links to the Analytics Hub are redirected to KPI Details.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "New feature",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=reuse-page-definitions&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">New UI Builder templates for Dashboards and Data visualization libraries</a></strong></p>\n<p>Create Dashboard and Data Visualization library pages within your workspaces in UI Builder by using new page templates.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "New feature",
    "products": [
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=dashboards-for-admin-users&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">View usage information in the data visualization library</a></strong></p>\n<p>As an analytics manager, view usage statistics in the data visualization library. Those statistics include the number of reports, data visualizations that aren't used in any dashboards, and the number of data visualizations not viewed for more than six months.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=pa-library-recommendations&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Get recommendations to review problematic analytics resources</a></strong></p>\n<p>As an analytics manager, view recommendations for which artifacts you should fix or delete in the Dashboard, Data Visualization, and Indicator libraries.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "New feature",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=executive-dashboard-overview&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Executive dashboards</a></strong></p>\n<p>Use the new Executive Dashboards, which have been rebuilt using the Platform Analytics in-line dashboard capabilities.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "New feature",
    "products": [
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=config-dv-sing-sc-ind-data&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">View data snapshot indicators in data visualizations</a></strong></p>\n<p>Add indicators that are built from data snapshots sources to data visualizations.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=analytics-center&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Manage Platform Analytics in the improved Analytics Overview page</a></strong></p>\n<p>Quickly discover artifacts, access relevant information and key metrics, and take actions to manage the health of the library. The Analytics Overview page (formerly Analytics Center) acts as a one-stop shop and entry point for role-specific access to all important information related to Platform Analytics.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=par-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Platform Analytics experience is enabled by default for all users on upgrade to Australia</a></strong></p>\n<p>Create content entirely within Platform Analytics.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=guided-tours&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Take role-based tours</a></strong></p>\n<p>Role-based guided tours are added to the Platform Analytics Migration Center and the Dashboards and Data Visualizations library pages.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-select-filter-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Filter dashboards by string field values</a></strong></p>\n<p>Filter data by the contents of string-type fields with a single-select or multiple-select filter.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "Change",
    "products": [
      "Core Platform",
      "ITOM",
      "SPM",
      "AI Search",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=kpi-details&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Explore native data snapshots indicators in KPI Details</a></strong></p>\n<ul>\n<li>Employ intraday analysis with granularity based on work shifts.</li>\n<li>Customize score formatting options.</li>\n<li>Adjust breakdowns, calendar, and aggregation periods while exploring an indicator.</li>\n<li>Set up subscriptions for alerts on targets and thresholds directly from the targets and thresholds panels.</li>\n<li>Define hierarchical breakdowns with scores rolled up to parent elements.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "Change",
    "products": [
      "Core Platform",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-hierarchical-filter&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create hierarchical filters for Industrial Connected Workforce indicators</a></strong></p>\n<p>Create multilevel filters with roll-up aggregation across nested organizational structures, which moves from site, to plan, to department, to functional location.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=export-data-vis-from-dboard&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Download data visualizations as CSV or Excel files</a></strong></p>\n<p>As a viewer, you now can download any data visualization, not only a List, as a CSV or XLS file.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "Change",
    "products": [
      "Core Platform",
      "ITOM",
      "AI Ops"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=config-dv-time-series-ind-data&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Automatically set the aggregation period of data snapshots indicator trend lines</a></strong></p>\n<p>Set the <strong>Aggregation period</strong> field in the <strong>Trend by</strong> settings to Auto so , the system automatically selects the aggregation period of data snapshot indicator trend lines based on the date range and business calendar.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-date-filter-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Automatic aggregation of date-filtered data based on date range</a></strong></p>\n<p>Filter dashboards by business calendar and have the system infer the appropriate aggregation level at runtime. If you put a time series data visualization on a dashboard with a date filter, the aggregation of shown data adjusts automatically depending on the selected date range. This adjustment applies to both table and data snapshots indicator data.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=filter-dv-condition-builder&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create custom data visualization filters with an improved condition builder</a></strong></p>\n<p>When creating a data visualization for table data, you can create a custom filter when you specify the data source. The condition builder for the custom filter now has menus of fields, operators, values, and related tables.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-dv-sing-sc-ac&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Hide the Refresh action on data visualizations</a></strong></p>\n<p>In the Headers and Borders section of data visualizations, use the <strong>Show refresh option</strong> check box to hide the <strong>Refresh</strong> icon  in the Configuration settings of data visualizations. Data visualizations on cached dashboards never have the Refresh icon.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=data-migration&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Migration Center enhancements</a></strong></p>\n<ul>\n<li>As an analytics manager, migrate any Core UI dashboard to Platform Analytics in the Dashboard library.</li>\n<li>Edit migrated content before activating it in the Platform Analytics experience.</li>\n<li>Activate content selectively.</li>\n<li>Total views of Core UI reports and other widgets are now migrated along with the Core UI content.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI",
      "AI Platform",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=edit-db-elements-in-ac&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Dashboard element enhancements</a></strong></p>\n<p>Moving and resizing dashboard elements no longer opens the configuration panel.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Platform Analytics experience",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=schedule-export-dboards-data-viz&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enhanced scheduled exports</a></strong></p>\n<p>When scheduling the email of dashboards or data visualizations, limit recipients based on reference qualifiers.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-platformanalyticsexperience-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Playbook",
    "type": "New feature",
    "products": [
      "App Engine",
      "Core Platform",
      "SecOps",
      "SPM",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=nested-playbooks&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Nested playbooks</a></strong></p>\n<p>Nest playbooks as a step within other playbooks to enable the following scenarios:</p>\n<ul>\n<li>Define sets of activities for reuse across multiple playbooks to help avoid duplication.</li>\n<li>Break up large playbooks for easy maintenance and fast load time in Playbook Designer.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-playbook-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Playbook",
    "type": "New feature",
    "products": [
      "App Engine",
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=wizard-layouts-playbooks&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Simplified end-user playbook experience</a></strong></p>\n<p>Implement a wizard experience for guiding your end users through a sequence of steps to achieve an outcome, such as servicing a printer.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-playbook-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Playbook",
    "type": "New feature",
    "products": [
      "SecOps",
      "Core Platform",
      "Now Assist",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=testing-support-playbooks&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Automated Test Framework support for playbooks</a></strong></p>\n<p>The Automated Test Framework can be used to create automated tests to confirm your playbooks run as planned.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-playbook-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Playbook",
    "type": "Change",
    "products": [
      "Core Platform",
      "SecOps",
      "CSM",
      "FSM",
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=user-access-playbooks&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Required role update</a></strong></p>\n<p>Any tasks that previously required only the admin role now require the playbook.admin role instead.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-playbook-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Playbook",
    "type": "Activation Information",
    "products": [
      "Core Platform",
      "AI Platform",
      "Now Assist",
      "Developers",
      "SDK"
    ],
    "details": "<p>The Playbooks application comes with the Workflow Studio ServiceNow Store app. Workflow Studio is part of the ServiceNow AI Platform® and is available by default. Get the latest Workflow Studio features by downloading the latest Workflow Studio app in the ServiceNow Store, as well as related applications like Process Automation Content and Process Automation Experience Demo. The Playbooks application can be downloaded for patch fixes.</p>\n<p>To use playbook generation features in Workflow Studio, download the <a href=\"https://www.servicenow.com/docs/access?context=now-assist-for-creator-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for Creator</a> application. To use Agentic Playbooks, enable it through Now Assist.</p>\n<p>Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-playbook-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Policy and Compliance Management",
    "type": "New feature",
    "products": [
      "IRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=concept_cob_workflow&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Control objective workflow</a></strong></p>\n<p>Aftr upgrading Policy and Compliance Management to 22.0.1, the new Control objective workflow feature introduces a structured lifecycle for managing control objective records. This feature is controlled by the Enable Control Objective Workflow property under Policy and Compliance > Properties and is disabled by default.</p>\n<p>Key highlights:</p>\n<ul>\n<li>When disabled, only the State field is added to control objective records. Active records show Published, inactive records show Retired, and new records default to Draft.</li>\n<li>When enabled, control objectives move through: Draft, Review, Approved, Current version, and Retired. The following new fields are also introduced: State, Effective date, Revision type, and Record nature.</li>\n<li>Editing a published control objective creates a working draft, keeping the published record active until approved changes are published.</li>\n<li>Users must select a revision type: Major or Minor. A Major revision moves associated controls back to Draft. A Minor revision applies updates without moving controls back to Draft.</li>\n<li>The Owner and Owning Group fields control who can edit the control objective and perform workflow actions.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-policyandcompliancemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Policy and Compliance Management",
    "type": "New feature",
    "products": [
      "IRM",
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=take-actions-on-the-recommendations-for-similar-control-objectives&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Rationalizing Unified Compliance Framework (UCF) control objectives</a></strong></p>\n<p>After upgrading Policy and Compliance Management to 22.0.1, both Unified Compliance Framework (UCF) control objectives and non-UCF control objectives can be rationalized together. Key highlights include:</p>\n<ul>\n<li>Recommendation cards show a Source field to indicate whether it originates from UCF or a non-UCF source.</li>\n<li>As UCF control objectives cannot be deactivated, the Identify Duplicates and Finalize sub-states guide the users to retain the UCF control objective. Any UCF recommendations that are not retained are automatically dismissed when the user requests review.</li>\n<li>Only one UCF control objective can be retained at a time. If you retain a different UCF control objective, the previously retained one is automatically dismissed.</li>\n<li>When rationalization is complete, the retained UCF control objective stays active, accepted non-UCF recommendations are deactivated, and any dismissed UCF control objectives remain active and unchanged.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-policyandcompliancemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Portfolio Planning",
    "type": "New feature",
    "products": [
      "SPM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=demand-workspace-ppw&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Next Experience for Demand Management</a></strong></p>\n<p>Manage strategic and operational demands in a unified experience in Portfolio Planning. This Next Experience interface consolidates demand creation, assessment, collaboration, and conversion in one place, eliminating context switching and reducing reliance on the classic Demand Workbench.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-portfolioplanning-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Portfolio Planning",
    "type": "New feature",
    "products": [
      "SPM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=managing-demands-ppw&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create and manage demands in Next Experience for Demand Management</a></strong></p>\n<ul>\n<li>Create and manage a demand in Next Experience for Demand Management using guided tabs. These tabs help you define alignment, estimate costs, and confirm readiness as you build out the demand.</li>\n<li>Collaborate on demands through Docs, which syncs execution and planning.</li>\n<li>View, add, and edit cost plans and budgeting details using related lists.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-portfolioplanning-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Portfolio Planning",
    "type": "New feature",
    "products": [
      "SPM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=use-playbooks-in-ppw&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Use Playbook in Next Experience for Demand Management</a></strong></p>\n<p>Help teams manage demands with greater structure and consistency using Playbook in Next Experience for Demand Management.</p>\n<p>Playbooks enable you to define multiple governance processes across the organization using a low‑code/no‑code configuration experience. Create clear stages and guided activities from demand intake to completion by using a default playbook or creating a custom playbook to support your organization’s multiple demand management processes.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-portfolioplanning-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Portfolio Planning",
    "type": "New feature",
    "products": [
      "SPM",
      "UI",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=use-playbooks-in-ppw&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Associate AI systems with demands in Next Experience for Demand Management</a></strong></p>\n<p>Use a playbook activity in Next Experience for Demand Management to associate AI systems with a demand. You can link impacted systems and add new ones directly within the demand workflow.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-portfolioplanning-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Portfolio Planning",
    "type": "New feature",
    "products": [
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=work-prioritization-portfolio-planning&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Portfolio plan enhancements</a></strong></p>\n<ul>\n<li>Access the Hierarchy tab directly from the Planning page, located next to the Prioritization tab. This new placement replaces the previous access point within the Prioritization tab, providing a more efficient way to view and manage planning items.</li>\n<li>View planning items in the new Hierarchy tab on the Planning page, now sorted using global rank when available. Drag and drop is supported for lowest‑level items, enabling you to rerank them within their groups.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-portfolioplanning-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Portfolio Planning",
    "type": "New feature",
    "products": [
      "SPM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=using-financials-spw&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Financials for planning items</a></strong></p>\n<ul>\n<li>Migration of financial baselines:</li>\n</ul>\n<p>    - Migrate the financial baselines of projects, which includes investment currency support.</p>\n<p>    - While migration, financial baselines include actuals, costs, benefits, and budget values from the project currency to the investment currency.</p>\n<ul>\n<li>Streamlined currency fields while using multicurrency:</li>\n</ul>\n<p>    - New and existing customers see only investment currency fields in demand and project records.</p>\n<p>    - Planned costs, actual costs, planned benefits, actual benefits, and budget fields are included in the financial baselines.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-portfolioplanning-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Predictive Intelligence",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITOM",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=predictive-intel-usage-analytics&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Predictive Intelligence Usage Analytics dashboard</a></strong></p>\n<p>Usage Analytics dashboard is a central location to understand the adoption, effectiveness, and overall value of all your Predictive Intelligence solutions. Dashboard widgets offer several metrics such as total monthly count of predictions per solution type.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-predictiveintelligence-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Privacy Management",
    "type": "New feature",
    "products": [
      "IRM",
      "HR",
      "HRSD"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=report-privacy-case-anonymously&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Report a privacy case anonymously</a></strong></p>\n<p>Employees can now use the Anonymous Reporting Center to report privacy violations such as data breaches or exposure, unauthorized data use, privacy law violations (GDPR, CCPA), or other privacy-by-design lapses without revealing their identity or location.</p>\n<p>Accessed through the Employee Center, the Anonymous Reporting Center portal automatically logs users out to enforce anonymity, creates case records without mapping to employee identity, and provides a unique report key for secure follow-up communication.</p>\n<p>Reports are routed to the appropriate compliance team based on the nature of the concern. Throughout the investigation process:</p>\n<ul>\n<li>Investigators can request additional information through a comments system visible to the reporter</li>\n<li>Reporters can follow up on their case using their report key to check progress and respond to questions</li>\n<li>All interactions maintain reporter anonymity at every step; no identity or location data is ever captured or linked</li>\n</ul>\n<p>This enhancement enables organizations to build trust, mitigate risks before escalation, and ensures regulatory compliance with whistleblower protection requirements.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-privacymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Privacy Management",
    "type": "New feature",
    "products": [
      "IRM",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=privacy-case-summarization-skill&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Case summarization for privacy cases</a></strong></p>\n<p>Privacy analysts can now use the Now Assist case summarization feature to quickly understand a privacy case without manually reviewing every field or related list. Now Assist analyzes key case attributes, such as timelines, impacted areas, evidence, and actions, and generates a structured summary directly inside the privacy case. This solves a common problem: case data is often lengthy, scattered across multiple related lists, and difficult for analysts to digest efficiently. Analysts can also save and edit summaries as case data evolves, ensuring the record stays current.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-privacymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Privacy Management",
    "type": "New feature",
    "products": [
      "IRM",
      "SecOps",
      "CMDB"
    ],
    "details": "<p><strong>Data lineage enhancement</strong></p>\n<p>The data lineage enhancement enables privacy teams to identify which systems, vendors, and applications belong to a specific processing activity by marking relationships as “part of a processing activity.” This differentiates scoped components from global or shared connections. Users can toggle between a processing‑activity‑scoped view and a full lineage view, helping them understand data flows in the appropriate context.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-privacymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Privacy Management",
    "type": "New feature",
    "products": [
      "IRM"
    ],
    "details": "<p><strong>Privacy regulatory content</strong></p>\n<p>The privacy regulatory content through Unified Content Management provides pre‑built authority documents, citations, control objectives, and risk statements aligned with major privacy frameworks, including GDPR, CCPA, LGPD, DPDPA, and the NIST Privacy Framework 1.0. These resources are available for download directly from the Privacy Workspace, enabling teams to readily access standardized regulatory content.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-privacymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Process Mining",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITOM",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=export-to-playbook&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Parallel processing for playbook data introduced</a></strong></p>\n<p>Analyze ServiceNow Playbooks, including their stages and individual activities using Process Mining. This capability enables Playbook authors and business process owners to do performance evaluations and optimize Playbooks.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-processmining-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Process Mining",
    "type": "New feature",
    "products": [
      "ITSM",
      "HR",
      "CSM",
      "ITOM",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=rule-based-builder&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Process Step filter (Previously Transition filter) & Rule-based Findings enhanced</a></strong></p>\n<p>Unlock new use cases and drive better process optimization outcomes through the enhanced process step filter and rule-based findings.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-processmining-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Process Mining",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Now Assist",
      "AI Platform",
      "ITSM",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Intent and Activity analysis available with Now Assist</a></strong></p>\n<p>Efficiently summarize (human) agent tasks and their sequence in relation to problem types so you can pinpoint areas for improvement and take concrete actions to optimize your processes.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-processmining-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Process Mining",
    "type": "New feature",
    "products": [
      "ITOM",
      "Now Assist",
      "AI Platform",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=set-objectives&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Mine Agentic AI logs</a></strong></p>\n<p>Create a Process Mining project on Agentic AI data logs by selecting the designated source from a readily available template.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-processmining-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Process Mining",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITOM",
      "CSM",
      "HRSD",
      "AI Platform",
      "Now Assist",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=task-mining&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Integration with Task Mining</a></strong></p>\n<p>Gain insights on the time the workstation users spend and how they accomplish tasks by analyzing their activities. Uncover inefficiencies, standardize best practices, and identify automation opportunities. You can create a Task Mining project from Opportunity details page and Analyst workbench of Process Mining.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-processmining-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Process Mining",
    "type": "New feature",
    "products": [
      "ITSM",
      "HR",
      "ITOM",
      "CSM",
      "AI Platform",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=automated-findings&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">New automated findings introduced</a></strong></p>\n<p>Use the following automated findings to identify improvement opportunities where records follow specific patterns:</p>\n<ul>\n<li>Extreme duration (Node): Identifies patterns where records stay in a step for a significantly longer duration than usual</li>\n<li>High touchpoints (Node): Identifies patterns where a group of records in a step gets updated more often compared to another group to progress to any next step.</li>\n<li>Extreme touchpoints (Node): Identifies patterns where a step requires unusually large number of record updates than the normal range to progress to any next step.</li>\n<li>Slow duration (Node): Identifies patterns where a group of records stays longer in a step than the average duration of another group.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-processmining-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Process Mining",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITOM",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=filter-project&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Multidimensional projects filters</a></strong></p>\n<p>Make analysis easier by filtering multidimensional projects based on child breakdowns and variants as a substitute for filtering on child attributes.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-processmining-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Process Mining",
    "type": "New feature",
    "products": [
      "SecOps",
      "ITOM",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=evaluation-security&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Evaluation project for security operations available</a></strong></p>\n<p>Try out an evaluation project for security incidents, which can provide improvement opportunities based on assignment group changes, time analysis, priority escalations, and automated indicators such as repeated states and assignment groups. You can target a maximum of 3.6K records that have been closed in the last seven days.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-processmining-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Process Mining",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITOM",
      "ITSM",
      "CSM",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=analyst-workbench-dashboard&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Introduced views to the Platform Analytics workspace for Process Mining</a></strong></p>\n<p>Display specific activity definitions within the Platform Analytics workspace for Process Mining using views. When working with graphs that contain multiple activity definitions, views help filter the map to show only activities relevant to the problem being analyzed.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-processmining-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Process Mining",
    "type": "New feature",
    "products": [
      "Core Platform",
      "AI Platform",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=opportunity-details&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Multidimensional maps are supported on the Opportunity details page and Platform Analytics components</a></strong></p>\n<p>Quickly analyze process maps with multiple tables through multidimensional maps on the Opportunity details page and Platform Analytics component of Process Mining.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-processmining-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Process Mining",
    "type": "Change",
    "products": [
      "ITOM",
      "CSM",
      "HR",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=automated-findings&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Automated finding names updated</a></strong></p>\n<p>The following automated finding names have been updated to include \"Transition\" in the name:</p>\n<ul>\n<li>Slow duration (Transition)</li>\n<li>Extreme duration (Transition)</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-processmining-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Process Mining",
    "type": "Change",
    "products": [
      "Core Platform",
      "ITSM",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=po-roles&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Role names changed</a></strong></p>\n<p>Role names in Process Mining that previously included \"optimization\" have been updated to use the term \"mining\" instead. For example, the sn\\_process\\_optimization\\_admin role has been renamed sn\\_process\\_mining\\_admin.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-processmining-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Process Mining",
    "type": "Removed",
    "products": [
      "Now Assist",
      "Core Platform"
    ],
    "details": "<p>You no longer require the now.assist.creator role to access Now Assist features in the Creator Pro Plus package. However, you must enable the relevant Process Mining skill, which serves as the necessary prerequisite. Additionally, you should have appropriate access to the project.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-processmining-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Product Catalog Management and Pricing Management",
    "type": "Important Information for upgrading",
    "products": [
      "OTSM",
      "SPM",
      "CSM"
    ],
    "details": "<p>Pricing Management v16.0.0 provides a default pricing plan that includes changes to support pricing strategies introduced in this release. If you've been using a custom pricing plan from an earlier release, after upgrading to Pricing Management v16.0.0, the default pricing plan is in a Retired state. Determine whether you want to publish the default pricing plan for use or customize it.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-productcatalogmanagementandpricingmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Product Catalog Management and Pricing Management",
    "type": "New feature",
    "products": [
      "SPM",
      "CSM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=product-catalog-managment&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Product families</a></strong></p>\n<p>Create product families to provide hierarchical classification similar to category trees. For example, you can use product families to roll up or aggregate measurable items, such as revenue forecasts for reporting or business insights.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-productcatalogmanagementandpricingmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Product Catalog Management and Pricing Management",
    "type": "New feature",
    "products": [
      "CSM",
      "OTSM",
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=som-create-pricing-adjustment&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Multi-attribute pricing rules</a></strong></p>\n<p>Display attribute-based pricing on transaction lines, where the offer price is determined by the combination of attributes, by setting up attribute-based pricing for product offerings based on multiple, combined attributes using the Attribute Adjustment matrix.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-productcatalogmanagementandpricingmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Product Catalog Management and Pricing Management",
    "type": "New feature",
    "products": [
      "CSM",
      "SPM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=pricing-management&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Blended pricing support for contract renewals</a></strong></p>\n<p>Enable sales agents to apply automatically calculated blended unit prices for renewals, based on the existing product price and the renewal uplift required. Blended pricing is used in upsell and down-sell scenarios and in contract line consolidation.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-productcatalogmanagementandpricingmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Product Catalog Management and Pricing Management",
    "type": "Change",
    "products": [
      "CSM",
      "SPM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=using-product-catalog&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Product catalog interface enhancement</a></strong></p>\n<p>Quickly identify products with derived pricing through product tiles that display a message stating that the product price varies. Pricing is calculated and updated automatically based on selections made.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-productcatalogmanagementandpricingmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Product Catalog Management and Pricing Management",
    "type": "Change",
    "products": [
      "CSM",
      "CRM",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configuring-related-product-pricing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Derived pricing enhancements</a></strong></p>\n<ul>\n<li>The Derived Pricing Matrix supports the following enhancements:</li>\n</ul>\n<p>    - Conditions defined on product offering fields for both source and target product offerings</p>\n<p>    - Predefined formulas for setting floor and ceiling price controls to maintain acceptable price ranges</p>\n<ul>\n<li>Visibility into how the final price for derived products is determined.</li>\n<li>Support for account-level scope, which uses both cart items and sold products when calculating derived prices.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-productcatalogmanagementandpricingmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Product Catalog Management and Pricing Management",
    "type": "Change",
    "products": [
      "CRM",
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=defining-products-with-ramps&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Price and quantity ramp enhancements</a></strong></p>\n<ul>\n<li>Enable sales agents to create custom ramp type segments for quotes. Agents can view the cumulative price of product offers across all ramp segments.</li>\n<li>View ramps inside the CPQ Configurator.</li>\n<li>Enable sales agents to create ramps for quotes with amendments, contract renewals, and cancellations.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-productcatalogmanagementandpricingmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Product Catalog Management and Pricing Management",
    "type": "Change",
    "products": [
      "CSM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=net-pricing-sp-contracts&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Delta pricing enhancement</a></strong></p>\n<p>Show the delta pricing view in the CPQ Configurator during modify and amend flows.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-productcatalogmanagementandpricingmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Product Catalog Management and Pricing Management",
    "type": "Change",
    "products": [
      "Core Platform",
      "SPM",
      "CSM",
      "OTSM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configuring-pricing-plan&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configurable pricing plan enhancement</a></strong></p>\n<p>The Floor and Ceiling Calculation step in the default pricing plan applies the minimum and maximum prices for a product or service to help prevent pricing that isn't competitive or results in poor margins.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-productcatalogmanagementandpricingmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Product Support for Technology",
    "type": "New feature",
    "products": [
      "CSM",
      "FSM",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=account-360-analytics-dashboard&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Service delivery overview</a></strong></p>\n<p>Use Service Delivery Overview L1 menu to access the analytics dashboards. The Service Delivery Overview enables you to access charts and summary data on metrics such as proactive cases, account escalations, SLAs, channels used, core KPIs, and more. The Service Delivery Overview page is available in Service Operations Workspace in all releases. For CSM/FSM Configurable Workspace, it is available only in the Zurich and Australia releases.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-productsupportfortechnology-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Product Support for Technology",
    "type": "Removed",
    "products": [
      "CSM",
      "UI"
    ],
    "details": "<p>The Analytics tab is removed from the customer account view.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-productsupportfortechnology-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Product Support for Technology",
    "type": "Activation Information",
    "products": [
      "CSM",
      "ITSM",
      "ITOM"
    ],
    "details": "<p>Install Product Support for Technology and Proactive Service Experience Workflows by requesting them from the ServiceNow® Store.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-productsupportfortechnology-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Project Portfolio Management ",
    "type": "New feature",
    "products": [
      "SPM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c_DemandManagement&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Admin role enhancements in Demand Management</a></strong></p>\n<ul>\n<li>Enabling all users to create ideas with a minimum read role added to the <strong>com.snc.idea.universal\\_request.copy\\_fields</strong> system property.</li>\n<li>The <strong>com.snc.idea.universal\\_request.copy\\_fields</strong> system property can be updated only by users with the idea\\_admin or pps\\_admin roles.</li>\n<li>Help ensure that only authenticated users have access to the bubble chart workbench through the UserIsAuthenticated condition added to the bubble chart workbench ACL (access control list).</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-projectportfoliomanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Project Portfolio Management ",
    "type": "New feature",
    "products": [
      "SPM",
      "AI Platform",
      "Now Assist",
      "AI Governance",
      "AI Control Tower"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=associate-ai-systems-with-demands&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Associate AI systems with demands in Demand Management</a></strong></p>\n<p>Add and manage AI system associations directly from the <strong>AI Associations</strong> tab in Demand Management. You can select impacted AI systems or create AI systems using related links directly within the demand workflow.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-projectportfoliomanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Project Portfolio Management ",
    "type": "New feature",
    "products": [
      "SPM",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=demand-summary-demand-classic&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Summarize demand records with the demand summarization skill</a></strong></p>\n<p>Generate a concise, structured summary of any demand using the demand summarization skill through the <strong>Summarize</strong> button in the demand form. The skill reviews the demand fields and helps create a clear summary of the demand.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-projectportfoliomanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Project Portfolio Management ",
    "type": "New feature",
    "products": [
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=r_InstalledWithProjectManagement&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Admin role enhancements in Project Management</a></strong></p>\n<p>The Project properties can be edited only by users with the pps\\_admin role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-projectportfoliomanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Project Portfolio Management ",
    "type": "New feature",
    "products": [
      "SPM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=innovation-management-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Admin role enhancements in Innovation Management</a></strong></p>\n<ul>\n<li>The write role has been added for the <strong>idea.notification.sender.email</strong> and<strong> com.snc.innovation\\_management.im\\_editor\\_attachment\\_tag\\_id</strong> system properties.</li>\n<li>The <strong>idea.notification.sender.email</strong> and <strong>com.snc.innovation\\_management.im\\_editor\\_attachment\\_tag\\_id</strong> system properties can be added or updated only by users with idea\\_admin roles.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-projectportfoliomanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Project Portfolio Management ",
    "type": "Change",
    "products": [
      "SPM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=demand-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Next Experience for Demand Management</a></strong></p>\n<p>The new Next Experience for Demand Management provides a unified layout, guided stages, improved navigation, and enhanced capabilities such as Playbooks and Docs integration. As you move to Next Experience for Demand Management, you’ll find it easier to create, review, and manage demands with a cleaner layout and guided actions. The classic UI is still available, but new improvements will appear in the workspace.</p>\n<p>Next Experience for Demand Management is available with the Strategic Portfolio Management (SPM) Standard and Pro licenses.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-projectportfoliomanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Project Portfolio Management ",
    "type": "Removed",
    "products": [
      "SPM",
      "Core Platform"
    ],
    "details": "<p>The permission to edit the value of the <strong>dmn\\_stakeholder\\_register.number</strong> field in the Stakeholder Register [dmn\\_stakeholder\\_register] table has been removed for the admin role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-projectportfoliomanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Project Portfolio Management ",
    "type": "Removed",
    "products": [
      "SPM",
      "UI",
      "Core Platform"
    ],
    "details": "<p>The admin role ACL has been removed for the bubble chart workbench.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-projectportfoliomanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Project Portfolio Management ",
    "type": "Removed",
    "products": [
      "SPM",
      "ITSM",
      "Core Platform"
    ],
    "details": "<p>The duplicate app module that was created for the admin role has been removed.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-projectportfoliomanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Project Workspace",
    "type": "New feature",
    "products": [
      "SPM",
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=r_InstalledWithProjectManagement&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Admin role enhancements</a></strong></p>\n<p>Project properties can be edited only by users with the pps\\_admin role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-projectworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Project Workspace",
    "type": "New feature",
    "products": [
      "SPM",
      "ITAM",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-asset-project-requests-pw&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create an Asset Project Request from Project Workspace</a></strong></p>\n<ul>\n<li>Create and track the number of requests with project reference or requests which are created as part of an SPM project.</li>\n<li>Provide portfolio and project managers with visibility into the status of associated hardware requests.</li>\n<li>Enable project-based tracking of hardware requests, improving traceability across project plans.</li>\n<li>Help portfolio or project managers quickly understand which asset requests are tied to the project and track their current status.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-projectworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Project Workspace",
    "type": "New feature",
    "products": [
      "SPM",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=assign-approve-unassigned-work-pw&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Manage resources directly in Project Workspace using interoperability</a></strong></p>\n<ul>\n<li>View assigned and unassigned work from the embedded resource board.</li>\n<li>Assign unassigned work using automatic or manual effort distribution.</li>\n<li>Preview real-time effort allocations before assigning work.</li>\n<li>Identify resource availability and overutilization using visual indicators.</li>\n<li>Approve, unapprove, or reprioritize assignments by updating the resource status directly from the resource board.</li>\n<li>Extend or update assignments, including assignments for unassigned tasks, without leaving Project Workspace.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-projectworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Public Sector Digital Services",
    "type": "Important Information for upgrading",
    "products": [
      "CSM",
      "UI",
      "WSD"
    ],
    "details": "<p>After the upgrade, certain public sector menus and menu items in CSM Configurable Workspace revert to their original CSM label names. You can relabel these items for public sector use by updating the labels for the Customer, Accounts, and Service Organizations UX list category records. For more details on relabeling, navigate to <strong>All</strong> > <strong>Constituent Service</strong> > <strong>Administration</strong> > <strong>Guided Setup</strong>, and select <strong>Configurable Workspace for Public Sector Digital Services</strong> > <strong>Customize Workspace Labels Manually</strong>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-projectworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Public Sector Digital Services",
    "type": "New feature",
    "products": [
      "CSM",
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=psds-explore-inv-case-management&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Investigative Case Management</a></strong></p>\n<p>Create an investigative case from a lead, safety incident, inspection, or audit using Investigative Case Management. Investigative Case Management guides investigators through the process of organizing, tracking, and resolving investigations, ​developing case details,​ assigning investigators and team members​, and track evidence with logging and metadata. The following applications are available as part of Investigative Case Management:</p>\n<ul>\n<li>Investigative Case Management</li>\n<li>Investigative Case Management: Entity Management</li>\n<li>Investigative Case Management: Evidence Management</li>\n</ul>\n<p>With Entity Management, investigators can create investigative tasks and workflows for investigative activities with automated metadata capture (time, source, entities, classification)​, as well as define processing with teams and attorneys and collaborate across agencies/divisions. With Evidence Management, investigators can log and triage evidence metadata (digital, physical, testimonial)​ and maintain an audit trail, as well as draft, review, and create reports with supporting evidence​​.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-projectworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Public Sector Digital Services",
    "type": "New feature",
    "products": [
      "Now Assist",
      "CSM",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-psds-using&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Use Now Assist for Public Sector Digital Services (PSDS) Skills to create case narratives and screen documents</a></strong></p>\n<p>Complete case narratives and make refinements to investigative case records using the Al Agents, part of the Public Sector Digital Services AI Agent Collection. Investigators can streamline case creation using the narrative creation AI agent​ to convert documents into ready-to-edit case narrative drafts, as well as edit, adjust tone, and regenerate narrative content for clarity and completeness.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-projectworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Public Sector Digital Services",
    "type": "New feature",
    "products": [
      "Now Assist",
      "AI Platform",
      "AI Search"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=psds-ai-agent-doc-screening&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Document Screening AI Skill for Playbooks</a></strong></p>\n<p>Validate large volumes of uploaded documents, verify information, flag issues, and highlight key details for case agents with the Document Screening Al Skill, used with Now Assist for Public Sector Digital Services (PSDS).</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-projectworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Public Sector Digital Services",
    "type": "New feature",
    "products": [
      "CSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=roles-installed-with-public-sector-digital-services&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Granular configuration admin roles</a></strong></p>\n<p>Several new granular admin roles enable admins to complete administrative configuration tasks on the Public Sector Digital Services platform without requiring the full admin role. These granular access roles enable a high-level administrator to define and assign custom roles that contain only the specific permissions a user needs, decreasing the number of users with full administrative power over the instance. For more information on granular admin roles, see <a href=\"https://www.servicenow.com/docs/access?context=granular-admin-roles&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Granular admin roles</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-projectworkspace-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Purchase Order Management",
    "type": "New feature",
    "products": [
      "ITSM",
      "ITAM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-po-exception-universal-req&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create purchase order exception from Universal Request</a></strong></p>\n<p>Enable buyers to convert universal requests that were generated by the Create purchase order exception via email agentic workflow into purchase order exception records. When emails processed by the workflow lack sufficient context to be automatically converted to purchase order exception records, the workflow creates universal request records. After manual review, buyers can turn universal requests into purchase order exception records.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-purchaseordermanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Purchase Order Management",
    "type": "New feature",
    "products": [
      "FSM",
      "ITAM",
      "ITSM",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=assign-a-poe-task-to-a-collaborator&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create and assign a purchase order exception task</a></strong></p>\n<p>Create tasks directly from a purchase order exception and assign these tasks to operational buyers or collaborators. Buyers can also track tasks directly from a purchase order exception.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-purchaseordermanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Purchase Order Management",
    "type": "New feature",
    "products": [
      "ITSM",
      "ITAM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=purch-order-exception-details&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Updated visualization of purchase order exceptions</a></strong></p>\n<p>View the expanded New activity today section on the Purchase order management landing page, reassign exceptions, and view additional details in the Exception intelligence section. Suppliers can also apply filters to purchase order line lists, enabling quick identification of relevant orders.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-purchaseordermanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Purchase Order Management",
    "type": "New feature",
    "products": [
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=convert-emails-to-exceptions&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Automated purchase order exception creation from emails</a></strong></p>\n<p>Convert supplier emails into purchase order exceptions when a registered supplier contact sends emails to a supplier inbox. Purchase order exceptions are created for all purchase order queries and assigned to the operational buyer. For queries unrelated to purchase order exceptions, a universal request record is created.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-purchaseordermanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Purchase Order Management",
    "type": "New feature",
    "products": [
      "SPM",
      "Now Assist",
      "AI Platform",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=mitigation-strategies-for-po-exceptions&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Identify and execute mitigation strategies for purchase order exceptions</a></strong></p>\n<p>Use the define PO exception mitigation strategy agentic workflow to identify and execute mitigation strategies by analyzing delivery gaps and proposing order changes with alternative suppliers.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-purchaseordermanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Quote Management",
    "type": "New feature",
    "products": [
      "CRM",
      "CSM",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=consolidate-quotes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Consolidate quotes</a></strong></p>\n<p>Maintain traceability from orders to all originating contract lines when creating orders from consolidated quotes. Additional calculated fields on order lines provide visibility into uplift values derived from consolidation rules.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-quotemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Quote Management",
    "type": "New feature",
    "products": [
      "OTSM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=add-price-ramps-on-a-quote-line-item&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Add price ramps on a quote line item</a></strong></p>\n<p>Enable agents to create and manage custom ramp structures with flexible segment durations. Make ramp changes across the quote lifecycle, including amendments and renewals, while maintaining pricing and quantity consistency across ramp segments.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-quotemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Quote Management",
    "type": "New feature",
    "products": [
      "SPM",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=explore-advanced-approval-for-sales&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Quote approvals</a></strong></p>\n<p>Use the Advanced Approval Management to create approval workflows for end-to-end visibility and control of quote approvals.</p>\n<ul>\n<li>Track approval status, steps, sequencing, approvers, and comments in real time</li>\n<li>Manage quote states and edit permissions automatically as quotes move through Draft, In Review, Approved, and Rejected states</li>\n<li>Receive email notifications for approvers and requesters as approval actions are taken</li>\n<li>Configure approval conditions and sequencing across quotes, quote lines, and related entities using serial, parallel, or hybrid flows driven by business and compliance rules</li>\n<li>Preserve approval history across submissions and quote versions for a complete audit trail</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-quotemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Quote Management",
    "type": "New feature",
    "products": [
      "CRM",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://servicenow-preproduction.fluidtopics.net/access?context=create-new-quote&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Customer entities on Quote</a></strong></p>\n<p>Capture the deal type (Direct or Indirect deals) and align it with different routes to market for consistency, compliance, and operational efficiency across systems and teams.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-quotemanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Recommended Actions for HRSD",
    "type": "New feature",
    "products": [
      "HRSD",
      "Now Assist",
      "AI Search",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=recommended-actions-hrsd&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Recommended Actions for HRSD</a></strong></p>\n<p>Help HR agents resolve cases more quickly by listing relevant KB articles and similar cases in the context of the current case. Provide agents with an optimal action such as a suggestion to add an approval to the case if needed.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-recommendedactionsforhrsd-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Recommended Actions for HRSD",
    "type": "Activation Information",
    "products": [
      "HRSD",
      "Now Assist"
    ],
    "details": "<p>Install Recommended Actions for HRSD by requesting it from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-recommendedactionsforhrsd-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Recommended Actions for Operational Technology Service Management (OTSM)",
    "type": "New feature",
    "products": [
      "OTSM",
      "Now Assist",
      "ITSM",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=use-ai-enhanced-ra-otsm&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Contextualize an external document</a></strong></p>\n<p>Contextualize an external document to get an explanation of why the document is relevant to the selected OT incident.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-recommendedactionsforoperationaltechnologyservicemanagementotsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Retail",
    "type": "Activation Information",
    "products": [
      "CSM",
      "Core Platform",
      "WSD"
    ],
    "details": "<p>Install the Retail applications by requesting them from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-retail-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "RPA Hub",
    "type": "Important Information for upgrading",
    "products": [
      "Core Platform",
      "App Engine",
      "Integrations",
      "Now Assist",
      "AI Platform",
      "Developers"
    ],
    "details": "<p>Upgrade any of these currently installed Microsoft Software Installers (MSIs) by downloading the RPA applications:</p>\n<ul>\n<li>RPA Desktop Design Studio</li>\n<li>Attended Robot</li>\n<li>Unattended Robot</li>\n<li>Unattended Robot Login Agent</li>\n</ul>\n<p>For more information, see <a href=\"https://www.servicenow.com/docs/access?context=download-installer-rpa&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Download the RPA applications from RPA Hub</a>.</p>\n<p>The following upgrade information is applicable only when you’re upgrading from San Diego or Tokyo to Australia.</p>\n<p>Based on the number of records in the application file table, you may experience a delay while upgrading the RPA Hub applications from Tokyo or earlier releases to Australia.</p>\n<p>Before upgrading RPA Hub to Australia, you must set the value of the <strong>glide.rollback.blacklist.TableParentChange.change</strong> system property to <strong>false</strong>. If this property doesn't exist in the System Property [sys\\_properties] table, add the property and set its value to false. For more information on how to add a property, see <a href=\"https://www.servicenow.com/docs/access?context=t_AddAPropertyUsingSysPropsList&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Add a system property</a>.</p>\n<p>After you upgrade to Australia, the bot process definitions change to the new structure, which is the bot process configuration.</p>\n<p>Although the bot process configuration doesn't replace the bot process completely, most fields are moved from the bot process to the bot process configuration. If you upgrade to Australia without updating the system property value, the tables don’t extend the Application File [sys\\_metadata] table. To update the table changes manually, see the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB1223629\" target=\"_blank\" rel=\"noopener noreferrer\">Restructuring RPA Hub tables to sys\\_metadata in Utah and beyond release KB1223629</a> article in the Now Support Knowledge Base.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-rpahub-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "RPA Hub",
    "type": "New feature",
    "products": [
      "ITOM",
      "AI Platform",
      "Core Platform",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=use-general-try-catch&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Try catch component enhancement</a></strong></p>\n<p>You can now precisely control the scope of Try-Catch blocks by selecting which actions (components) to include within exception handling and which to manage outside it. This enhancement provides better control over error handling logic and improves workflow reliability.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-rpahub-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Sales Forecasting",
    "type": "New feature",
    "products": [
      "SPM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=using-sales-forecasting&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Real-time Forecast Rollup Updates</a></strong></p>\n<p>Enhance forecast accuracy, reduce latency in pipeline views, and support faster, more informed decision‑making by triggering on‑demand recalculation for your hierarchy without having to wait for scheduled jobs.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-salesforecasting-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Sales Forecasting",
    "type": "New feature",
    "products": [
      "CRM",
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-sales-forecasting&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configurable Forecast Owner & Rollup Owner</a></strong></p>\n<p>Improve parallel forecasting across different product lines or business structures by configuring Forecast Owner and Rollup Owner in the Forecast Model to define ownership and roll‑up responsibility.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-salesforecasting-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Sales Forecasting",
    "type": "New feature",
    "products": [
      "CRM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-forecast-model&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Support for multiple configurable forecast models</a></strong></p>\n<p>Define and manage forecasting rules beyond the default model by configuring up to ten forecast models to support different forecasting structures.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-salesforecasting-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Sales Forecasting",
    "type": "New feature",
    "products": [
      "SPM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-forecast-model&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Multi-Period Forecast Rollups within a Single Forecast Model</a></strong></p>\n<p>Achieve better planning and strategy by configuring and managing forecasting for multiple time periods (weekly, monthly, quarterly) within a single forecast model for flexible data reporting.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-salesforecasting-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Sales Territory Management",
    "type": "New feature",
    "products": [
      "CSM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=components-installed-sales-territory-management&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Sales Territory Management​ users</a></strong></p>\n<p>Activate the Sales Territory Management plugin to install the Sales Territory Member role for sales execution within assigned territories, with defined ownership, accountability, and territory‑based CRM record assignment.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-salesterritorymanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Center",
    "type": "New feature",
    "products": [
      "SecOps",
      "IRM"
    ],
    "details": "<p><strong>Accept risk for hardening settings</strong></p>\n<p>Accept risk for hardening settings that are not applicable to your organization's security requirements. When accepting risk, provide a mandatory justification and review the projected security score impact before saving your decision. The compliance status updates to <strong>Accepted Risk</strong> and reflects in all security score calculations. Use the <strong>Accept Risk Settings</strong> filter to quickly identify and manage all accepted risk items across your instance.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securitycenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Center",
    "type": "New feature",
    "products": [
      "SecOps",
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=granular-sc-roles&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Granular admin role for Security Center</a></strong></p>\n<p>The granular admin role enables developers and administrators to complete administrative configuration tasks for Security Center without requiring the full admin role.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securitycenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Center",
    "type": "New feature",
    "products": [
      "SecOps",
      "IRM",
      "AI Platform",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=access-controls-console&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Explore Access management console</a></strong></p>\n<p>Use the new Access Controls console within Security Center to review and remediate access issues and misconfigurations. The Access Controls console provides enhanced visibility and control of your Access Analyzer findings, and streamlines remediation efforts by enabling you to track, prioritize, and resolve access issues by assigning tasks.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securitycenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Center",
    "type": "New feature",
    "products": [
      "SecOps",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong>Enhanced IAM Integration in Security Center</strong></p>\n<p>Use the new Identity and Access Management (IAM) section in Security Center to access to critical IAM tools. The new section provides a comprehensive view of security metrics. This integration simplifies the administrative experience by bringing essential IAM functionality directly into Security Center, reducing the need to navigate multiple separate tools.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securitycenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Center",
    "type": "New feature",
    "products": [
      "SecOps",
      "Core Platform"
    ],
    "details": "<p><strong>Version-based hardening settings</strong></p>\n<p>Security Center now only shows hardening settings that apply to your instance’s family version. This change helps eliminate irrelevant recommendations and provides clearer guidance and a more accurate security experience.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securitycenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Center",
    "type": "Change",
    "products": [
      "SecOps",
      "Core Platform",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=security-hardening-settings&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Security Hardening tool Updates</a></strong></p>\n<p>The security Hardening tool has been updated to the latest Instance Security Hardening Settings V7.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securitycenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Incident Response",
    "type": "New feature",
    "products": [
      "SecOps",
      "Integrations",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=crowdstrike-next-gen-integration-secops&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">CrowdStrike Next-Gen SIEM integration</a></strong></p>\n<p>As a profile admin:</p>\n<ul>\n<li>Discover CrowdStrike Next-Gen SIEM detections that are candidates for security incidents and automate the creation of these security incidents.</li>\n<li>Create detection profiles.</li>\n<li>Map CrowdStrike Next-Gen SIEM detection and events fields to SIR security incident fields.</li>\n<li>Filter CrowdStrike Next-Gen SIEM defects.</li>\n<li>Aggregate detections to existing open security incidents so you don't have to create duplicate security incidents.</li>\n<li>Automate CrowdStrike Next-Gen SIEM detection status updates for Security Incident Response.</li>\n<li>Synchronize CrowdStrike Next-Gen SIEM detection comments with SIR Work notes.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Incident Response",
    "type": "New feature",
    "products": [
      "SecOps",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=installed-with-sir&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Components installed with Security Incident Response</a></strong></p>\n<p>A new Profile Admin role (sn\\_si.ingestion\\_profile\\_admin) provides access to configure plugins, and enables you to create, edit, delete, and manage profiles for Splunk ES, Splunk Enterprise Event Ingestion, and Microsoft Azure Sentinel integration for Security Operations application.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Incident Response",
    "type": "New feature",
    "products": [
      "SecOps",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=view-unmatched-affected-user-for-si&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Add unmatched affected user for security incidents</a></strong></p>\n<p>The new “Security Incident Unmatched Users” table captures unmatched affected user records for security incidents, enabling analysts to identify and address discrepancies when user records don't match existing system records.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Incident Response",
    "type": "New feature",
    "products": [
      "SecOps",
      "AI Platform",
      "Now Assist",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=sir-integration-builder-now-assist&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">LLM-powered SIR integration builder</a></strong></p>\n<p>With the latest LLM-powered integrations on the ServiceNow AI Platform, you can create product-ready integration quickly. The LLM-powered integration builder has the following capabilities:</p>\n<ul>\n<li>Automatically generates integration code from a public API documentation</li>\n<li>Provides guided setup built on existing capabilities</li>\n<li>Provides easy edit and maintenance of the generated auto code</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Incident Response",
    "type": "New feature",
    "products": [
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=mitre-d3fend-framework&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">MITRE D3FEND framework</a></strong></p>\n<p>Security administrators can now ingest MITRE D3FEND data. Security analysts can explore MITRE ATT&CK and D3FEND techniques through an interactive, node-based visualization that maps attack techniques, defense techniques, and related artifacts within a Security Incident Response record.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Incident Response",
    "type": "New feature",
    "products": [
      "SecOps",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-class-group-and-tags&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Preserve manual security tags and restrict removal</a></strong></p>\n<p>Manual security tags applied by analysts are preserved when automatic tagging rules execute on security incidents, avoiding inadvertent tag removal during automated processes. Analysts can no longer manually remove security tags once applied to an incident, ensuring tag consistency throughout the incident life cycle.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Incident Response",
    "type": "New feature",
    "products": [
      "SecOps",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=show-related-items-for-si&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Assign parent relationships to similar security incidents</a></strong></p>\n<p>Select multiple similar security incidents from the Similar Security Incidents related list and link them as children to the current security incident using the <strong>Link as children</strong> button.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Incident Response",
    "type": "New feature",
    "products": [
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=view-update-sirw-system-properties&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">View and update Security Incident Response system properties</a></strong></p>\n<p>View and update system properties specific to the Security Incident Response workspace directly from the workspace administration settings interface.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Incident Response",
    "type": "New feature",
    "products": [
      "SecOps",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-quick-filters-for-security-incidents&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create quick filters for Security Incidents and Response Tasks lists</a></strong></p>\n<p>Enable rapid filtering of security incident lists based on predefined criteria by creating and managing quick filters for the Security incident [sn.si.incident] and Response tasks [sn\\_si\\_task] tables within the SIR Workspace. Filters are stored in the Quick Filters [sn\\_si\\_aw\\_quick\\_filters] table.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Incident Response",
    "type": "New feature",
    "products": [
      "SecOps",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-auto-refresh-for-security-incident-lists&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure auto refresh interval for security incident lists</a></strong></p>\n<p>Set up refreshing of the security incident list at specified intervals by using the <code>sn_si_incident.auto_refresh_interval</code> system property. The default refresh rate is five minutes.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Incident Response",
    "type": "New feature",
    "products": [
      "SecOps",
      "IRM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=t_CreateResponseTask&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Control external user access to security incident</a></strong></p>\n<p>SOC users can grant read-only access to specific security incidents for defined external users through the <strong>Access to security incident</strong> field in the SIR workspace.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Incident Response",
    "type": "New feature",
    "products": [
      "SecOps",
      "Core Platform",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-default-landing-tab&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure default landing tab for security analysts</a></strong></p>\n<p>Customize the default landing tab for security analysts and security managers when they open a security incident.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Incident Response",
    "type": "New feature",
    "products": [
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=t_CreateResponseTask&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Compose emails from Response Tasks and Investigation tabs</a></strong></p>\n<p>Send emails without having to switch tabs by composing them directly from the Response Tasks and the Investigation tabs of a security incident.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Incident Response",
    "type": "New feature",
    "products": [
      "SecOps",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-default-view-for-contextual-menu&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure default view for contextual menu</a></strong></p>\n<p>Determine whether the contextual menu panel for a security incident is expanded or collapsed by default when a security analyst opens a security incident.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Security Incident Response",
    "type": "Change",
    "products": [
      "SecOps",
      "Core Platform",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-pir-assignment-rules&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Assign groups in PIR user assignment rules</a></strong></p>\n<p>User Assignment Rules for Post-Incident Review (PIR) assessments in the SIR module now support group-based assignment in addition to individual user selection. You can configure assignment rules using groups. The PIR automatically reflects group membership updates without requiring manual edits to the assignment rules configuration.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Self-service and omnichannel engagement for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "AI Platform",
      "UI",
      "Core Platform",
      "Developers",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=using-web-embeddables&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure Web Embeddables</a></strong></p>\n<p>Embed ServiceNow components into any third-party website or web application to extend the ServiceNow AI Platform capabilities. You can use a library of default configurable components or create custom components.</p>\n<p>You can configure and embed the following ServiceNow components on the third-party websites:</p>\n<ul>\n<li>Case list: Displays a comprehensive list of cases along with their key details.</li>\n<li>Case view: Shows a detailed view of case and case-related activities. You can display relevant playbooks when created for the case record.</li>\n<li>Case create: Displays a form to create a case to address issues related to products and services.</li>\n<li>Catalog item: Request Service Catalog items or services.</li>\n<li>Knowledge article view: Displays knowledge articles along with key details like title, content, author, view count, read time, and more. You can also rate the article and switch the display language.</li>\n<li>Data visualization: Shows a graphical representation of information from any ServiceNow AI Platform table using visual elements such as single score, pie, donut, and semi donut charts.</li>\n<li>Playbook intake: Enable your users to submit cases using the Playbook guided experience. Systematically capture case details and display stages, and activities involved in resolving the case.</li>\n<li>Catalog browse: Browse and search Service Catalog items from different catalogs and categories within a third-party website.</li>\n<li>Object list: Display records from different tables with their related actions in a list format.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Self-service and omnichannel engagement for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "Integrations",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=amazon-connect-for-voice-calls&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Amazon Connect for voice calls via ICC</a></strong></p>\n<p>Manage Amazon Connect calls in the CSM Configurable Workspace voice Interaction record. The integration supports inbound and outbound call flows, presence management, and transfers without switching applications.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Self-service and omnichannel engagement for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "UI",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=supervisor-monitoring-for-voice&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Supervisor call monitoring</a></strong></p>\n<p>Monitor, coach, and join agent calls from the CSM Configurable Workspace without having to switch to the CCaaS desktop. All supervisor actions are automatically logged for auditing and reporting purpose.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Self-service and omnichannel engagement for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "Now Assist",
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=agent-help-request-for-voice-calls&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Agent help request for voice calls</a></strong></p>\n<p>Empower agents to request supervisor assistance during calls by selecting the <strong>Help Request</strong> button. Agents can specify reasons why they are calling for help to provide more context to the supervisor before the supervisor responds, and receive notifications when supervisors coach or join. All help request data is captured for reporting for data-driven coaching.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Self-service and omnichannel engagement for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "Now Assist",
      "AI Search"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=ai-generated-wrap-up-codes-and-notes-summary&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Use AI to generate wrap up code and notes summary</a></strong></p>\n<p>Automatically suggest a wrap-up code and generate an interaction summary based on conversation transcripts by using Now Assist, which reduces manual documentation time and contributes to consistent record-keeping. Choose automatic or agent-initiated generation to fit your workflow.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Self-service and omnichannel engagement for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "AI Search",
      "Now Assist",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=use-consumer-portal&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Using the Consumer Portal</a></strong></p>\n<p>Support your consumers through the Consumer Portal self-service capabilities such as knowledge articles, service catalogs, case management, Virtual Agent, and others. These capabilities help reduce maintenance effort through low-code configurations on pages with configurable widgets.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Self-service and omnichannel engagement for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "UI",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=contact-center-intergration-with-icc-callback&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Native callback features</a></strong></p>\n<p>Callback management enables agents to schedule callbacks on behalf of customers. The key features include:</p>\n<ul>\n<li>Enable agents to schedule callbacks from any interaction or case.</li>\n<li>Equip agents to reschedule or cancel callbacks from the callback record page with proper state tracking.</li>\n<li>Facilitate agents to view scheduled callbacks in the list view so they can open the individual callback record page.</li>\n<li>Enable agents to view and manage scheduled callbacks for the current interaction or case in the contextual side panel.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Self-service and omnichannel engagement for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "Core Platform",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=using-email-interaction-page&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Email interaction feature: Wrap up of email interactions</a></strong></p>\n<p>Note the following capabilities introduced for wrapping up email interactions:</p>\n<ul>\n<li>Introduction of wrap‑up modal for Advanced Work Assignment (AWA) and CCaaS‑routed email interactions with internal wrap‑up codes configurable by admins.</li>\n<li>Automatic closure of inactive interactions with system-assigned wrap-up codes in multiple scenarios:</li>\n</ul>\n<p>    - When agents create a case from an email interaction.</p>\n<p>    - When the wrap-up modal times out without agent submission.</p>\n<p>    - When customers don’t respond within the defined follow-up period.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Self-service and omnichannel engagement for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=using-email-interaction-page&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Email interaction feature: Outbound Interaction from agent-initiated email</a></strong></p>\n<p>The new capabilities for outbound interactions initiated by agents through email are:</p>\n<ul>\n<li>Initiate outbound email interactions from contact or consumer records by selecting email addresses or using the Compose Email UI option, opening a modeless email composer with the recipient's email address auto populated.</li>\n<li>Automatic creation of Work‑In‑Progress (WIP) outbound email interactions when agents initiate an email to a customer.</li>\n<li>Preserve email drafts when agents navigate away, and automatically close interactions that show no sent or received email activity and contain only unsent drafts within a rolling 30‑day period. Any agent activity on the draft resets the 30‑day window.</li>\n<li>Consolidate multiple agent‑initiated drafts into a single, unified interaction within service workflows, with ownership assigned to the sending agent. You can optionally configure the system to create separate interactions for each draft for the same contact.</li>\n<li>Configurable reminder windows for sending automated reminder emails when customers don’t respond.</li>\n<li>Customer response notifications on the ongoing tab and interaction linking in contact or consumer related lists for seamless conversation tracking.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Self-service and omnichannel engagement for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=using-email-interaction-page&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Email interaction feature: Transfer Email Interactions routed by CCaaS</a></strong></p>\n<p>Transfer CCaaS‑routed email interactions to another agent or queue, improving accurate handoff and workload distribution.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Self-service and omnichannel engagement for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "UI",
      "Core Platform",
      "App Engine",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-csm-service-portals&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Customer Service Portal Base</a></strong></p>\n<p>Starting with the Australia release, the Customer Service Portal Base plugin (com.snc.csm\\_portal\\_base) has been migrated to the App Store as a standalone application. Future enhancements are delivered through the Customer Service Portal Base store app. This change improves packaging, versioning, and deployment flexibility for implementations that require portal framework, responsive design, case management, knowledge integration, and community features. The store app also includes email integration, translation support, attachment handling, and mobile enhancements.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Self-service and omnichannel engagement for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=actsub-api&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Subscriptions and Activity Feed Framework</a></strong></p>\n<p>Starting with the Australia release, the Subscriptions and Activity Feed Framework plugin (com.snc.subscriptions\\_activity\\_feed) has been migrated to the App Store as a standalone application. Future enhancements are delivered through the Subscriptions and Activity Feed Framework store app. This change improves packaging, versioning, and deployment flexibility for implementations that require subscription framework, activity tracking, notification preferences, or context management.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Self-service and omnichannel engagement for CSM",
    "type": "Change",
    "products": [
      "CSM",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=csm-walkup-experience&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Walk-Up for CSM</a></strong></p>\n<p>Starting with the Australia release, the Walk-up for CSM plugin (com.snc.walkup\\_for\\_csm) has been migrated to the App Store as a standalone application. Future enhancements are delivered through the Walk-up for CSM store app. This change improves packaging, versioning, and deployment flexibility for implementations that require subscription framework, activity tracking, notification preferences, or context management.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Catalog",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITSM",
      "UI",
      "CSM",
      "HRSD"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=set-up-cat-builder&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enable editing of catalog items by multiple users</a></strong></p>\n<p>Enable other users, who are added to the <strong>Secondary owner</strong> field, to edit catalog items. To enable these users, add people to the <strong>Secondary owner</strong> user-criteria field in the sc\\_cat\\_item and sc\\_cat\\_item\\_producer tables, enabling others to make changes to catalog items owned by another person.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Catalog",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITSM",
      "CSM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=configure-flow-sf-flow&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Define and add stages in fulfilment step</a></strong></p>\n<p>Define and add distinct stages and states in the fulfillment step when building a catalog item in Catalog Builder, enabling requesters to view the request-related current stages and their states together.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Catalog",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITSM",
      "UI",
      "CSM",
      "HRSD"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=set-up-cat-builder&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Use advanced UI policy capabilities in Catalog Builder</a></strong></p>\n<p>Configure catalog UI policies with scripts and multiple catalog UI policy actions in the Catalog Builder to facilitate the creation of complex catalog items. With these enhancements, catalog item creators can confidently take advantage of advanced options, simplifying and speeding up the entire catalog development process.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Catalog",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITSM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=service-catalog&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure variable visibility on multi-row variable set grids</a></strong></p>\n<p>Configure the visibility of a variable on the grid layout within a multi-row variable set (MRVS) for a catalog item by using the <strong>Hide on grid</strong> check box. By default, the check box is not selected.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Catalog",
    "type": "New feature",
    "products": [
      "Core Platform",
      "CSM",
      "ITSM",
      "ITOM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=service-catalog&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure update set prefix</a></strong></p>\n<p>Configure the update set prefix to set a custom name for the update set that gets generated automatically in Catalog Builder, making update sets easy to identify and track for consistency. Use the <strong>glide.sc.cb.item.update\\_set\\_prefix</strong> property to standardize update set names. By default, the property uses the value <strong>CB\\_${template\\_name}\\_${item\\_name}\\_${timestamp}</strong>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Catalog",
    "type": "New feature",
    "products": [
      "Core Platform",
      "UI",
      "CSM",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-ui-policies-in-catalog-builder&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Use UI Policy tab to add and manage the UI policies</a></strong></p>\n<p>Previously, when creating or editing a question in Catalog Builder, users could define UI policies or dynamic behavior by selecting the UI policies icon (). This option has been removed. Now, users must directly use the UI Policy tab to add and manage the UI policies (actions, conditions, scripts, and other required details) to the catalog item.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-securityincidentresponse-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Exchange (formerly Service Bridge)",
    "type": "Important Information for upgrading",
    "products": [
      "CSM",
      "Integrations",
      "Core Platform",
      "OTSM"
    ],
    "details": "<p><strong>Important:</strong></p>\n<p>Do not upgrade your ServiceNow® instance to the Australia release if you rely on Service Exchange. A known RPS issue prevents Service Exchange from functioning correctly. Proceed with the upgrade only after Australia Patch 1 becomes available.</p>\n<ul>\n<li>Service Exchange version 2.x.x, which was first released with the Xanadu release, doesn’t support migration of Service Exchange (Legacy) versions.</li>\n<li>Service Exchange (Legacy) version: Before you upgrade to the Australia release, consult the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB1499823\" target=\"_blank\" rel=\"noopener noreferrer\">Service Exchange for Providers (Legacy) - Migration Utility KB1499823</a> article in the Now Support Knowledge Base to find out how to migrate your configuration data.</li>\n<li>Service Exchange version 1.x.x: When upgrading, consult the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB1700387\" target=\"_blank\" rel=\"noopener noreferrer\">Upgrade Guide - Service Exchange for Providers and Consumers application (v2.x.x release) KB1700387</a> article in the Now Support Knowledge Base to find out how to migrate your Service Exchange applications.</li>\n<li>Service Exchange version 2.x.x: New entitlements that require the latest compatibility version cannot be activated until both consumers and providers upgrade to Service Exchange version 2.x.x. New entitlements configured with a lower compatibility version can be activated. Older active entitlements continue to work but new ones can’t be activated.</li>\n<li>When using Service Exchange for Providers and Service Exchange for Consumers in a single instance, you must upgrade both applications simultaneously to the same version to maintain compatibility. If the versions diverge, a scan check will report version mismatches and the Health Dashboard will show a version mismatch issue. After upgrading, run and validate the post‑upgrade scan suite to identify and resolve any post‑upgrade issues.</li>\n<li>If you have upgraded to Service Exchange version 2.0.55 before upgrading the platform to the Australia release and your instance has Sales and Order Management plug-in version 1.0.4 installed, the new Deny ACLs aren't installed. After upgrading to the Australia release, select Repair to reinstall the Service Exchange application to ensure Deny ACLs are installed.</li>\n<li>When you install the Service Exchange application, the Service Exchange Global script include is automatically installed or updated on the following platform versions:</li>\n</ul>\n<p>    - Yokohama</p>\n<p>    - Zurich</p>\n<p>    - Australia</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-serviceexchangeformerlyservicebridge-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Exchange (formerly Service Bridge)",
    "type": "New feature",
    "products": [
      "CSM",
      "FSM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=service-bridge-v2-explore-foundation-data-sync&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Consumer outbound FDS</a></strong></p>\n<p>Reduce manual effort and eliminate the need to share data externally by sharing selected foundational data types with your provider on a scheduled cadence. This data transfer supports the service life cycle by providing foundational data context for operational workflows.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-serviceexchangeformerlyservicebridge-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Exchange (formerly Service Bridge)",
    "type": "New feature",
    "products": [
      "CSM",
      "Integrations",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=se-se-center&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Service Exchange center</a></strong></p>\n<p>Detect problems early, understand connection status, and resolve issues efficiently with the Service Exchange center, a centralized interface that provides real-time visibility into scan check issues, connection health and statuses, and access to all Service Exchange scan suites. Service Exchange admins can access their respective centers through the Provider and Consumer center links in the navigation menu.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-serviceexchangeformerlyservicebridge-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Exchange (formerly Service Bridge)",
    "type": "New feature",
    "products": [
      "CSM",
      "ITSM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=service-bridge-v2-register&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Auto-onboarding</a></strong></p>\n<p>Reduce onboarding complexity for consumers with automated onboarding. This feature autonomously manages onboarding workflows, establishes secure connections, synchronizes settings, and continuously monitors for errors to ensure reliable, efficient integrations with minimal manual effort.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-serviceexchangeformerlyservicebridge-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Exchange (formerly Service Bridge)",
    "type": "Activation Information",
    "products": [
      "CSM",
      "FSM",
      "Integrations",
      "Core Platform",
      "ITSM"
    ],
    "details": "<p>Install Service Exchange by requesting it from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-serviceexchangeformerlyservicebridge-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Operations Workspace for ITSM",
    "type": "New feature",
    "products": [
      "ITSM",
      "UI",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=manage-admin-console-sow-itsm&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">UI16 links to SOW redirection behavior</a></strong></p>\n<p>Improve the fulfiller experience by redirecting UI16 module links such as forms and lists to the equivalent SOW experience. The UI16 module link redirection behavior is supported for all the applications in SOW when the system property <strong>sn\\_sow\\_itsm\\_admin.experience\\_redirection\\_enabled.sow</strong> is set to true.</p>\n<p>For new instances, this redirection configuration is automatically available in the base system. For upgrade instances, administrators can configure the redirection behavior from the SOW Admin Center. You can enable this feature for the UI16 links and user groups or specifically for a custom table. You can also enable this feature for specific user groups or all user groups within the custom table or applications in SOW.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-serviceoperationsworkspaceforitsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Operations Workspace for ITSM",
    "type": "New feature",
    "products": [
      "ITSM",
      "ITOM",
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=roles-in-sow&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Mapping granular admin roles with SOW granular roles</a></strong></p>\n<p>Using granular admin roles, provide full administrative access to the configuration and property pages for the applications in SOW without requiring the administrator (admin) role. These granular admin roles are mapped with ACLs and contain the corresponding existing SOW granular roles.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-serviceoperationsworkspaceforitsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Operations Workspace for ITSM",
    "type": "New feature",
    "products": [
      "ITSM",
      "UI",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=manage-admin-console-sow-itsm&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">UX property to hide contextual side panel</a></strong></p>\n<p>Use the Hide contextual side panel for specific table and tab combination option from the SOW Properties section in the SOW Admin Center to configure the hide <strong>ContextualSidebar</strong> UX page property. This property enables you to define the table with tab combination for which the default primary contextual side panel must be hidden, prioritizing the embedded contextual side panel within the tab instead.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-serviceoperationsworkspaceforitsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Operations Workspace for ITSM",
    "type": "Change",
    "products": [
      "ITSM",
      "ITOM",
      "UI",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=admin-center-sow&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure reference field auto-load behavior from SOW Admin Center</a></strong></p>\n<p>Use the Reference field auto-load behavior option from the SOW Properties section of the SOW Admin Center to configure the <strong>Reference search on click </strong> (<strong>ref\\_search\\_on\\_click</strong>) UX page property. The option enables you to configure the automatic searching of field value results displayed for reference fields such as Configuration item, Service offering, and Service.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-serviceoperationsworkspaceforitsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Operations Workspace for ITSM",
    "type": "Change",
    "products": [
      "ITSM",
      "ITOM",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=view-inc-record-info-contextual-sidepanel&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Recent list links in SOW record</a></strong></p>\n<p>Selecting the Recent incidents, Recent interaction, or Recent tasks links from the Record information side panel of a SOW record displays the 10 most recent records irrespective of their timeline instead of showing the records from last seven days. You can select the <strong>View All</strong> option to view additional records as well.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-serviceoperationsworkspaceforitsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Operations Workspace for ITSM",
    "type": "Activation Information",
    "products": [
      "ITSM",
      "UI",
      "Core Platform",
      "Now Assist"
    ],
    "details": "<p>Service Operations Workspace for ITSM is active by default and its default version is 9.0 in Australia. When you upgrade from any previous release to Australia from the ServiceNow Store, Service Operations Workspace for ITSM 9.0 is automatically installed.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-serviceoperationsworkspaceforitsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Portal",
    "type": "New feature",
    "products": [
      "HRSD",
      "UI",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=new-organization-chart-widget&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">New Organization Chart widget</a></strong></p>\n<p>Use the Service Portal New Organization Chart widget to show additional display configurations, such as default and secondary field names, location, department, and so on, to gain visibility into employees within their organization.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-serviceportal-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Portal",
    "type": "New feature",
    "products": [
      "Core Platform",
      "CSM",
      "HRSD",
      "ITSM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-a-portal&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create a portal</a></strong></p>\n<p>Configure and apply different authentication configurations for each portal to enable different login experiences for each portal. For example, you can set an authentication method like Okta for an internal employee portal or use Microsoft Azure for an external portal.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-serviceportal-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Portal",
    "type": "Accessibility Information",
    "products": [
      "UI",
      "Core Platform",
      "CSM",
      "HRSD"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=enable-dark-theme&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enable dark theme</a></strong></p>\n<p>Use the Dark theme in Service Portal to improve focus and provide better accessibility support. This option is commonly used to alleviate eye strain and improve readability.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-serviceportal-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Service Portal",
    "type": "Accessibility Information",
    "products": [
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=t_ConfigureAPage&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure A Page</a></strong></p>\n<p>Add and edit more semantic tags within the Service Portal Designer to define key areas of a portal to support clearer navigation and descriptions for screen readers. This update helps users who are blind or have low vision by making it easier for assistive technology to identify and understand different sections of each page.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-serviceportal-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "Important Information for upgrading",
    "products": [
      "Core Platform",
      "AI Platform",
      "UI",
      "Developers"
    ],
    "details": "<p>The dynamic schema application framework was revised in the Zurich release. If you implemented dynamic schema in the Xanadu or Yokohama releases, the application is automatically migrated to a new framework as part of the upgrade to releases starting with the Zurich release. For details on the migration and steps you might need to perform, see the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB2146133\" target=\"_blank\" rel=\"noopener noreferrer\">Dynamic Schema Zurich Migration Guide KB2146133</a> article in the Now Support Knowledge Base.</p>\n<p>Strengthen your instance security and maintain backward compatibility through enhanced protections for read‑only fields across the ServiceNow AI Platform®. These back-end changes include a new “read\\_only\\_option” field with granular control levels, including “strict\\_read\\_only” and “client\\_script\\_modifiable\". If you have custom client scripts that modify read‑only fields on the ServiceNow AI Platform® using g\\_form.setValue() or g\\_form.clearValue(), see the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB2718122\" target=\"_blank\" rel=\"noopener noreferrer\">Remediation for strict read-only fields preventing client side updates KB2718122</a> article in the Now Support Knowledge Base. This article provides additional technical details on how to identify affected fields and adjust their settings. For more information about granular read-only security options, see <a href=\"https://www.servicenow.com/docs/access?context=read-only-option&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configuring read-only security options</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "New feature",
    "products": [
      "Core Platform",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=read-only-option&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Granular read-only security options</a></strong></p>\n<p>Control the editability of read-only fields by configuring read-only options, allowing for customized behavior that balances usability and security. Read-only options provide granular control over whether read-only fields can be updated through client scripts and server-side operations. You can also test stricter read-only controls in non-production instances before implementing them in production.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "New feature",
    "products": [
      "Core Platform",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=add-dynamic-attributes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Support for reference data types in Dynamic Schema</a></strong></p>\n<p>Create dynamic attributes using reference data types.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "New feature",
    "products": [
      "Core Platform",
      "UI",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=dynamic-schema&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Work with Dynamic Schema elements in the Workspace condition builder</a></strong></p>\n<p>Filter Workspace lists using dynamic schema elements in the condition builder.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "New feature",
    "products": [
      "Core Platform",
      "AI Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c_DictionaryAttributes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Toggle the mail icon display</a></strong></p>\n<p>Show or hide the mail icon in email fields by configuring the hide\\_email\\_icon dictionary attribute.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "New feature",
    "products": [
      "AI Platform",
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c_FormFields&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">AI indicator in forms</a></strong></p>\n<p>Easily identify AI involvement across the ServiceNow AI Platform® through a visual cue that identifies form fields in configurable workspace and Core UI that have been updated with AI-generated content.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "New feature",
    "products": [
      "AI Platform",
      "Core Platform",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c_RESTAPI&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Guest API access control</a></strong></p>\n<p>Manage guest access to REST and GraphQL API endpoints using path-based ACLs while maintaining separate authenticated user controls.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "New feature",
    "products": [
      "Core Platform",
      "AI Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=granular-admin-roles&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Granular admin roles</a></strong></p>\n<p>Grant specific permissions to developers or users who perform minor administrative tasks without granting them unrestricted access to the full admin role by reviewing and assigning available granular admin roles.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "New feature",
    "products": [
      "Core Platform",
      "AI Platform",
      "Developers",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=api-rest&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Optional trailing slash configuration</a></strong></p>\n<p>Align with external specifications and industry standards by configuring REST APIs with optional trailing slash support.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "New feature",
    "products": [
      "AI Platform",
      "Core Platform",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=api-rest&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Path-based REST ACL control</a></strong></p>\n<p>Control access to REST services by creating path-based ACLs using specific HTTP method and path combinations.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "New feature",
    "products": [
      "AI Platform",
      "Core Platform",
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=api-rest&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Resource-level security configuration</a></strong></p>\n<p>Enable public access or custom ACL authorization by configuring resource-level security settings.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "New feature",
    "products": [
      "Core Platform",
      "UI",
      "AI Platform",
      "AI Search"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=address-field-type&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Address field type with auto-suggestions</a></strong></p>\n<p>Reduce manual entry errors through a new Address field type for Core UI and Workspace forms, which provides real-time address suggestions displayed as you type.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "New feature",
    "products": [
      "Core Platform",
      "AI Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=r_AvailableSystemProperties&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">New dot-walk scoping security properties and table attribute</a></strong></p>\n<p>Strengthen scope boundary enforcement when dot-walking across application scopes using Reference Fields through additional properties and a table attribute. For more information, see the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB2793170\" target=\"_blank\" rel=\"noopener noreferrer\">Dot-Walk Scoping Security Enhancement KB2793170</a> article in the Now Support Knowledge Base.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=next-experience-language-preferences&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Country setting added to Language and Region preferences</a></strong></p>\n<p>Users can select their country from the Next Experience language and region preferences.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "Change",
    "products": [
      "Core Platform",
      "UI",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=user&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">New options for date and time format in the User record</a></strong></p>\n<p>Users can select from new options for Date format and Time format in the User record.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "Change",
    "products": [
      "Core Platform",
      "AI Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=set-localization-props&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Control whether date and time formats reflect the user locale by default</a></strong></p>\n<p>Configure date and time formats to reflect the user locale when no date or time format has been selected in user preferences through the <strong>glide\\_i18n.date.default\\_to\\_locale</strong> system property.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "Change",
    "products": [
      "Core Platform",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=set-localization-props&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Control how to set the language for guest users</a></strong></p>\n<p>Use a guest user's IP address to set their language through the <strong>glide\\_i18n.ip\\_geolocation</strong> system property.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "Change",
    "products": [
      "AI Platform",
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=activate-country-choices&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Activate additional choices for countries</a></strong></p>\n<p>Activate additional choices for countries in the Next Experience language and region preferences or in a User record.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "Change",
    "products": [
      "Core Platform",
      "AI Platform",
      "SDK",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=javascript-engine-feature-support&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ECMAScript 2021 (ES12) JavaScript mode supports additional scripting features</a></strong></p>\n<p>Use additional scripting features in applications or scripts that use the ECMAScript 2021 (ES12) JavaScript mode.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "Change",
    "products": [
      "AI Platform",
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=updates-javascript-engine&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">JavaScript engine updated with changes from the Rhino engine</a></strong></p>\n<p>The JavaScript engine on the ServiceNow AI Platform was updated to incorporate changes from the open-source Rhino JavaScript engine.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "Change",
    "products": [
      "Core Platform",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=r_AvailableSystemProperties&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">New Normalization Data Services system property</a></strong></p>\n<p>Create duplicate records in core\\_company extension tables by setting the <strong>com.glide.acl\\_check\\_all\\_filter\\_on\\_new</strong> system property to true to reference account records.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "Change",
    "products": [
      "AI Platform",
      "Core Platform",
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=r_AvailableSystemProperties&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">System properties secured by default</a></strong></p>\n<p>Glide properties that can impact instance security are set to secure values by default. For more information about which system properties are affected and why, see the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB1982254\" target=\"_blank\" rel=\"noopener noreferrer\">Glide Property Hardening KB1982254</a> article in the Now Support Knowledge Base.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "Change",
    "products": [
      "Core Platform",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=web-embeddables&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Tracking records in unauthenticated users' sessions</a></strong></p>\n<p>Track records created, modified, or deleted by unauthenticated users to enable session-based ACL access on public forms, portals, or workflows.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "Change",
    "products": [
      "Core Platform",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=web-embeddables&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Manage guest user access to records</a></strong></p>\n<p>Restrict guest user access to records they created or updated during their current session using the 'is in session' condition builder on the ACL form for Sys ID fields.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "Change",
    "products": [
      "Core Platform",
      "AI Platform",
      "Developers",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=web-embeddables&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Session-based guest access</a></strong></p>\n<p>Manage REST GraphQL security with path-based ACLs that are enforced without needing to require authentication for access to an API.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "Change",
    "products": [
      "Core Platform",
      "CMDB",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=enhanced-nds-for-duplicate-records&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Support duplicate company names across core\\_company extension tables</a></strong></p>\n<p>Avoid normalization conflicts when creating records with the same company name in both the Company [core\\_company] table and its extension tables, such as Customer Account [customer\\_account], using the <strong>glide.cmdb.canonical.use\\_base\\_core\\_company\\_only</strong> property. It ensures that uniqueness enforcement applies only to base core\\_company records.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow AI Platform core",
    "type": "Accessibility Information",
    "products": [
      "AI Platform",
      "UI",
      "Core Platform"
    ],
    "details": "<p>Format Painter plugin for TinyMCE enables you to apply consistent font styles, sizes, and table formats within the HTML editor field. This improvement helps users with cognitive disabilities and low vision by reducing confusion and supporting clear, predictable formatting throughout documents. Keyboard navigation is supported, providing added ease of use for keyboard-only users. For more information, see <a href=\"https://www.servicenow.com/docs/access?context=t_ConfigureTheTinyMCEHTMLToolbar&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure the HTML toolbar</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowaiplatformcorefeature-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow CLI",
    "type": "Activation Information",
    "products": [
      "Core Platform",
      "SDK",
      "Developers"
    ],
    "details": "<p>Install ServiceNow CLI by requesting it from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowcli-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow IDE",
    "type": "Important Information for upgrading",
    "products": [
      "Developers",
      "SDK",
      "UI"
    ],
    "details": "<p>ServiceNow IDE version 3.2.3 is active by default on instances on the Australia release. Update to ServiceNow IDE version 4.0 or later to use the latest features. For information about updating ServiceNow IDE, see <a href=\"https://www.servicenow.com/docs/access?context=install-servicenow-ide&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Install or update the ServiceNow IDE</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowide-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow IDE",
    "type": "New feature",
    "products": [
      "App Engine",
      "Developers",
      "SDK"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=creating-applications-servicenow-ide&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create and convert global applications</a></strong></p>\n<p>Create and convert applications in the global scope that are accessible to other global applications with instances on the Australia release.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowide-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow IDE",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Developers",
      "SDK",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=building-applications-source-code&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Generated ServiceNow Fluent code organized in taxonomy-based directories</a></strong></p>\n<p>Configure a custom directory structure for metadata transformed into ServiceNow Fluent code with the <code>taxonomy</code> parameter in an application's now.config.json file. By default, generated ServiceNow Fluent files are organized in a taxonomy-based directory structure within the fluent/generated directory.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowide-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow SDK",
    "type": "Important Information for upgrading",
    "products": [
      "SDK",
      "Developers",
      "Integrations",
      "Core Platform"
    ],
    "details": "<p>To upgrade to the latest version of the ServiceNow SDK globally or within an application, see <a href=\"https://www.servicenow.com/docs/access?context=upgrade-servicenow-sdk&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Upgrade the ServiceNow SDK</a>.</p>\n<p>ServiceNow SDK version 4.4 supports integration with ServiceNow instances beginning with the Washington DC release.</p>\n<p>On Windows systems, after upgrading to ServiceNow SDK version 4.3 or later, existing stored credentials aren’t supported due to the deprecation of Keytar. Users on Windows systems must add their user credentials again using the <code>now-sdk auth --add</code> command to authenticate with instances. For more information, see <a href=\"https://www.servicenow.com/docs/access?context=authenticate-instance-now-sdk&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Authenticate</a>.</p>\n<p><strong>Note:</strong></p>\n<p>For more information about minor releases of the ServiceNow SDK, see the <a href=\"https://github.com/ServiceNow/sdk/releases\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow SDK repository</a> on GitHub.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowsdk-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow SDK",
    "type": "New feature",
    "products": [
      "SDK",
      "Developers",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=building-applications-source-code&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure a default language for field labels</a></strong></p>\n<p>Configure a default language for field labels [sys\\_documentation] in a table or column with the <code>tableDefaultLanguage</code> parameter in an application's now.config.json file.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowsdk-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow SDK",
    "type": "New feature",
    "products": [
      "SDK",
      "Developers",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=table-api-now-ts&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configure read-only options with the Table API</a></strong></p>\n<p>Control the editability of read-only fields by configuring read-only options for a field with the readOnlyOption property in a Column object.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowsdk-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow SDK",
    "type": "Change",
    "products": [
      "SDK",
      "Developers",
      "ITSM",
      "Core Platform",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=fluent-flow-api&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Flow API supports Service Catalog triggers and actions</a></strong></p>\n<p>Use triggers and actions related to Service Catalog with the Flow API.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowsdk-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow SDK",
    "type": "Change",
    "products": [
      "SDK",
      "Developers",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=acl-api-now-ts&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Access Control List API supports protection policies</a></strong></p>\n<p>Control whether someone can view or edit an access control list (ACL) with the protectionPolicy property in an ACL object.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowsdk-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow SDK",
    "type": "Change",
    "products": [
      "SDK",
      "Developers",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=building-applications-source-code&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Keys updated for static assets in full-stack applications</a></strong></p>\n<p>Static UX Assets [sys\\_ux\\_lib\\_asset] in full-stack applications have updated keys in the keys.ts file. UX Asset sys\\_ids aren’t changed.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowsdk-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow Studio",
    "type": "New feature",
    "products": [
      "App Engine",
      "Developers",
      "Now Assist",
      "AI Platform",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=build-agent-in-servicenow-studio&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Build Agent in ServiceNow Studio</a></strong></p>\n<p>Use Build Agent in ServiceNow Studio to create and edit full-stack applications conversationally.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowstudio-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow Studio",
    "type": "New feature",
    "products": [
      "Core Platform",
      "App Engine",
      "UI",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=servicenow-studio-file-navigator-taxonomy&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Add UI Builder files to your apps in ServiceNow Studio</a></strong></p>\n<p>Build pages by adding UI Builder components, controllers, experiences, page collections, and UI interactions into your ServiceNow Studio apps.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowstudio-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow Studio",
    "type": "New feature",
    "products": [
      "App Engine",
      "Now Assist",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=vibe-coding-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">New vibe coding documentation</a></strong></p>\n<p>Explore vibe coding, which is a natural language approach to application development in ServiceNow, with new documentation, including how to get started, when to use it, and how it fits within the broader suite of AI-powered development tools.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowstudio-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow Studio",
    "type": "Change",
    "products": [
      "Core Platform",
      "App Engine",
      "UI",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=qs-open-apps-files-across-scopes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Integrated tab groupings</a></strong></p>\n<p>Integrated tabs are no longer color-coded or grouped by scope. You can see a list of the open files by selecting the more actions icon and selecting <strong>Show Opened Editors</strong>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowstudio-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow Studio",
    "type": "Change",
    "products": [
      "Core Platform",
      "App Engine",
      "Now Assist",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=build-agent-in-servicenow-studio&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Build Agent in ServiceNow Studio</a></strong></p>\n<p>Build Agent is the default setting for AI-assisted app generation in ServiceNow Studio. You can change this setting in the ServiceNow Studio user preferences menu.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowstudio-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow Studio",
    "type": "Removed",
    "products": [
      "App Engine",
      "Now Assist",
      "Developers",
      "UI",
      "Core Platform"
    ],
    "details": "<p>The Now Assist icon was removed and replaced with a Build Agent chat panel, which is open by default. If the chat panel is closed, you can re-open Build Agent from the status bar in the browser window.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowstudio-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow Vault",
    "type": "Important Information for upgrading",
    "products": [
      "SecOps",
      "Core Platform",
      "IRM"
    ],
    "details": "<p>ServiceNow Vault is a bundle of the following products:</p>\n<ul>\n<li><a href=\"https://www.servicenow.com/docs/access?context=servicenow-vault-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Vault</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=data-discovery-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Data Discovery</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=data-privacy-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Data Privacy</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=session-access&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Zero Trust Access</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=field-encryption&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Field Encryption</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=code-signing-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Code Signing</a></li>\n<li><a href=\"https://www.servicenow.com/docs/access?context=les-intro&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Log Export Service (LES)</a></li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowvault-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow Vault",
    "type": "New feature",
    "products": [
      "Core Platform",
      "AI Platform",
      "SecOps",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=vault-tools&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Sensitive data monitoring in AI Insights</a></strong></p>\n<p>Identify unprotected sensitive data across your configured tables using the AI Insights section in the Vault console dashboard. View users entering sensitive data in unprotected columns and channels, grouped by sensitive data patterns. This information can further be used to prioritize protection efforts.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowvault-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "ServiceNow Vault",
    "type": "New feature",
    "products": [
      "Core Platform",
      "SecOps",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=use-vault-guided-setup&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Guided setup for Custom applications</a></strong></p>\n<p>Autoclassify and protect the occurrences of sensitive data within your Custom applications using the guided setup for Vault. This flow helps you to quickly start using Vault capabilities in your own applications.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-servicenowvault-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Sidebar",
    "type": "New feature",
    "products": [
      "CSM",
      "UI",
      "Core Platform",
      "Now Assist",
      "ITSM"
    ],
    "details": "<p>Customize the subject title for Sidebar discussions by replacing the default short description with any field from the record.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-sidebar-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Sidebar",
    "type": "New feature",
    "products": [
      "UI",
      "Now Assist",
      "Core Platform"
    ],
    "details": "<p>Move and resize the Sidebar chat window using the dynamic window framework.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-sidebar-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Sidebar",
    "type": "New feature",
    "products": [
      "UI",
      "Now Assist",
      "Integrations",
      "Core Platform"
    ],
    "details": "<p>Create a standalone Sidebar discussion that is not tied to a specific record.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-sidebar-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Sidebar",
    "type": "Activation Information",
    "products": [
      "AI Platform",
      "UI",
      "Now Assist",
      "Integrations"
    ],
    "details": "<p>Sidebar is a ServiceNow AI Platform feature that is active by default.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-sidebar-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Smart Assessment Engine",
    "type": "New feature",
    "products": [
      "IRM",
      "BCM",
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=collaboration-in-assessments&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Collaboration in assessments</a></strong></p>\n<p>Starting with version 22.0.0, use granular delegation as a primary owner to assign individual assessment sections to SMEs. Respondents can view the entire assessment for context but can edit only their assigned sections. Monitor overall assessment progress and maintain final review and submission capabilities.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-smartassessmentengine-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Smart Assessment Engine",
    "type": "New feature",
    "products": [
      "IRM",
      "Core Platform",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=quick-edit-for-published-templates&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Quick edit for published templates</a></strong></p>\n<p>Starting with version 22.0.0, edit published templates inline as a template manager, including edits to the titles, descriptions, and reader roles.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-smartassessmentengine-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Smart Assessment Engine",
    "type": "Change",
    "products": [
      "IRM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=sae-asmnt-template-category-create&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create an assessment template category</a></strong></p>\n<p>Allow one or more roles to access a template category with the multiselect <strong>Category Roles</strong> field.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-smartassessmentengine-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Software Asset Management",
    "type": "New feature",
    "products": [
      "ITAM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=integrate-with-github&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Improve user activity tracking with the GitHub integration</a></strong></p>\n<p>Achieve more accurate user activity data and improved license reclamation for low or no-activity subscriptions by leveraging the enhanced GitHub integration for broader event coverage and extended retention.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-softwareassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Software Asset Management",
    "type": "New feature",
    "products": [
      "ITAM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=concurrent-licenses&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enhanced integration with OpenLM for tracking subscription and consumption licenses</a></strong></p>\n<p>Gain improved visibility into engineering application licenses across subscription-based and consumption models with the OpenLM integration. This capability provides support for named user allocation and usage tracking. Additionally, you can better monitor compliance risks and note denial patterns through actionable insights into automated processes and dashboards.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-softwareassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Software Asset Management",
    "type": "New feature",
    "products": [
      "ITAM",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=ml-learning-sam&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Leverage machine learning (ML) normalization for managing your software assets in protected government environments</a></strong></p>\n<p>Extend ML normalization capabilities to regulated markets for ServiceNow Protected Platform (SPP) in Singapore (SG) and Australia (AU).</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-softwareassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Software Asset Management",
    "type": "New feature",
    "products": [
      "ITAM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=add-sap-connection&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enhance the security of SAP ABAP on-premise integration using OAuth 2.0 authentication</a></strong></p>\n<p>Benefit from enhanced OAuth 2.0 authentication for your SAP ABAP on-premise integrations with improved security. This capability provides a more secure, compliant, and future-proof method for integrating the Software Asset Management application with your SAP systems.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-softwareassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Software Asset Management",
    "type": "New feature",
    "products": [
      "ITAM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=oracle-licensing-cloud-environments&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Improve your license management experience through the enhanced support for Oracle WebLogic Suite licensing</a></strong></p>\n<p>Access flexible licensing options that align with different deployment models and usage patterns through comprehensive license management with support for the Oracle WebLogic Suite for both Per Processor and Named User Plus (NUP) metrics. The enhanced support now covers the entire WebLogic product family, including the flagship Suite edition.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-softwareassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Software Asset Management",
    "type": "New feature",
    "products": [
      "ITAM",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c_SAMDiscovery&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Improve software normalization outcomes with expanded pattern-based normalization rules rule</a></strong></p>\n<p>Streamline the software model discovery process by leveraging the expanded pattern-based normalization rule, which eliminates the need to manually update or create new normalization rules for every minor variation in software discovery models. This rule automatically recognizes and matches diverse patterns and variations in software model data. As a result, discovered publisher, product, version, and edition values are seamlessly aligned with the ServiceNow® repository.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-softwareassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Software Asset Management",
    "type": "New feature",
    "products": [
      "ITAM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=mapping-ms-license-metrics&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Enhanced SQL server enterprise edition license compliance to support Server/CAL licensing model</a></strong></p>\n<p>Optimize licensing for legacy Microsoft SQL Server Enterprise Edition licenses under the Server+CAL licensing model with Software Assurance (SA) by using the enhanced licensing rule. A single server license can cover up to four virtual machines, provided that the combined processing power for these VMs does not exceed twenty hardware threads or cores at any given time.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-softwareassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Software Asset Management",
    "type": "New feature",
    "products": [
      "ITAM",
      "SPM",
      "IRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=guidedplaybook-sw-lifecycle-reports&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Generate optimal software lifecycle reports using a guided playbook that ensures adherence to compliance and audit requirements.</a></strong></p>\n<p>Simplify the creation of optimal software life-cycle reports through a guided playbook that assists in defining report scope, identifying gaps, and performing corrective actions. The playbook also integrates with the success portal, enabling you to establish and monitor success metrics, organize tasks and activities, and effectively track progress toward your objectives.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-softwareassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Software Asset Management",
    "type": "New feature",
    "products": [
      "ITAM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=device-license-consumption-report&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Streamline license management for Microsoft server product Installations and license usage via a single report</a></strong></p>\n<p>Gain insights to a unified report for all Microsoft server product installations and license usage across license metrics. The Microsoft Server Infrastructure and License consumption report consolidates infrastructure data per device along with license usage and exemptions. Get detailed justifications for exemptions such as unlicensed or ignored installations, making it easier to monitor, analyze, and optimize your IT resources.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-softwareassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Software Asset Management",
    "type": "Change",
    "products": [
      "ITAM",
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=sam-installed-components&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Granular configuration admin roles</a></strong></p>\n<p>Use granular admin roles, such as sam\\_admin and sam\\_integrator, to complete administrative configuration tasks without requiring the full admin role. By using limited admin privileges that provide access to only certain tasks, you can help reduce security risks across your organization.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-softwareassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Software Asset Management",
    "type": "Activation Information",
    "products": [
      "ITAM",
      "AI Platform"
    ],
    "details": "<p>Software Asset Management is available with activation of the Activate all Software Asset Management Professional plugin, including the Software Asset Workspace plugin (com.sn\\_samp\\_master\\_ws). Activating this plugin automatically activates the Activate all Software Asset Management Professional plugin (com.sn\\_samp\\_master) and the Software Asset Workspace store app (sn\\_sam\\_workspace).</p>\n<p><strong>Note:</strong></p>\n<p>After the new plugin is activated, you can't access the classic user interface.</p>\n<p>The ServiceNow AI Platform® in the Australia release has limited support for the Software Asset Management classic user interface. However, it remains active in your instance, including when you upgrade to a newer ServiceNow AI Platform® release.</p>\n<p>Install the listed Software Asset Management applications by requesting them from ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/store\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> website to view all the available apps and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>\n<ul>\n<li>Software Asset Management - SaaS License Management</li>\n<li>Data Collection for Oracle Global Licensing and Advisory Services (GLAS)</li>\n<li>IBM License Compliance for Software Asset Management</li>\n<li>ITAM Health Check</li>\n<li>Software Asset Management Guided Experiences</li>\n<li>Software Asset Workspace</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-softwareassetmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Source-to-Pay Operations Integrations",
    "type": "Important Information for upgrading",
    "products": [
      "SPM",
      "Integrations"
    ],
    "details": "<p><strong>Important:</strong></p>\n<p>Due to a performance issue identified with the upgrade fix script, the sourcing fix script has been modified. This script will no longer execute automatically during the upgrade process. Instead, it is now delivered as an on-demand job. Administrators must manually execute this job outside of business hours after the upgrade is complete.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-sourcetopayoperationsintegrations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Source-to-Pay Operations Integrations",
    "type": "New feature",
    "products": [
      "SPM",
      "Integrations",
      "OTSM",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=source-to-pay-oracle-fin-cloud-integration&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Source-to-Pay integration with Oracle Financial Cloud</a></strong></p>\n<ul>\n<li>You can use this integration to perform Integration Hub actions for invoices, cost centers, product models, payment terms, purchasing organizations, departments, GL accounts, currencies, FX rates, invoice payment details, suppliers, plant addresses, and legal entities.</li>\n<li>You can also fetch currencies, GL accounts, legal entities, and payment terms information from Oracle Financial Cloud.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-sourcetopayoperationsintegrations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Source-to-Pay Operations Integrations",
    "type": "Change",
    "products": [
      "SPM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=source-to-pay-sap-integration&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Source-to-Pay integration with SAP</a></strong></p>\n<ul>\n<li>Enhanced integration to support data retrieval from SAP ECC, SAP OData, and SAP HANA RFC using the updated Buyer Group staging process.</li>\n<li>Enhanced integration to support Read-Only security directives to strengthen data protection, applying required field-level changes in alignment with the Read-only field remediation guidelines to ensure compliance and consistency across integrations.</li>\n<li>Updated entity naming convention from Department to Buyer Groups for improved standardization.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-sourcetopayoperationsintegrations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Source-to-Pay Operations Integrations",
    "type": "Change",
    "products": [
      "SPM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=source-to-pay-integration-sap-ariba&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Source-to-Pay integration with SAP Ariba</a></strong></p>\n<ul>\n<li>Enhanced integration to support fetch shipment details from SAP Ariba.</li>\n<li>Updated entity naming convention from Department to Buyer Groups for improved standardization.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-sourcetopayoperationsintegrations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Source-to-Pay Operations Integrations",
    "type": "Change",
    "products": [
      "Integrations",
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=source-to-pay-integration-framework&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Source-to-Pay integration framework</a></strong></p>\n<ul>\n<li>Enhanced the Purchase Requisition Line (PRL) outbound staging table to improve data completeness and consistency for outbound Purchase Requisition integrations.</li>\n<li>Performance optimizations have been applied to the Purchase Order (PO) transform map to improve efficiency and scalability when processing high‑volume PO data.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-sourcetopayoperationsintegrations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Sourcing and Procurement Operations",
    "type": "New feature",
    "products": [
      "SPM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=sh-multicurrency-overview&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Multi-currency support</a></strong></p>\n<p>Enable multi-currency display across approval-related views, including To-Dos, tasks, email notifications, and the Bundles page. Currency values are shown in both the approver’s local currency and the original supplier currency where applicable. The local currency is displayed as the primary value, with the original currency shown as a secondary reference. This display format provides consistent currency visibility for approvers during review.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-sourcingandprocurementoperations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Sourcing and Procurement Operations",
    "type": "New feature",
    "products": [
      "SPM",
      "ITSM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=decimal-support-services&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Decimal quantity support for service-based purchases in Shopping Hub</a></strong></p>\n<p>Enable requesters to enter and edit decimal quantities for service-based purchase requisitions and purchase orders without validation errors. Decimal quantities are supported only for services to maintain data integrity. Decimal quantities for goods are not supported and return a clear validation message. This validation logic is consistent across Shopping Hub and Employee Center.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-sourcingandprocurementoperations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Sourcing and Procurement Operations",
    "type": "New feature",
    "products": [
      "SPM",
      "AI Platform",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=automatically-assign-categories&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Automatically assign categories during SR and PR creation</a></strong></p>\n<p>Automatically classify service requests, purchase requisitions, and purchase orders into the correct spend categories using the Spend categorization agent. This classification process reduces manual classification effort and improves consistency across procurement workflows.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-sourcingandprocurementoperations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Sourcing and Procurement Operations",
    "type": "New feature",
    "products": [
      "SPM",
      "WSD"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=purchase-on-behalf-sh&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Purchase on behalf of another user in Shopping Hub</a></strong></p>\n<p>Enable users to purchase on behalf of others without requiring delegate configuration in Shopping Hub. Users can manage individuals they are authorized to purchase for, directly within the buying experience. Purchases made on behalf of others are visible through filtering by business owner in the My Purchases view.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-sourcingandprocurementoperations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Strategic Planning",
    "type": "New feature",
    "products": [
      "SPM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=demand-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Next Experience for Demand Management</a></strong></p>\n<p>Next Experience for Demand Management delivers a unified experience for managing strategic and operational demands in Strategic Planning. This Next Experience interface consolidates demand creation, assessment, collaboration, and conversion in one place, eliminating context switching and reducing reliance on the classic Demand Workbench.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-strategicplanning-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Strategic Planning",
    "type": "New feature",
    "products": [
      "SPM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=use-demands-dmnd-wpc&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create and manage demands in Next Experience for Demand Management</a></strong></p>\n<ul>\n<li>Create and manage a demand in Next Experience for Demand Management using guided tabs that help you define alignment, estimate costs, and confirm readiness as you build out the demand.</li>\n<li>Collaborate on demands through Docs, with execution and planning synced.</li>\n<li>View, add, and edit cost plans and budgeting details using related lists.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-strategicplanning-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Strategic Planning",
    "type": "New feature",
    "products": [
      "SPM",
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=use-playbooks-in-dw&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Use Playbooks in Next Experience for Demand Management</a></strong></p>\n<p>Help teams manage demands with greater structure and consistency using Playbook in Next Experience for Demand Management.</p>\n<p>Playbooks enable you to define multiple governance processes across the organization using a low‑code/no‑code configuration experience. Create clear stages and guided activities from demand intake to completion by using a default playbook or creating a custom playbook to support your organization’s multiple demand management processes.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-strategicplanning-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Strategic Planning",
    "type": "New feature",
    "products": [
      "SPM",
      "UI",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=use-playbooks-in-dw&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Associate AI systems with demands in Next Experience for Demand Management</a></strong></p>\n<p>Use a playbook activity in Next Experience for Demand Management to associate AI systems with a demand. You can link impacted systems and add new ones directly within the demand workflow.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-strategicplanning-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Strategic Planning",
    "type": "New feature",
    "products": [
      "SPM",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=summarize-demand-in-demand-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Summarize demands using Now Assist for SPM</a></strong></p>\n<p>Generate a concise, structured summary of any demand using the demand summarization skill through the <strong>Summarize</strong> button in the demand form. The skill reviews the demand fields and helps create a clear summary of the demand.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-strategicplanning-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Strategic Planning",
    "type": "New feature",
    "products": [
      "SPM",
      "Now Assist",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=strategy-goals-landing-page&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Strategy and Goals</a></strong></p>\n<p>Use boards in Strategy and Goals to organize and manage your organization’s strategic priorities and objectives. A board is a collection of strategic plans, priorities, objectives, and key results based on your selected filter criteria—helping you stay focused and manage them effectively.</p>\n<ul>\n<li>Managing boards:</li>\n</ul>\n<p>    - Create boards step by step, choosing whether to base them on strategic plans, priorities, goals, or both. Define what items to display using advanced filter conditions.</p>\n<p>    - Build boards tailored to specific goals by entity type and entity, ensuring focus on the goals that matter most.</p>\n<p>    - Share boards with stakeholders to align efforts and drive shared outcomes.</p>\n<p>    - Add boards to your favorites for faster navigation.</p>\n<ul>\n<li>Managing strategy and goals using boards:</li>\n</ul>\n<p>    - Create and organize strategic plans, strategic priorities, goals, and key results in a single, focused view.</p>\n<p>    - Associate work or planning items with goals or targets to align your current or future work with your strategic priorities, helping your team achieve goals and targets efficiently.</p>\n<p>    - As the goal or process owner, send notifications to target owners or contributors to ensure timely updates of target actuals.</p>\n<p>    - Target owners and contributors receive reminder notifications for check-in updates before the due date.</p>\n<p>    - With Now Assist for Strategic Portfolio Management (SPM), generate measurable targets for your goals to reduce the effort of defining clear success criteria, and gain actionable insights to identify at‑risk goals, assess forecasted status, and act on AI‑driven recommendations.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-strategicplanning-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Strategic Planning",
    "type": "New feature",
    "products": [
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=managing-goals-in-alignment-planner-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Portfolio plan goals enhancements</a></strong></p>\n<ul>\n<li>Owners and contributors are notified when they’re mentioned in a goal, target, or when comments are added.</li>\n<li>Define targets across multiple organizational levels with the Assigned entity field in the target form. This enables targets created at higher levels (for example, Company) to be directly assigned to lower levels (for example, Business Unit, Department), eliminating redundant subgoal creation, and streamlining overall goal management.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-strategicplanning-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Strategic Planning",
    "type": "New feature",
    "products": [
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-portfolio-plans-in-alignment-planner-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Portfolio plan enhancements</a></strong></p>\n<ul>\n<li>Visualize planning items in lanes with the new Kanban tab in the Planning page and access the Hierarchy tab directly from the same location. These tabs replace the previous access point in the Prioritization tab, offering a more streamlined way to view and manage planning items.</li>\n<li>Save filter views specific to the Kanban tab without affecting views in the Prioritization tab.</li>\n<li>View planning items in the new Hierarchy tab on the Planning page, now sorted using global rank when available. Drag and drop is supported for lowest‑level items, enabling you to rerank them within their groups.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-strategicplanning-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Strategic Planning",
    "type": "New feature",
    "products": [
      "SPM",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=eap-hierarchy-tab&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Hierarchy tab for EAP teams</a></strong></p>\n<p>Gain visibility into how your work connects to broader organizational goals by viewing the complete work item hierarchy directly in the EAP workspace. Expand any epic to see its capabilities, features, and stories across Solution Trains, ARTs, and Agile Teams without switching between multiple screens or running separate reports.</p>\n<p>Customize your view by selecting which columns appear in the hierarchy grid and adjusting column widths to match your workflow. Your column preferences persist across sessions, so your configured view is ready each time you return.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-strategicplanning-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Strategic Planning",
    "type": "New feature",
    "products": [
      "SPM",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=using-eap&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Open EAP work items in new browser tab</a></strong></p>\n<p>Open work items from the EAP Backlog and Hierarchy pages in a new browser tab, so you never lose your context. Right-click any work item, or use the item options menu, to open its full details in a separate tab. This feature lets you review and compare multiple work items side by side without losing your current view.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-strategicplanning-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Strategic Planning",
    "type": "New feature",
    "products": [
      "SPM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=components-installed-with-product-feedback&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Admin role enhancements in Feedback</a></strong></p>\n<p>The read role sn\\_align\\_core.pf\\_read and write role sn\\_align\\_core.apw\\_admin are added to the following system properties in Feedback and Product idea:</p>\n<ul>\n<li>sn\\_apw\\_advanced.product\\_feedback\\_allowed\\_non\\_planning\\_items\\_for\\_link\\_item</li>\n<li>sn\\_apw\\_advanced.product\\_feedback\\_product\\_idea\\_filters</li>\n<li>sn\\_apw\\_advanced.product\\_feedback\\_feedback\\_filters</li>\n<li>sn\\_apw\\_advanced.feedback.idea\\_feedback\\_queue\\_address</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-strategicplanning-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Strategic Planning",
    "type": "New feature",
    "products": [
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=using-financials-spw&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Financials for planning items</a></strong></p>\n<ul>\n<li>Migration of financial baselines:</li>\n</ul>\n<p>    - Migrate the financial baselines of projects, which includes investment currency support.</p>\n<p>    - While migration, financial baselines will now include actuals, costs, benefits, and budget values from the project currency to the investment currency.</p>\n<ul>\n<li>Streamlined currency fields while using multicurrency:</li>\n</ul>\n<p>    - New and existing customers will now see only investment currency fields in demand and project records.</p>\n<p>    - Planned costs, actual costs, planned benefits, actual benefits, and budget fields are included in the financial baselines.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-strategicplanning-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Subscription Management",
    "type": "Important Information for upgrading",
    "products": [
      "Core Platform",
      "ITAM"
    ],
    "details": "<p>Subscription Management version 6.1 is active by default on all instances of the Australia release. Update to Subscription Management version 6.1 or later to use the latest features. For more information about updating Subscription Management, see <a href=\"https://www.servicenow.com/docs/access?context=update-application-app-mgr&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Update an app or plugin</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-subscriptionmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Subscription Management",
    "type": "New feature",
    "products": [
      "SPM",
      "Core Platform",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=domain-separation-subscription-mgmt&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Support for domain separation</a></strong></p>\n<p>View and filter subscribers by domain for user-based subscriptions and view Now Assist usage by domain.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-subscriptionmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Subscription Management",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITAM",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=monitoring-wdf-capability-use&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Monitor Workflow Data Fabric usage</a></strong></p>\n<p>Monitor and track Workflow Data Fabric capability usage and view the relative token use rate of each capability.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-subscriptionmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Subscription Management",
    "type": "Change",
    "products": [
      "Now Assist",
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=monitoring-now-assist-usage&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist usage excludes demo data</a></strong></p>\n<p>Demonstration instances are excluded from the total Now Assist usage count to improve tracking of Assist consumption. The accrual time field displays when Now Assist data was last accrued.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-subscriptionmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Subscription Management",
    "type": "Change",
    "products": [
      "Now Assist",
      "SPM",
      "AI Search"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=monitoring-now-assist-usage&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Changes to Now Assist usage measurement</a></strong></p>\n<p>Now Assist usage measurement is evolving. Update Subscription Management to version 6.1 or later on all instances to avoid mixed measurement states. For more information, see <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB2704710\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist Usage - Overview & New Measurement Logic: January 2026 KB2704710</a> on the Now Support Knowledge Base.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-subscriptionmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Subscription Management",
    "type": "Change",
    "products": [
      "Core Platform",
      "ITAM",
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=managing-user-subscriptions-v2&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Streamlined user-based subscription allocation</a></strong></p>\n<p>To simplify the Subscription Management experience, the manual allocation workflow for user-based subscriptions has been removed for administrators who have never used it. Administrators who have manually allocated user-based subscriptions before can still make manual allocations.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-subscriptionmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Subscription Management",
    "type": "Change",
    "products": [
      "ITAM",
      "SPM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=subscriptions-overview-v2&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Hidden user-based subscription allocations</a></strong></p>\n<p>To help prevent inaccuracy when allocations aren't complete, allocation details for user-based subscriptions are now hidden from the Subscription Management overview. Contact your account executive for user-based subscription allocation details.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-subscriptionmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Supplier Lifecycle Operations",
    "type": "New feature",
    "products": [
      "SPM",
      "IRM",
      "SecOps",
      "UI",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=slo-campaign-mgmt&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Smart Assessments</a></strong></p>\n<p>Supplier managers can use the segmentation rules and assessment templates to create smart assessments in bulk for users. Smart assessments provide a survey-like experience with enhanced UI capabilities for both internal and external users. This feature utilizes the capabilities of the Smart Assessment Engine application</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-supplierlifecycleoperations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Supplier Lifecycle Operations",
    "type": "New feature",
    "products": [
      "SPM",
      "Now Assist",
      "UI",
      "Integrations",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=enabling-emails-view-for-contacts&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Emails view for supplier managers in the Source-to-Pay Workspace</a></strong></p>\n<p>Supplier managers can access their emails within the Source-to-Pay Workspace from the <strong>Emails</strong> tab in the case, task, and supplier details pages respectively. Email actions are reflected and incomplete email errors are handled. Email-summarization is available from the workspace for tasks and cases only.</p>\n<p>Supplier contacts receive the emails and they can perform the assigned tasks directly via email without logging in to the Supplier Collaboration Portal.</p>\n<p>Internal stakeholders receive the emails and they can perform the assigned tasks directly via email without logging in to the Source-to-Pay Workspace.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-supplierlifecycleoperations-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Synthetic monitoring",
    "type": "New feature",
    "products": [
      "ITOM",
      "ITSM",
      "AI Ops"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-synthetic-monitors-from-incidents&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create synthetic monitors from incidents</a></strong></p>\n<p>Use existing incidents to create monitors and proactively reduce re-occurrence of incidents.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-syntheticmonitoring-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Synthetic monitoring",
    "type": "New feature",
    "products": [
      "ITOM",
      "Integrations",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/r/sPnEbors95h6DhgBlE~f0A/FJoq97I2~IxtvdHFS2mOEw\" target=\"_blank\" rel=\"noopener noreferrer\">Migrate existing monitors in bulk using APIs</a></strong></p>\n<p>Use REST APIs to streamline migration and automation of third‑party synthetic monitors for easier scaling and reduced manual work.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-syntheticmonitoring-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Telecommunications Customer 360",
    "type": "New feature",
    "products": [
      "CSM",
      "CRM",
      "Core Platform",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c360-home-page&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Customer information</a></strong></p>\n<p>View customer account, contact, or consumer information including contact details, location, and recent interaction summary for efficient service delivery.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-telecommunicationscustomer360-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Telecommunications Customer 360",
    "type": "New feature",
    "products": [
      "CSM",
      "CRM",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c360-inter-history-card&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Interaction history</a></strong></p>\n<p>Track customer interactions over time with date range filtering. View chronological history of customer engagements to understand previous communication context.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-telecommunicationscustomer360-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Telecommunications Customer 360",
    "type": "New feature",
    "products": [
      "CSM",
      "Core Platform",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c360-data-visual-card&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Trend charts</a></strong></p>\n<p>Monitor key customer metrics through visual charts including NPS and CSAT scores with target comparisons and trend lines. View last updated timestamps for each metric.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-telecommunicationscustomer360-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Telecommunications Customer 360",
    "type": "New feature",
    "products": [
      "CSM",
      "OTSM",
      "CRM",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c360-billing-card&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Billing</a></strong></p>\n<p>Review customer billing information and invoices for the selected billing account. Search and filter billing records to quickly locate specific invoice details.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-telecommunicationscustomer360-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Telecommunications Customer 360",
    "type": "New feature",
    "products": [
      "CSM",
      "CRM",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c360-products-card&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Products</a></strong></p>\n<p>Identify active products and services associated with the customer account. View counts of related cases, service problem cases, incidents, and test results for each product to understand product-specific issues.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-telecommunicationscustomer360-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Telecommunications Customer 360",
    "type": "New feature",
    "products": [
      "CSM",
      "OTSM",
      "FSM",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=c360-tasks-card&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Cases, tasks, and orders</a></strong></p>\n<p>Manage multiple task types including service problem cases, cases, customer orders, work orders, complaint cases, and invoice cases in a unified view. View details such as case numbers, descriptions, state, sold products, and priority levels across all task records.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-telecommunicationscustomer360-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Telecommunications Customer 360",
    "type": "Activation Information",
    "products": [
      "CSM",
      "CRM"
    ],
    "details": "<p>Install Telecommunications customer 360 by requesting it from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-telecommunicationscustomer360-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Telecommunications Network Inventory",
    "type": "New feature",
    "products": [
      "FSM",
      "CSM",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=remote-hands-request-management&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Remote Hands Request Management</a></strong></p>\n<p>Enable your customers to request services such as power usage enquiries, equipment installation, equipment restarts, and more by connecting with onsite operations agents at your facility. Securely store your customer requests in the Remote Hands Case table, with role-based access controls. View an auto-generated summary of your requests for quick reference.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-telecommunicationsnetworkinventory-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Telecommunications Service Operations Management (TSOM)",
    "type": "New feature",
    "products": [
      "ITOM",
      "OTSM",
      "CSM",
      "Integrations",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=telecommunications-service-operations-management&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Telecommunications Service Operations Management</a></strong></p>\n<p>Gain full visibility into your SD-WAN landscape with automated discovery and mapping for Cisco Meraki and Fortinet FortiManager.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-telecommunicationsserviceoperationsmanagementtsom-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Telecommunications Service Operations Management (TSOM)",
    "type": "Change",
    "products": [
      "ITOM",
      "CMDB",
      "OTSM"
    ],
    "details": "<p><strong>SD-WAN Discovery connectors <a href=\"https://www.servicenow.com/docs/access?context=sd-wan-data-model&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">SD-WAN data model</a></strong></p>\n<p>Enable comprehensive SD-WAN visibility by leveraging new Telecom Discovery connectors. Standardize data processing through the SD-WAN Data Model integrated into the Telecom Discovery Builder Framework ETL pipeline.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-telecommunicationsserviceoperationsmanagementtsom-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Telecommunications Service Operations Management (TSOM)",
    "type": "Change",
    "products": [
      "CMDB",
      "ITOM",
      "OTSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=discrepancy-identification-types-of-discrepancies&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Types of discrepancies</a></strong></p>\n<p>Enhance discovery accuracy and data quality with SD-WAN-specific discrepancy audits that validate discovery results against the CMDB. Reconcile discrepancies manually or automatically using the remediation engine. When the audit detects a newly discovered CI not present in the CMDB, a single follow-on task is created at the equipment level for streamlined resolution.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-telecommunicationsserviceoperationsmanagementtsom-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Theme Builder",
    "type": "New feature",
    "products": [
      "UI",
      "Core Platform",
      "CSM",
      "WSD"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=tb-icon-illustrations&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Override default icons for a fully branded experience</a></strong></p>\n<p>View and manage your theme’s icon library in Theme Builder, including uploading custom assets to replace default icons. Icons support size variants, outline and fill styles, and dynamic color adjustments and integrate with embeddable components.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-themebuilder-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Theme Builder",
    "type": "New feature",
    "products": [
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=assign-fonts-by-category&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Control typography at the component category level</a></strong></p>\n<p>Assign fonts to individual component categories to create clearer visual distinction across your interface.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-themebuilder-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Theme Builder",
    "type": "New feature",
    "products": [
      "UI",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=edit-font-size&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Flexible Font size control</a></strong></p>\n<p>Fine-tune font sizes across component categories for a polished, consistent look. Use font‑size controls to tailor default or custom fonts to your brand needs. Applies across Next Experience and embeddable components, ensuring a consistent brand look even on external sites.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-themebuilder-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Third-party Risk Management",
    "type": "Important Information for upgrading",
    "products": [
      "IRM",
      "SecOps",
      "VR",
      "CMDB"
    ],
    "details": "<p>If you’re a VRM user upgrading to TPRM and upgrading to Australia from an earlier release, you must run each upgrade sequentially to ensure that fix scripts run correctly. For example, you must upgrade from Xanadu to Yokohama, Yokohama to Zurich, and so on. If the scripts don’t run in the correct order, you can get data inconsistencies, broken functionalities, and conflicts.</p>\n<p>After upgrading to version 21.0.x, you can enable the Smart Assessment Engine (SAE) by setting the Smart Assessment Engine enabled (<strong>sn\\_vdr\\_risk\\_asmt.sae\\_enabled</strong>) property. After setting this property, Smart Assessment Engine (SAE) becomes the default assessment engine and replaces the legacy experience. The transition isn’t reversible.</p>\n<p><strong>Warning:</strong></p>\n<p>Set this property in your non-production instances and conduct thorough testing before changing your production instances. Failure to do so may result in unexpected issues.</p>\n<p>For more information on upgrading from VRM to TPRM and the differences between the Smart and Classic Assessment engines, see <a href=\"https://www.servicenow.com/docs/access?context=grc-tprm-upgrade-info&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Third-party Risk Management upgrade information</a>.</p>\n<p>For existing TPRM customers, after upgrading to version 21.0.3, data from the Industry column in the Company [core\\_company] table is automatically migrated to the tprm\\_industry column. Migration can take several hours depending on the number of records in the Company [core\\_company] table. After migration, a system log message confirms that the migration is complete. Review the Company [core\\_company] table content and update any customizations referencing the Industry field to use tprm\\_industry. After verifying the migration and updating customizations, you can drop the Industry column.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-thirdpartyriskmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Third-party Risk Management",
    "type": "New feature",
    "products": [
      "IRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=tprm-dora-currency-aggregation&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Generate aggregate regulatory reports in local currencies</a></strong></p>\n<p>After upgrading the Digital Resilience Third-party Information Register application to version 22.0.3, third‑party risk (TPR) managers [sn\\_vdr\\_risk\\_asmt.vendor\\_manager] can standardize annual expense values during Register of Information report generation by enabling currency conversion and third‑party total expense aggregation. To support this process, the generated reporting package includes summary and detail reports that indicate successful conversions, aggregation results, and any skipped providers.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-thirdpartyriskmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Third-party Risk Management",
    "type": "New feature",
    "products": [
      "IRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=tprm-integrating-ucm&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Centralized repository for TPRM SAE templates</a></strong></p>\n<p>After upgrading to version 22.0.2 and installing the Unified Content Management application, TPR managers [sn\\_vdr\\_risk\\_asmt.vendor\\_risk\\_manager] can help ensure consistent and comprehensive assessments by activating and updating ready‑to‑use Smart Assessment Engine questionnaire templates through a single, managed repository in the Vendor Management Workspace.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-thirdpartyriskmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Third-party Risk Management",
    "type": "Change",
    "products": [
      "IRM",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=now-assist-for-tprm-rn&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Now Assist for Third-party Risk Management (TPRM) release notes</a></strong></p>\n<p>Review the Now Assist for Third-party Risk Management (TPRM) release notes for full descriptions of Now Assist features in Now Assist for Third-party Risk Management (TPRM).</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-thirdpartyriskmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Third-party Risk Management",
    "type": "Change",
    "products": [
      "IRM",
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=tprm-workflow-in-workspace&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Simplified third-party element process</a></strong></p>\n<p>After upgrading to version 22.0.1, third‑party elements are now linked to a single third party and can no longer be shared across third parties. Scoring rollups calculate results from element‑level assessments rather than entity records.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-thirdpartyriskmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Third-party Risk Management",
    "type": "Removed",
    "products": [
      "IRM",
      "SecOps"
    ],
    "details": "<p>Assessments using entities are no longer supported.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-thirdpartyriskmanagement-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Threat Intelligence Security Center",
    "type": "New feature",
    "products": [
      "SecOps",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=tisc-hibp-integration&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">TISC Have I Been Powned integration</a></strong></p>\n<p>Added support in TISC for Have I Been Pwned (HIBP) observable enrichment, enabling analysts to identify whether observables have been exposed in known data breaches instances.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-threatintelligencesecuritycenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Threat Intelligence Security Center",
    "type": "New feature",
    "products": [
      "SecOps",
      "IRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=tisc-tag-rules&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">TISC tag rules</a></strong></p>\n<p>Added support for automated tagging of RSS feed records using configurable tagging rules for tags and taxonomies.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-threatintelligencesecuritycenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Threat Intelligence Security Center",
    "type": "New feature",
    "products": [
      "SecOps",
      "CMDB",
      "IRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=tisc-create-cwe-record&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">TISC create CWE record</a></strong></p>\n<p>Introduced Products as related entities with support for relationship linking.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-threatintelligencesecuritycenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Threat Intelligence Security Center",
    "type": "New feature",
    "products": [
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=tisc-create-remediation-record&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">TISC create remediation record</a></strong></p>\n<p>Introduced remediations as related entities with support for relationship linking and added support for managing remediations.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-threatintelligencesecuritycenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Threat Intelligence Security Center",
    "type": "New feature",
    "products": [
      "SecOps",
      "CMDB"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=tisc-create-product&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">TISC create product</a></strong></p>\n<p>Introduced Products as related entities with support for relationship linking.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-threatintelligencesecuritycenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Threat Intelligence Security Center",
    "type": "New feature",
    "products": [
      "SecOps",
      "IRM",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=tisc-add-vendor-to-vul&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">TISC add vendor to VUL</a></strong></p>\n<p>Introduced Vendors as related entities with support for relationship linking.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-threatintelligencesecuritycenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Threat Intelligence Security Center",
    "type": "Change",
    "products": [
      "SecOps",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=mitre-extraction-rules&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">MITRE extraction rules</a> and <a href=\"https://www.servicenow.com/docs/access?context=mitre-extraction-method&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">MITRE extraction method</a></strong></p>\n<p>Enabled MITRE extraction rules for RSS feeds to automatically map and associate MITRE ATT&CK techniques.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-threatintelligencesecuritycenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Threat Intelligence Security Center",
    "type": "Change",
    "products": [
      "SecOps",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=define-rss-feeds&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Define RSS feeds</a></strong></p>\n<p>Enhanced the RSS feed schema and parsers to support additional fields, including tags, taxonomies, status, and expiration time.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-threatintelligencesecuritycenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Threat Intelligence Security Center",
    "type": "Change",
    "products": [
      "SecOps",
      "IRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=tisc-create-intel-records-lib&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">TISC create intel records lib</a> and <a href=\"https://www.servicenow.com/docs/access?context=tisc-obs-add-taxii-collects&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">TISC obs add taxii collects</a></strong></p>\n<p>Enhanced STIX 2.1 export to include Traffic Light Protocol (TLP) definitions applied to intelligence objects as TLP 2.0 marking definition objects. For more information, see <a href=\"https://www.servicenow.com/docs/access?context=marking-definition&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">marking definition</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-threatintelligencesecuritycenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Threat Intelligence Security Center",
    "type": "Change",
    "products": [
      "SecOps",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=reports-system-properties&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Reports system properties</a></strong></p>\n<p>The system property <code>sn_sec_tisc.reporting.email_template_sn_sec_tisc_case</code> is no longer supported in TISC. It has been renamed to <code>sn_sec_tisc.default_report_email_template</code>, effective with the latest release.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-threatintelligencesecuritycenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Threat Intelligence Security Center",
    "type": "Change",
    "products": [
      "SecOps",
      "Integrations"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=tisc-premium-misp&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">TISC premium MISP</a></strong></p>\n<p>Enhanced MISP API feed ingestion to correctly handle events when the published timestamp is greater than the modified timestamp.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-threatintelligencesecuritycenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Threat Intelligence Security Center",
    "type": "Change",
    "products": [
      "SecOps",
      "IRM"
    ],
    "details": "<p><strong>[Define vulnerability]](https://www.servicenow.com/docs/access?context=define-vulnerability&family=australia&ft:locale=en-US) and <a href=\"https://www.servicenow.com/docs/access?context=access-the-vulnerability-entities&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Access the vulnerability entities</a></strong></p>\n<p>Enhanced the vulnerability schema to support additional vulnerability intelligence fields related to CVSS scoring, exploit details, and remediation information.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-threatintelligencesecuritycenter-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "UI Builder",
    "type": "New feature",
    "products": [
      "UI",
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=uib-ui-interactions&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Create event-driven UI interactions</a></strong></p>\n<p>Trigger UI interactions directly from events in UI Builder, allowing you to link event-driven behavior to reusable interaction logic with the following benefits:</p>\n<ul>\n<li>Define an interaction once and apply it across multiple events and pages so UI components such as modals don't have to be associated directly with the page anymore.</li>\n<li>Connect events to interactions without additional scripting.</li>\n<li>Centralize logic for consistent updates and fewer errors.</li>\n<li>Previously, Declarative Actions using UXF Client Actions required manual wiring on each page leading to complexity and upgrade risks. UI Interactions replace this with reusable, declarative event mapping.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-uibuilder-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "UI Builder",
    "type": "Change",
    "products": [
      "UI",
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=use-across-pages&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Use pages across experiences</a></strong></p>\n<p>Share and reuse pages across workspaces without switching contexts or rebuilding content to help save time and simplify maintenance.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-uibuilder-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Universal Request",
    "type": "New feature",
    "products": [
      "CSM",
      "Core Platform",
      "HRSD",
      "ITSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=ur-create-universal-request-record&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Inter-department communication</a></strong></p>\n<p>Improve inter-departmental communication by enabling agents to effectively collaborate on associated tickets using the <strong>Sidebar discussions</strong> and <strong>Discuss</strong> options. Control agent participation through restricted lists and apply access permissions consistently across associated tickets.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-universalrequest-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Universal Request",
    "type": "New feature",
    "products": [
      "CSM",
      "HRSD",
      "WSD",
      "ITSM",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=agentic-flow-ur&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Universal Request Router agentic workflow</a></strong></p>\n<p>Enable employees to request help with services that are hard to locate in the catalog listing or need support from multiple departments.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-universalrequest-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Universal Request",
    "type": "Activation Information",
    "products": [
      "Core Platform",
      "CSM",
      "HRSD",
      "ITSM"
    ],
    "details": "<p>Universal Request is available with activation of the Universal Request plugin (com.snc.universal\\_request). For details, see <a href=\"https://www.servicenow.com/docs/access?context=activate-ur-plugin&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Activate Universal Request</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-universalrequest-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Upgrade Console",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=um-pre-upgrade-activities&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">App version compatibility support</a></strong></p>\n<p>Update the Now Assist suite to manage application version compatibility by automatically updating all related applications to compatible versions when you upgrade an application in the compatibility matrix.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-upgradeconsole-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Upgrade Console",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=um-post-upgrade-activities&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ATF Troubleshooting agent access</a></strong></p>\n<p>You can now troubleshoot failed tests by accessing the ATF troubleshooting agent from the Conduct post-testing step in the post-upgrade activities of a non-production instance.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-upgradeconsole-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Usage Insights",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Developers",
      "UI"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=tagged-events&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Creating custom events</a></strong></p>\n<p>Create custom events without code directly in your application using the Usage Insights page overlay. Use event descriptions to provide greater visibility and clarity on Usage Insights events.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-usageinsights-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Usage Insights",
    "type": "New feature",
    "products": [
      "Core Platform",
      "UI",
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-funnel&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Funnels.</a></strong></p>\n<p>Access funnels you create in Usage Insights directly in the Platform Analytics UI to view this data along with your organization's other business metrics.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-usageinsights-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Usage Insights",
    "type": "New feature",
    "products": [
      "Core Platform",
      "UI",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=uxa-dashboards&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Dashboards.</a></strong></p>\n<p>Customize dashboards or pages for Platform Analytics directly in Usage Insights.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-usageinsights-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Usage Insights",
    "type": "Activation Information",
    "products": [
      "AI Platform",
      "Core Platform"
    ],
    "details": "<p>Usage Insights is a ServiceNow AI Platform feature that is active by default.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-usageinsights-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Visa Spoke",
    "type": "Change",
    "products": [
      "Integrations",
      "SecOps"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=visa-spoke&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Card data security updates</a></strong></p>\n<p>The following spoke actions have been updated to support integration with the Card data security application:</p>\n<ul>\n<li>Look up Associated Transaction List</li>\n<li>Look up Image</li>\n<li>Look up Report Output</li>\n<li>Download and Attach Image</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-visaspoke-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Workflow Studio",
    "type": "Important Information for upgrading",
    "products": [
      "AI Platform",
      "Core Platform",
      "UI",
      "Developers"
    ],
    "details": "<p>An earlier version of the save as you go feature was released and withdrawn from the Washington DC release. If you're upgrading from the Washington DC release, you might have manually turned off the save as you go features by setting a system property. To restore the save as you go features, see <a href=\"https://www.servicenow.com/docs/access?context=restore-save-as-you-go-functionality&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Restore save as you go functionality</a>.</p>\n<p>Strengthen your instance security and maintain backward compatibility through enhanced protections for read‑only fields across the ServiceNow AI Platform®. These back-end changes include a new “read\\_only\\_option” field with granular control levels, including “strict\\_read\\_only” and “client\\_script\\_modifiable\". If you have custom client scripts that modify read‑only fields on the ServiceNow AI Platform® using g\\_form.setValue() or g\\_form.clearValue(), see the <a href=\"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB2718122\" target=\"_blank\" rel=\"noopener noreferrer\">Remediation for strict read-only fields preventing client side updates KB2718122</a> article in the Now Support Knowledge Base. This article provides additional technical details on how to identify affected fields and adjust their settings. For more information about granular read-only security options, see <a href=\"https://www.servicenow.com/docs/access?context=read-only-option&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Configuring read-only security options</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-workflowstudio-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Workflow Studio",
    "type": "New feature",
    "products": [
      "Core Platform",
      "AI Platform",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-trigger-business-calendar&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Business calendar as a scheduled trigger</a></strong></p>\n<p>Use the business calendar to trigger flows on existing business schedules. The business calendar trigger helps align automation with shifts, holidays, and operating hours.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-workflowstudio-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Workflow Studio",
    "type": "New feature",
    "products": [
      "Core Platform",
      "UI",
      "Developers"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=flow-history-compare-view&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Flow history compare view</a></strong></p>\n<p>Compare two flow history entries in a side-by-side view. Use the step highlighting and change type icons to determine what flow components have been added, removed, and changed.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-workflowstudio-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Workflow Studio",
    "type": "New feature",
    "products": [
      "Core Platform",
      "ITOM",
      "Now Assist",
      "Developers",
      "AI Ops"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=flow-execution-analysis-landing&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Flow execution analysis</a></strong></p>\n<p>Analyze flow execution details to identify errors and suggest potential fixes.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-workflowstudio-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Workflow Studio",
    "type": "New feature",
    "products": [
      "Now Assist",
      "AI Platform",
      "Core Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=use-an-ai-agent-action&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Use an AI agent action</a></strong></p>\n<p>Use flow data to run an AI agent and configure the expected agent output for use later in the flow.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-workflowstudio-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Workflow Studio",
    "type": "Activation Information",
    "products": [
      "AI Platform",
      "Core Platform",
      "Now Assist",
      "Developers"
    ],
    "details": "<p>Workflow Studio is a ServiceNow AI Platform feature that is active by default.</p>\n<p>Get the latest Workflow Studio features by updating the app from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-workflowstudio-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Workforce Optimization for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "FSM",
      "HRSD",
      "WSD"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=location-based-holiday-calendar-management&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Location Based Holiday Calendar Management</a></strong></p>\n<p>Enable location-based holiday calendars to</p>\n<ul>\n<li>Manage location‑based holiday calendars that auto‑sync to schedules, providing real‑time visibility into regional holiday impacts and supporting accurate shift planning.</li>\n<li>Improve workforce scheduling and compliance by mapping holidays to specific regions, reducing manual adjustments and ensuring agents see their location‑based holidays in My Calendar.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-workforceoptimizationforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Workforce Optimization for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "Now Assist",
      "AI Search"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=csm-configurable-manager-workspace-dashboards-new&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Manager Workspace landing page</a></strong></p>\n<p>Enhance the Manager Dashboard to view</p>\n<ul>\n<li>New <strong>AI Insights</strong> tab on the Manager Dashboard in the Manager Workspace (Enterprise SKU).</li>\n<li>The AI powered widgets: Sentiment Analysis, Trending Topics, and Auto QA. These widgets provide deeper, real‑time visibility into customer sentiment signals, trending interaction themes, and quality evaluations.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-workforceoptimizationforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Workforce Optimization for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "Now Assist",
      "CRM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=manager-dashboard-for-operational-insights&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Manager dashboard for operational Insights</a></strong></p>\n<p>Decouple the existing Manager Dashboard to make it available as a standalone feature.</p>\n<ul>\n<li>Install and configure the Manager Dashboard independently to provide a streamlined, modular experience, retaining only essential alerts and core widgets for performance, work management, and resource visibility while removing scheduling and coaching components.</li>\n<li>Pro customers can view Help Request alerts and Operational Insights when Channel Management is adopted with the dashboard. These capabilities are not available when Channel Management is adopted without the dashboard.</li>\n<li>Pro+ customers can view a tab based dashboard layout with AI powered widgets Sentiment Analysis, Trending Topics, and Auto QA for Customer Signals and Quality Management. They can access the Operations Insights tab with widgets like Performance, Work Management, and Resource Management.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-workforceoptimizationforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Workforce Optimization for CSM",
    "type": "New feature",
    "products": [
      "CSM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=listen-agent-call-configurable-wfo-cs&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Listen, Monitor or Barge in to an agent call</a></strong></p>\n<p>Monitor, coach, or barge into voice calls to</p>\n<ul>\n<li>Assist agents during live customer calls by opening the agent’s active phone interaction in Manager Workspace.</li>\n<li>Enable supervisors to silently monitor calls, whisper‑coach agents, join conversations, view real‑time transcription when the conversation panel is enabled, and switch modes or end the session at any time using the NVC utility panel.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-workforceoptimizationforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Workforce Optimization for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "WSD"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=csm-configurable-manager-workspace-dashboards-new&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Manager Workspace landing page</a></strong></p>\n<p>Enable Manager dashboard to view the Help Request on the landing page.</p>\n<ul>\n<li>View the <strong>Help Request</strong> tab on the Manager Workspace landing page and in Conversation Monitoring list view.</li>\n<li>Segment Help Request interactions by different channel including Chat, Email, Messaging, Phone and Video.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-workforceoptimizationforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Workforce Optimization for CSM",
    "type": "New feature",
    "products": [
      "CSM",
      "CRM",
      "WSD"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=explore-channels-configurable-wfo-cs&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Channel Management in Workforce Optimization for Customer Service</a></strong></p>\n<ul>\n<li>View the <strong>Help Request</strong> tab on the Channel Management landing page.</li>\n<li>Enable supervisors to open any active voice request to review context and take action by monitoring the live call, coaching the agent privately, or barging in to speak with both the agent and the customer.</li>\n</ul>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-workforceoptimizationforcsm-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Zero Copy Connectors",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Integrations",
      "CMDB",
      "ITOM"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=cloudera-impala-zcc&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Cloudera Impala</a></strong></p>\n<p>Retrieve data from Cloudera Impala in real time without copying or duplicating the data.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-zerocopyconnectors-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Zero Copy Connectors",
    "type": "New feature",
    "products": [
      "Core Platform",
      "Integrations",
      "AI Platform",
      "Now Assist",
      "AI Search"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=servicenow-remote-instance-zcc&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Connect to another ServiceNow® instance</a></strong></p>\n<p>Retrieve data from another ServiceNow® instance in real time without copying or duplicating the data.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-zerocopyconnectors-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Zero Copy Connectors",
    "type": "New feature",
    "products": [
      "Integrations",
      "Core Platform",
      "CMDB",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=create-databricks-connection-zcc&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">OAuth authentication</a></strong></p>\n<p>Configure OAuth authentication in Databricks, Oracle, and Snowflake connectors.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-zerocopyconnectors-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Zero Copy Connectors",
    "type": "Change",
    "products": [
      "Integrations",
      "Core Platform",
      "AI Platform"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=apache-iceberg-primary-zcc&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Apache Iceberg primary connector</a></strong></p>\n<p>The Apache Iceberg connector is now certified as a primary connector.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-zerocopyconnectors-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Zero Copy Connectors",
    "type": "Change",
    "products": [
      "Core Platform",
      "AI Platform",
      "Integrations",
      "Now Assist"
    ],
    "details": "<p><strong><a href=\"https://www.servicenow.com/docs/access?context=primary-connectors-zcc&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Primary connectors in preview</a></strong></p>\n<p>Primary connectors that are still being enhanced to include all planned functionality are now marked with a Preview label. These connectors are fully supported by ServiceNow®.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-zerocopyconnectors-release-notes.html",
    "resources": "",
    "importance": ""
  },
  {
    "name": "Zero Copy Connectors",
    "type": "Activation Information",
    "products": [
      "Core Platform",
      "AI Platform",
      "Integrations"
    ],
    "details": "<p>Install Zero Copy Connector Hub by requesting it from the ServiceNow Store. Visit the <a href=\"https://store.servicenow.com/sn_appstore_store.do#!/store/home\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store</a> to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the <a href=\"https://www.servicenow.com/docs/access?context=sn-store-release-notes&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">ServiceNow Store version history release notes</a>.</p>\n<p>Zero Copy Connector Hub is also available with activation of the Zero Copy Connectors app (sn\\_data\\_fabric\\_zcc), which requires a separate subscription. For details, see <a href=\"https://www.servicenow.com/docs/access?context=request-zcc&family=australia&ft:locale=en-US\" target=\"_blank\" rel=\"noopener noreferrer\">Request Zero Copy Connectors</a>.</p>",
    "link": "https://www.servicenow.com/docs/r/delta-zurich-australia/australia-zurich-zerocopyconnectors-release-notes.html",
    "resources": "",
    "importance": ""
  }
];
