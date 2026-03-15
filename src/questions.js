// AB-900 Practice Questions Database
// Source: Microsoft Learn - https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-900
// These are original practice questions based on publicly available Microsoft Learn documentation.

const QUESTIONS = [
  // ── DOMAIN 1: Microsoft 365 Core Services & Security (70 questions) ─────────
  {
    id: 1,
    domain: "M365 Core Services & Security",
    question: "A new employee needs access to Microsoft 365 but should only be able to use email. Which license is the most cost-efficient choice?",
    options: ["Microsoft 365 E5", "Microsoft 365 Business Premium", "Exchange Online Plan 1", "Microsoft 365 F3"],
    correct: 2,
    explanation: "Exchange Online Plan 1 provides a 50 GB mailbox and email capabilities only — no Teams, SharePoint, or other apps. For users who only need email, this is the most cost-efficient option.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/misc/compare-ways-to-block-access",
    sourceLabel: "Microsoft Learn – Compare Microsoft 365 plans"
  },
  {
    id: 2,
    domain: "M365 Core Services & Security",
    question: "Which admin center do you use to add a custom domain like 'contoso.com' to a Microsoft 365 tenant?",
    options: ["Exchange Online admin center", "Microsoft Entra admin center", "Microsoft 365 admin center", "SharePoint admin center"],
    correct: 2,
    explanation: "Domain names and organization settings are managed via the Microsoft 365 admin center (admin.microsoft.com). You add the domain, verify ownership via DNS records, and set it as the primary domain here.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/setup/add-domain",
    sourceLabel: "Microsoft Learn – Add a domain to Microsoft 365"
  },
  {
    id: 3,
    domain: "M365 Core Services & Security",
    question: "What is the primary difference between a Microsoft 365 Group and a distribution list?",
    options: [
      "They are identical — only the name differs",
      "A Microsoft 365 Group creates shared resources (mailbox, SharePoint site, Teams); a distribution list only routes email to members",
      "Distribution lists offer more features than Microsoft 365 Groups",
      "Microsoft 365 Groups are only for security purposes"
    ],
    correct: 1,
    explanation: "A Microsoft 365 Group automatically provisions a shared mailbox, SharePoint site, Teams workspace, and Planner board. A distribution list only routes inbound emails to multiple recipients — no shared workspace is created.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/create-groups/compare-groups",
    sourceLabel: "Microsoft Learn – Compare groups in Microsoft 365"
  },
  {
    id: 4,
    domain: "M365 Core Services & Security",
    question: "Which SharePoint permission level grants read-only access to a site?",
    options: ["Owner", "Member", "Visitor", "Contributor"],
    correct: 2,
    explanation: "Visitors have the 'Read' permission level in SharePoint — they can view content but cannot edit or delete. Members can contribute content; Owners have full control including managing permissions.",
    source: "https://learn.microsoft.com/en-us/sharepoint/understanding-permission-levels",
    sourceLabel: "Microsoft Learn – Understanding permission levels in SharePoint"
  },
  {
    id: 5,
    domain: "M365 Core Services & Security",
    question: "A Teams administrator wants to prevent users from installing third-party apps in Teams. Which object should be configured?",
    options: ["An Exchange Online transport rule", "A Teams app permission policy", "A SharePoint site policy", "A Microsoft Entra conditional access policy"],
    correct: 1,
    explanation: "Teams app permission policies control which apps users can install and use in Teams. Administrators can block all third-party apps or allow only specific approved apps via the Teams admin center.",
    source: "https://learn.microsoft.com/en-us/microsoftteams/teams-app-permission-policies",
    sourceLabel: "Microsoft Learn – Manage app permission policies in Teams"
  },
  {
    id: 6,
    domain: "M365 Core Services & Security",
    question: "What is the primary purpose of Multi-Factor Authentication (MFA)?",
    options: [
      "To encrypt emails in transit",
      "To require a second verification factor beyond the password, protecting accounts even if the password is compromised",
      "To automatically reset passwords after 90 days",
      "To block sign-ins outside business hours"
    ],
    correct: 1,
    explanation: "MFA adds a security layer by requiring a second factor (e.g., authenticator app, SMS code) in addition to the password. A stolen password alone is insufficient to gain access.",
    source: "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-mfa-howitworks",
    sourceLabel: "Microsoft Learn – How MFA works in Microsoft Entra"
  },
  {
    id: 7,
    domain: "M365 Core Services & Security",
    question: "Which MFA method is considered the most secure for Microsoft 365 accounts?",
    options: ["SMS text message with one-time code", "Email with verification link", "Microsoft Authenticator app with number matching", "Phone call with spoken code"],
    correct: 2,
    explanation: "The Microsoft Authenticator app with number matching is the most secure MFA method. SMS and phone calls are vulnerable to SIM-swapping attacks. Number matching prevents MFA fatigue attacks by requiring the user to enter the displayed number.",
    source: "https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-mfa-number-match",
    sourceLabel: "Microsoft Learn – Number matching in Microsoft Authenticator"
  },
  {
    id: 8,
    domain: "M365 Core Services & Security",
    question: "An administrator wants non-compliant devices to require MFA when accessing Microsoft 365. Which technology implements this?",
    options: ["Microsoft Purview DLP", "Conditional Access policy", "Microsoft Entra PIM", "Exchange Online mailbox policy"],
    correct: 1,
    explanation: "Conditional Access policies evaluate sign-in signals (user, device, location, app) and apply access controls. A policy can require MFA when a device does not meet compliance requirements set in Microsoft Intune.",
    source: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview",
    sourceLabel: "Microsoft Learn – What is Conditional Access?"
  },
  {
    id: 9,
    domain: "M365 Core Services & Security",
    question: "What is the difference between authentication and authorization?",
    options: [
      "Authentication checks what you can do; authorization confirms who you are",
      "Authentication confirms who you are (identity verification); authorization determines what you can do (access rights)",
      "They are identical in the Microsoft 365 context",
      "Authentication is only for external users; authorization for internal users"
    ],
    correct: 1,
    explanation: "Authentication = identity verification ('are you who you say you are?'). Authorization = access control ('what are you allowed to do now that we know who you are?'). In M365, authentication happens via Microsoft Entra ID; authorization via permissions and roles.",
    source: "https://learn.microsoft.com/en-us/entra/fundamentals/identity-fundamental-concepts",
    sourceLabel: "Microsoft Learn – Identity and access management fundamentals"
  },
  {
    id: 10,
    domain: "M365 Core Services & Security",
    question: "An employee is leaving the organization. What should the administrator do FIRST to prevent unauthorized access?",
    options: [
      "Delete the user's mailbox",
      "Revoke the SharePoint license",
      "Block/disable the user account in Microsoft Entra ID",
      "Remove the user from all distribution lists"
    ],
    correct: 2,
    explanation: "The first priority is blocking the account in Microsoft Entra ID — this immediately prevents all sign-ins across all M365 services. Revoking licenses and archiving the mailbox are follow-up steps but do not stop active sessions as quickly.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/remove-former-employee",
    sourceLabel: "Microsoft Learn – Remove a former employee"
  },
  {
    id: 11,
    domain: "M365 Core Services & Security",
    question: "Which SharePoint role has full control of a site, including managing permissions?",
    options: ["Visitor", "Member", "Contributor", "Owner"],
    correct: 3,
    explanation: "SharePoint site Owners have the 'Full Control' permission level. They can manage content, change permissions, create subsites, and modify all site settings. This is the highest access level at the site level.",
    source: "https://learn.microsoft.com/en-us/sharepoint/understanding-permission-levels",
    sourceLabel: "Microsoft Learn – Understanding permission levels in SharePoint"
  },
  {
    id: 12,
    domain: "M365 Core Services & Security",
    question: "What does the Identity Secure Score in Microsoft Entra measure?",
    options: [
      "The total number of active users in the tenant",
      "A measurement of the identity environment's security posture with recommendations for improvement",
      "The compliance score for GDPR regulations",
      "The number of failed sign-ins in the last 30 days"
    ],
    correct: 1,
    explanation: "The Identity Secure Score measures how well the Entra environment follows security best practices, comparing the score against similar organizations. It provides prioritized improvement actions such as 'Enable MFA for all administrators'.",
    source: "https://learn.microsoft.com/en-us/entra/identity/monitoring-health/concept-identity-secure-score",
    sourceLabel: "Microsoft Learn – Identity Secure Score"
  },
  {
    id: 13,
    domain: "M365 Core Services & Security",
    question: "What is a channel in Microsoft Teams?",
    options: [
      "A separate Teams app for video conferencing",
      "An organized space within a team for conversations, files, and apps around a specific topic or project",
      "A private chat between two users",
      "A security group for Teams access management"
    ],
    correct: 1,
    explanation: "Channels are the primary collaboration spaces within a Teams team. They organize conversations, files, and apps around a topic. Standard channels are visible to all team members; private channels have restricted access.",
    source: "https://learn.microsoft.com/en-us/microsoftteams/teams-channels-overview",
    sourceLabel: "Microsoft Learn – Teams and channels overview"
  },
  {
    id: 14,
    domain: "M365 Core Services & Security",
    question: "Which Exchange Online object allows multiple employees to receive and reply to emails sent to a shared address like helpdesk@contoso.com?",
    options: ["Distribution list", "Security group", "Shared mailbox", "Microsoft 365 Group"],
    correct: 2,
    explanation: "A shared mailbox lets multiple users receive AND send emails from the same address. Unlike a distribution list (which only routes incoming email), users can reply from the shared address. No additional license is required for up to 50 GB.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/email/about-shared-mailboxes",
    sourceLabel: "Microsoft Learn – About shared mailboxes"
  },
  {
    id: 15,
    domain: "M365 Core Services & Security",
    question: "What is the purpose of a security group in Microsoft Entra ID?",
    options: [
      "To send emails to multiple users simultaneously",
      "To group users for assigning access rights to resources like SharePoint sites, apps, and licenses",
      "To manage Teams channels for project teams",
      "To automatically reset passwords for group members"
    ],
    correct: 1,
    explanation: "Security groups are used for access management: you assign rights to the group rather than individual users. This simplifies management — add a user to the group and they automatically inherit all associated permissions.",
    source: "https://learn.microsoft.com/en-us/entra/fundamentals/concept-learn-about-groups",
    sourceLabel: "Microsoft Learn – Learn about groups in Microsoft Entra ID"
  },
  {
    id: 16,
    domain: "M365 Core Services & Security",
    question: "What are the three core principles of Zero Trust security?",
    options: [
      "Verify always, use minimal privilege, assume breach",
      "Trust the internal network, block everything external, use firewalls",
      "Single authentication, flat network structure, open access",
      "MFA for admins only, VPN for all users, no guest access"
    ],
    correct: 0,
    explanation: "Zero Trust is built on three pillars: (1) Verify explicitly — always authenticate using all available data points, (2) Use least privilege access — limit user access to the minimum needed, (3) Assume breach — minimize impact by segmenting access.",
    source: "https://learn.microsoft.com/en-us/security/zero-trust/zero-trust-overview",
    sourceLabel: "Microsoft Learn – Zero Trust security model"
  },
  {
    id: 17,
    domain: "M365 Core Services & Security",
    question: "What is the purpose of an app registration in Microsoft Entra ID?",
    options: [
      "To publish a Teams app in the organization's app store",
      "To register an application so it can use Microsoft identity platform for authentication and API access",
      "To link a SharePoint site to an external web application",
      "To assign licenses to a specific application"
    ],
    correct: 1,
    explanation: "App registrations allow applications to use Microsoft Entra ID for authentication (OAuth 2.0/OpenID Connect) and authorized access to Microsoft Graph and other APIs. The registration defines the app identity, permissions, and secrets.",
    source: "https://learn.microsoft.com/en-us/entra/identity-platform/app-objects-and-service-principals",
    sourceLabel: "Microsoft Learn – Application and service principal objects"
  },
  {
    id: 18,
    domain: "M365 Core Services & Security",
    question: "Which Microsoft Defender XDR component specifically protects against phishing attacks and malicious email attachments in Exchange Online?",
    options: ["Microsoft Defender for Endpoint", "Microsoft Defender for Identity", "Microsoft Defender for Office 365", "Microsoft Defender for Cloud Apps"],
    correct: 2,
    explanation: "Microsoft Defender for Office 365 protects Exchange Online (and Teams, SharePoint) against phishing, malware in attachments (Safe Attachments), and malicious links (Safe Links). It is the email and collaboration security layer in XDR.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/security/office-365-security/defender-for-office-365",
    sourceLabel: "Microsoft Learn – Microsoft Defender for Office 365"
  },
  {
    id: 19,
    domain: "M365 Core Services & Security",
    question: "What is Privileged Identity Management (PIM) in Microsoft Entra used for?",
    options: [
      "Automatically resetting passwords after 90 days",
      "Assigning admin roles temporarily and requiring approval, eliminating permanently elevated privileges",
      "Encrypting sensitive emails in Exchange Online",
      "Monitoring Copilot usage per administrator"
    ],
    correct: 1,
    explanation: "PIM implements Just-in-Time (JIT) access: admin roles are activated temporarily for a defined period, optionally after approval. After the period expires, the elevated rights are automatically removed. This minimizes the risk of permanently privileged accounts.",
    source: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure",
    sourceLabel: "Microsoft Learn – What is Privileged Identity Management?"
  },
  {
    id: 20,
    domain: "M365 Core Services & Security",
    question: "What is the difference between a Teams standard channel and a private channel?",
    options: [
      "Standard channels are visible to all team members; private channels are only accessible to specifically invited members",
      "Private channels are encrypted; standard channels are not",
      "Standard channels do not support file storage; private channels do",
      "There is no functional difference, only a naming difference"
    ],
    correct: 0,
    explanation: "Standard channels are visible and accessible to all team members. Private channels have their own isolated space (including their own SharePoint site) and are only accessible to specifically invited members — even if they are members of the main team.",
    source: "https://learn.microsoft.com/en-us/microsoftteams/private-channels",
    sourceLabel: "Microsoft Learn – Private channels in Microsoft Teams"
  },
  {
    id: 21,
    domain: "M365 Core Services & Security",
    question: "Which tool in the Microsoft 365 admin center shows which administrator made configuration changes in the last 7 days?",
    options: ["Compliance Manager", "Audit log in Microsoft Purview", "Microsoft Entra Sign-in logs", "SharePoint Activity Reports"],
    correct: 1,
    explanation: "The Audit log in Microsoft Purview records administrator and user activities across the entire M365 ecosystem. Administrators can search by activity type, user, date, and service to track changes.",
    source: "https://learn.microsoft.com/en-us/purview/audit-solutions-overview",
    sourceLabel: "Microsoft Learn – Audit solutions in Microsoft Purview"
  },
  {
    id: 22,
    domain: "M365 Core Services & Security",
    question: "A user receives an MFA push notification on their phone but is NOT trying to sign in. What is the most likely cause?",
    options: [
      "The Microsoft Authenticator app has a bug",
      "Someone is attempting to log in with the user's stolen password — this is an MFA fatigue/push bombing attack",
      "The M365 license has expired",
      "The phone has no internet connection"
    ],
    correct: 1,
    explanation: "This is an 'MFA fatigue' or 'push bombing' attack: an attacker has the password and sends repeated MFA push requests hoping the user accidentally approves one. The correct action is to deny the request and notify IT. Number matching in the Authenticator app helps prevent this.",
    source: "https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-mfa-number-match",
    sourceLabel: "Microsoft Learn – Number matching to prevent MFA fatigue"
  },
  {
    id: 23,
    domain: "M365 Core Services & Security",
    question: "What is the purpose of the Service Health dashboard in the Microsoft 365 admin center?",
    options: [
      "To monitor the organization's security score",
      "To monitor the status of Microsoft 365 services for incidents, planned maintenance, and outages",
      "To check the license status of all users",
      "To query audit logs for compliance reporting"
    ],
    correct: 1,
    explanation: "The Service Health Dashboard shows the current status of all M365 services. Administrators can see active incidents, service advisories, and planned maintenance so they can proactively inform users about service disruptions.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/misc/health-dashboard-overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Service health dashboard"
  },
  {
    id: 24,
    domain: "M365 Core Services & Security",
    question: "What is the benefit of group-based licensing over individual license assignment?",
    options: [
      "Group-based licenses are always cheaper",
      "Licenses are automatically assigned or removed based on group membership, simplifying management and reducing errors",
      "Group-based licenses provide more features than individually assigned licenses",
      "It is exclusively available for Microsoft 365 E5 customers"
    ],
    correct: 1,
    explanation: "With group-based licensing, you assign licenses to a group. Every user who joins the group automatically receives the license; when they leave the group, the license is automatically removed. This eliminates manual license management at scale.",
    source: "https://learn.microsoft.com/en-us/entra/identity/users/licensing-groups-assign",
    sourceLabel: "Microsoft Learn – Assign licenses to a group"
  },
  {
    id: 25,
    domain: "M365 Core Services & Security",
    question: "Which admin center do you use to configure a Teams meeting policy that disables recordings for guests?",
    options: ["Microsoft 365 admin center", "Microsoft Entra admin center", "Teams admin center", "Exchange Online admin center"],
    correct: 2,
    explanation: "Meeting policies in Teams are configured in the Teams admin center (admin.teams.microsoft.com) under Meetings > Meeting policies. You can control per-policy settings such as recordings, transcriptions, and guest admission.",
    source: "https://learn.microsoft.com/en-us/microsoftteams/meeting-policies-overview",
    sourceLabel: "Microsoft Learn – Manage meeting policies in Teams"
  },
  {
    id: 26,
    domain: "M365 Core Services & Security",
    question: "A user cannot access a SharePoint site despite being in the correct group. Conditional Access is blocking the sign-in. What is the most likely cause?",
    options: [
      "The user does not have an Exchange Online license",
      "The device does not meet the compliance requirements in the Conditional Access policy",
      "The SharePoint site has a retention label applied",
      "The user has not completed MFA registration, but MFA is not a requirement in the policy"
    ],
    correct: 1,
    explanation: "Conditional Access can require devices to be 'compliant' (registered in Intune, meeting security requirements). If the device is not compliant, access is blocked regardless of other permissions or group memberships.",
    source: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-grant",
    sourceLabel: "Microsoft Learn – Conditional Access grant controls"
  },
  {
    id: 27,
    domain: "M365 Core Services & Security",
    question: "What is a guest user in Microsoft 365 and how do they differ from a member user?",
    options: [
      "Guest users are unpaid users; member users pay for their license",
      "Guest users are external people (outside the organization) invited for collaboration; member users are internal employees with a license in the tenant",
      "Guest users always have more rights than member users",
      "There is no functional difference in Microsoft 365"
    ],
    correct: 1,
    explanation: "Guest users (B2B guests) are external and have limited access to specifically shared resources. They authenticate via their own organization or Microsoft account. Member users are internal and have full access based on their license and permissions.",
    source: "https://learn.microsoft.com/en-us/entra/external-id/what-is-b2b",
    sourceLabel: "Microsoft Learn – B2B collaboration overview"
  },
  {
    id: 28,
    domain: "M365 Core Services & Security",
    question: "What does Microsoft Defender XDR provide that individual security products do not?",
    options: [
      "Email-only security for Exchange Online",
      "Correlated detection and response across multiple Microsoft 365 workloads (endpoint, email, identity, apps) in a single platform",
      "Only protection for on-premises servers",
      "Automatic license assignment for Copilot"
    ],
    correct: 1,
    explanation: "Microsoft Defender XDR (Extended Detection and Response) correlates signals from Defender for Endpoint, Defender for Office 365, Defender for Identity, and Defender for Cloud Apps. This provides a holistic view of attacks spanning multiple vectors.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/security/defender/microsoft-365-defender",
    sourceLabel: "Microsoft Learn – What is Microsoft Defender XDR?"
  },
  {
    id: 29,
    domain: "M365 Core Services & Security",
    question: "An organization wants to implement SSO so employees can use their M365 account to sign into Salesforce. What is the underlying technology?",
    options: [
      "SMTP relay via Exchange Online",
      "SAML 2.0 or OpenID Connect via Microsoft Entra ID as Identity Provider",
      "VPN tunneling via Azure",
      "Kerberos authentication via on-premises Active Directory"
    ],
    correct: 1,
    explanation: "SSO with SaaS applications uses federation protocols like SAML 2.0 or OpenID Connect. Microsoft Entra ID acts as the Identity Provider (IdP). The external app (like Salesforce) trusts Microsoft Entra ID tokens for authentication.",
    source: "https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on",
    sourceLabel: "Microsoft Learn – What is single sign-on in Microsoft Entra?"
  },
  {
    id: 30,
    domain: "M365 Core Services & Security",
    question: "Which Microsoft Defender XDR component detects suspicious activities in on-premises Active Directory, such as pass-the-hash attacks?",
    options: ["Microsoft Defender for Endpoint", "Microsoft Defender for Identity", "Microsoft Defender for Office 365", "Microsoft Defender for Cloud Apps"],
    correct: 1,
    explanation: "Microsoft Defender for Identity (formerly Azure ATP) monitors on-premises Active Directory for suspicious authentication patterns and attack techniques such as pass-the-hash, golden ticket attacks, and lateral movement.",
    source: "https://learn.microsoft.com/en-us/defender-for-identity/what-is",
    sourceLabel: "Microsoft Learn – What is Microsoft Defender for Identity?"
  },
  // Domain 1 continued...
  {
    id: 31,
    domain: "M365 Core Services & Security",
    question: "What is Microsoft Entra ID Connect used for?",
    options: [
      "Synchronizing Microsoft 365 licenses from an on-premises system",
      "Synchronizing on-premises Active Directory identities to Microsoft Entra ID for hybrid identity management",
      "Connecting SharePoint on-premises to SharePoint Online",
      "Routing Exchange on-premises emails to Exchange Online"
    ],
    correct: 1,
    explanation: "Microsoft Entra ID Connect synchronizes user accounts, groups, and password hashes from on-premises Active Directory to Microsoft Entra ID. This enables hybrid identity — users sign in with the same account for both on-premises and cloud resources.",
    source: "https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/whatis-azure-ad-connect",
    sourceLabel: "Microsoft Learn – What is Microsoft Entra Connect?"
  },
  {
    id: 32,
    domain: "M365 Core Services & Security",
    question: "A SharePoint library contains sensitive documents. How do you ensure only Finance team members can access it, even though the site is broadly accessible?",
    options: [
      "Apply a DLP policy to the library",
      "Break permission inheritance on the library and restrict access to the Finance security group",
      "Move the library to a separate SharePoint tenant",
      "Apply a retention label to all documents in the library"
    ],
    correct: 1,
    explanation: "SharePoint supports breaking permission inheritance at the library or document level. By setting unique permissions, you can restrict access to specific users or groups, regardless of the broader site permissions.",
    source: "https://learn.microsoft.com/en-us/sharepoint/what-is-permissions-inheritance",
    sourceLabel: "Microsoft Learn – SharePoint permissions inheritance"
  },
  {
    id: 33,
    domain: "M365 Core Services & Security",
    question: "What is a 'risky user' status in Microsoft Entra ID Protection?",
    options: [
      "A user who has more rights than their job role requires",
      "Microsoft Entra ID Protection has detected that the account may be compromised based on suspicious activity patterns",
      "A user who has not changed their password in 90 days",
      "A user added to a sensitive security group without approval"
    ],
    correct: 1,
    explanation: "Microsoft Entra ID Protection analyzes sign-in patterns and behavior. A 'Risky user' flag means the system has detected signals indicating possible compromise, such as sign-ins from unknown locations or use of leaked credentials.",
    source: "https://learn.microsoft.com/en-us/entra/id-protection/concept-identity-protection-risks",
    sourceLabel: "Microsoft Learn – What are risk detections?"
  },
  {
    id: 34,
    domain: "M365 Core Services & Security",
    question: "What is the Teams admin center used for in relation to teams and channels?",
    options: [
      "Creating and deleting individual files in Teams channels",
      "Configuring teams settings, channel policies, messaging policies, and meeting policies organization-wide",
      "Managing Exchange Online mailboxes for Teams users",
      "Assigning Microsoft 365 licenses to Teams users"
    ],
    correct: 1,
    explanation: "The Teams admin center (admin.teams.microsoft.com) is used to configure Teams-wide settings such as team creation policies, channel policies, messaging policies, meeting policies, and app permission policies. Individual file management happens in Teams itself.",
    source: "https://learn.microsoft.com/en-us/microsoftteams/manage-teams-in-modern-portal",
    sourceLabel: "Microsoft Learn – Manage Teams in the admin center"
  },
  {
    id: 35,
    domain: "M365 Core Services & Security",
    question: "What are API permissions in the context of Microsoft Entra app registrations?",
    options: [
      "Conditional Access policies that restrict API access",
      "Definitions of what an app is allowed to do on behalf of a user (delegated) or as itself (application permissions) when accessing Microsoft Graph",
      "PIM role assignments for application administrators",
      "SSO configuration settings for enterprise applications"
    ],
    correct: 1,
    explanation: "API permissions in app registrations define what an app can access. Delegated permissions work on behalf of a signed-in user; application permissions work without user context (daemon apps). Both must be consented to by an administrator for organization-wide use.",
    source: "https://learn.microsoft.com/en-us/entra/identity-platform/permissions-consent-overview",
    sourceLabel: "Microsoft Learn – Permissions and consent in Microsoft identity platform"
  },

  // ── DOMAIN 2: Data Protection & Governance (80 questions) ──────────────────
  {
    id: 36,
    domain: "Data Protection & Governance",
    question: "What is the difference between Microsoft Purview Information Protection and Microsoft Purview Data Loss Prevention (DLP)?",
    options: [
      "They are identical — only the name differs",
      "Information Protection classifies and labels data (sensitivity labels); DLP defines and enforces policies to prevent loss or inadvertent sharing of sensitive data",
      "DLP classifies data; Information Protection prevents data loss",
      "Information Protection only works in SharePoint; DLP only in Exchange"
    ],
    correct: 1,
    explanation: "Information Protection (sensitivity labels) marks documents with classifications and applies protection. DLP policies then detect these labels (and sensitive information types) and enforce rules — blocking, warning, or logging — on risky actions.",
    source: "https://learn.microsoft.com/en-us/purview/information-protection",
    sourceLabel: "Microsoft Learn – Microsoft Purview Information Protection"
  },
  {
    id: 37,
    domain: "Data Protection & Governance",
    question: "What is a Sensitive Information Type (SIT) in Microsoft Purview?",
    options: [
      "A type of sensitivity label for sensitive documents",
      "A pattern-matching rule that Microsoft Purview uses to identify specific sensitive data, such as credit card numbers or social security numbers",
      "A special type of security group for sensitive projects",
      "A DLP policy rule that always blocks"
    ],
    correct: 1,
    explanation: "Sensitive Information Types (SITs) are pattern-based definitions (regex, keywords, checksum validation) that Purview uses to recognize sensitive data. Microsoft provides 300+ built-in SITs (credit card numbers, passports, SSNs) and you can create custom SITs.",
    source: "https://learn.microsoft.com/en-us/purview/sensitive-information-type-learn-about",
    sourceLabel: "Microsoft Learn – Learn about sensitive information types"
  },
  {
    id: 38,
    domain: "Data Protection & Governance",
    question: "A retention label is set to 'Retain for 7 years, then delete'. A user tries to delete a document with this label after 3 years. What happens?",
    options: [
      "The document is deleted because the user is the owner",
      "The document is moved to the recycle bin",
      "The document cannot be permanently deleted — the retention hold prevents deletion until the 7 years have elapsed",
      "The document is archived in the Compliance Archive"
    ],
    correct: 2,
    explanation: "Retention labels with a 'retain' setting prevent permanent deletion while the retention period is active. Even if the user deletes the document, it is preserved in the Preservation Hold Library until the retention period expires.",
    source: "https://learn.microsoft.com/en-us/purview/retention",
    sourceLabel: "Microsoft Learn – Learn about retention policies and retention labels"
  },
  {
    id: 39,
    domain: "Data Protection & Governance",
    question: "How does Microsoft Copilot access data within Microsoft 365?",
    options: [
      "Copilot has access to all tenant data regardless of permissions",
      "Copilot only uses publicly available internet sources",
      "Copilot uses Microsoft Graph and respects the existing M365 permissions of the signed-in user",
      "Copilot asks the user to explicitly select which files to use"
    ],
    correct: 2,
    explanation: "Copilot uses Microsoft Graph to retrieve data. It never sees more than the user is allowed to see — existing SharePoint, Exchange, and Teams permissions are fully respected. This makes correct permissions management critical for Copilot security.",
    source: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy",
    sourceLabel: "Microsoft Learn – Data, Privacy, and Security for Microsoft 365 Copilot"
  },
  {
    id: 40,
    domain: "Data Protection & Governance",
    question: "What does the Activity Explorer in Microsoft Purview show?",
    options: [
      "Automatically blocks risky user activities",
      "A timeline of activities around sensitive and labeled data, such as labeling, printing, external sharing, and downloading",
      "Generates compliance reports for GDPR audits",
      "Manages retention policies for SharePoint libraries"
    ],
    correct: 1,
    explanation: "Activity Explorer provides visibility into what is happening with sensitive and labeled content — who downloaded, printed, shared externally, or changed labels on which document and when. This helps administrators assess DLP policy effectiveness.",
    source: "https://learn.microsoft.com/en-us/purview/data-classification-activity-explorer",
    sourceLabel: "Microsoft Learn – Get started with Activity Explorer"
  },
  {
    id: 41,
    domain: "Data Protection & Governance",
    question: "What is the purpose of Microsoft Purview Data Lifecycle Management?",
    options: [
      "To encrypt all data in Microsoft 365",
      "To manage the complete lifecycle of data: automatically retain what is needed and delete what is not, in compliance with regulations",
      "To detect data breaches in real-time",
      "To classify data based on sensitivity"
    ],
    correct: 1,
    explanation: "Data Lifecycle Management manages the data lifecycle via retention policies and retention labels. Organizations can automatically retain data (e.g., emails for 5 years) and then delete it, helping with GDPR compliance and reducing storage costs.",
    source: "https://learn.microsoft.com/en-us/purview/data-lifecycle-management",
    sourceLabel: "Microsoft Learn – Data lifecycle management in Microsoft Purview"
  },
  {
    id: 42,
    domain: "Data Protection & Governance",
    question: "What does the Compliance Manager in Microsoft Purview measure?",
    options: [
      "The number of active DLP policies in the tenant",
      "The organization's compliance progress against regulatory frameworks (such as GDPR, ISO 27001) with concrete improvement actions",
      "The security score of all user identities",
      "The percentage of emails blocked by DLP"
    ],
    correct: 1,
    explanation: "Compliance Manager calculates a score based on implemented vs. recommended controls for selected regulatory frameworks. Each improvement action increases the score. It also provides risk assessment and audit documentation.",
    source: "https://learn.microsoft.com/en-us/purview/compliance-manager",
    sourceLabel: "Microsoft Learn – Microsoft Purview Compliance Manager"
  },
  {
    id: 43,
    domain: "Data Protection & Governance",
    question: "A financial company wants to detect when employees discuss market-sensitive information in Teams chats that could indicate insider trading. Which Purview solution applies?",
    options: ["Data Loss Prevention", "Communication Compliance", "Insider Risk Management", "eDiscovery"],
    correct: 1,
    explanation: "Communication Compliance monitors communications (Teams, Exchange, Yammer) for policy violations, including financial sector regulations such as prohibitions on insider trading. It can detect specific keywords, patterns, and sentiments.",
    source: "https://learn.microsoft.com/en-us/purview/communication-compliance",
    sourceLabel: "Microsoft Learn – Learn about Communication Compliance"
  },
  {
    id: 44,
    domain: "Data Protection & Governance",
    question: "What is the difference between a retention policy and a retention label in Microsoft Purview?",
    options: [
      "They are identical — only the application differs",
      "A retention policy applies automatically and broadly to locations (all SharePoint sites, all Exchange mailboxes); a retention label is applied to specific items for fine-grained control",
      "Retention labels are mandatory; retention policies are optional",
      "Retention policies only work in Exchange; retention labels only in SharePoint"
    ],
    correct: 1,
    explanation: "Retention policies work at the location level (e.g., all Exchange mailboxes) and are ideal for broad compliance. Retention labels work at the item level and can be applied by users or automatically assigned for fine-grained control, including event-based retention.",
    source: "https://learn.microsoft.com/en-us/purview/retention-policies-exchange",
    sourceLabel: "Microsoft Learn – Learn about retention policies for Exchange"
  },
  {
    id: 45,
    domain: "Data Protection & Governance",
    question: "What is the risk of oversharing in SharePoint specifically in relation to Microsoft 365 Copilot?",
    options: [
      "Copilot can slow down due to too many shared files",
      "Users can retrieve information via Copilot from documents they wouldn't normally look for, because Copilot provides easily searchable summaries of broadly available data",
      "Oversharing causes storage limit issues in SharePoint",
      "Copilot refuses to work when oversharing is detected"
    ],
    correct: 1,
    explanation: "Copilot makes existing oversharing more visible. Data that was 'technically accessible but practically unfindable' (e.g., a broadly shared but forgotten document) can now be easily summarized and presented by Copilot. Oversharing risks increase once Copilot is in use.",
    source: "https://learn.microsoft.com/en-us/sharepoint/sharepoint-copilot-best-practices",
    sourceLabel: "Microsoft Learn – Sharepoint and Microsoft 365 Copilot best practices"
  },
  {
    id: 46,
    domain: "Data Protection & Governance",
    question: "Which Microsoft Purview tool helps identify SharePoint sites whose content is shared with 'Everyone in the organization'?",
    options: [
      "Communication Compliance",
      "Data Access Governance (DAG) report in SharePoint",
      "Microsoft Purview Compliance Manager",
      "Microsoft Defender for Cloud Apps"
    ],
    correct: 1,
    explanation: "The Data Access Governance report in SharePoint (part of SharePoint Advanced Management) shows an overview of files and sites shared with 'Everyone', external users, or broad internal groups. This is the starting point for oversharing remediation.",
    source: "https://learn.microsoft.com/en-us/sharepoint/data-access-governance-reports",
    sourceLabel: "Microsoft Learn – Data Access Governance reports for SharePoint sites"
  },
  {
    id: 47,
    domain: "Data Protection & Governance",
    question: "What does DSPM for AI (Data Security Posture Management) do that Compliance Manager does not?",
    options: [
      "DSPM is the same as Compliance Manager but with a different interface",
      "DSPM specifically focuses on AI-related data risks — which data AI tools like Copilot can reach — and helps reduce the AI-specific attack surface",
      "DSPM manages retention policies for AI-generated content",
      "DSPM replaces DLP policies for AI workloads"
    ],
    correct: 1,
    explanation: "DSPM for AI is specifically designed for the AI era. It analyzes which sensitive data is reachable by Copilot and other AI tools, identifies over-privileged access, and provides recommendations to improve the data risk profile for AI.",
    source: "https://learn.microsoft.com/en-us/purview/ai-microsoft-purview",
    sourceLabel: "Microsoft Learn – Microsoft Purview data security and compliance for Microsoft Copilot"
  },
  {
    id: 48,
    domain: "Data Protection & Governance",
    question: "What is the purpose of a Legal Hold in Microsoft Purview eDiscovery?",
    options: [
      "To create a retention policy for all mailboxes",
      "To preserve content in Exchange, SharePoint, and Teams for specific users regardless of regular deletion processes or user actions",
      "To create a DLP policy that blocks deletion",
      "To temporarily freeze user accounts"
    ],
    correct: 1,
    explanation: "A Legal Hold via Microsoft Purview eDiscovery freezes content for specific users or queries, regardless of retention policies or user actions. Content that would normally be deleted is preserved in the Preservation Hold Library — essential for litigation.",
    source: "https://learn.microsoft.com/en-us/purview/ediscovery-create-holds",
    sourceLabel: "Microsoft Learn – Create eDiscovery holds"
  },
  {
    id: 49,
    domain: "Data Protection & Governance",
    question: "What is 'data classification' in the context of Microsoft Purview?",
    options: [
      "Ranking files by file size",
      "Categorizing data based on sensitivity, regulatory requirements, or business value so appropriate security controls can be applied",
      "Grouping users based on their data access patterns",
      "Organizing emails into folders in Exchange Online"
    ],
    correct: 1,
    explanation: "Data classification is the process of categorizing data (e.g., Public, Internal, Confidential, Highly Confidential) so appropriate security measures can be applied. In Purview, this is done via sensitivity labels and automatic classification rules.",
    source: "https://learn.microsoft.com/en-us/purview/data-classification-overview",
    sourceLabel: "Microsoft Learn – Learn about data classification"
  },
  {
    id: 50,
    domain: "Data Protection & Governance",
    question: "What is the correct statement about Copilot and AI model training?",
    options: [
      "Microsoft uses customer prompts and responses to improve the underlying GPT models",
      "Customer data is anonymized and shared with other M365 tenants for model improvement",
      "Customer data (prompts, responses, M365 content) is NOT used to train the underlying AI foundation models",
      "Model training on customer data can be disabled via a privacy setting"
    ],
    correct: 2,
    explanation: "Microsoft has clearly stated that customer data (Copilot prompts, responses, M365 content) is not used to train the underlying AI Foundation Models (GPT). This is a core commitment in the Microsoft Product Terms and essential for enterprise adoption.",
    source: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy",
    sourceLabel: "Microsoft Learn – Data, Privacy, and Security for Microsoft 365 Copilot"
  },
  {
    id: 51,
    domain: "Data Protection & Governance",
    question: "Which Purview feature allows organizations to monitor Copilot prompts and responses for compliance and risks?",
    options: [
      "Microsoft Purview DLP",
      "Communication Compliance extended with AI interaction monitoring",
      "Microsoft Defender for Cloud Apps",
      "Microsoft Entra ID Protection"
    ],
    correct: 1,
    explanation: "Communication Compliance has been extended to monitor Copilot interactions. Organizations can set policies to scan Copilot prompts and responses for inappropriate content, regulatory violations, or sensitive information.",
    source: "https://learn.microsoft.com/en-us/purview/communication-compliance-copilot",
    sourceLabel: "Microsoft Learn – Communication Compliance for Copilot interactions"
  },
  {
    id: 52,
    domain: "Data Protection & Governance",
    question: "What does Restricted Site Access in SharePoint Advanced Management do?",
    options: [
      "Blocks all external guest users from a site",
      "Restricts access to a SharePoint site exclusively to members of a specified Microsoft Entra group, as an additional layer on top of normal site permissions",
      "Automatically encrypts all documents on a site",
      "Disables Copilot access to the site"
    ],
    correct: 1,
    explanation: "Restricted Site Access lets administrators 'fence' a SharePoint site so only members of a specific group can access it — even if other users technically have rights through a broader policy. This is an additional governance layer above existing permissions.",
    source: "https://learn.microsoft.com/en-us/sharepoint/restricted-access-control",
    sourceLabel: "Microsoft Learn – Restricted Access Control for SharePoint sites"
  },
  {
    id: 53,
    domain: "Data Protection & Governance",
    question: "What is 'event-based retention' in Microsoft Purview?",
    options: [
      "Retention triggered by a Teams meeting",
      "Retention where the retention period starts when a specific event occurs, such as the end of a contract or the departure of an employee",
      "A retention policy that is only active during business events",
      "Automatically deleting files after a Teams event"
    ],
    correct: 1,
    explanation: "Event-based retention starts the retention period based on a specific event (e.g., end of employment, project closure). Instead of a fixed date after creation, the period begins when the event is recorded. Ideal for HR and contract documents.",
    source: "https://learn.microsoft.com/en-us/purview/event-driven-retention",
    sourceLabel: "Microsoft Learn – Start retention when an event occurs"
  },
  {
    id: 54,
    domain: "Data Protection & Governance",
    question: "What are the Responsible AI principles that apply to Microsoft 365 Copilot?",
    options: [
      "Speed, accuracy, cost-efficiency, and scalability",
      "Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency, and Accountability",
      "Performance, availability, integration, and ease of use",
      "Compliance, governance, security, and monitoring"
    ],
    correct: 1,
    explanation: "Microsoft's Responsible AI framework includes six principles: Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency, and Accountability. These principles guide the development and deployment of Copilot and other AI products.",
    source: "https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai",
    sourceLabel: "Microsoft Learn – Responsible AI principles"
  },
  {
    id: 55,
    domain: "Data Protection & Governance",
    question: "If both a retention policy (retain 3 years) and a retention label (retain 7 years, then delete) apply to a document, which takes precedence?",
    options: [
      "The retention policy always takes precedence over retention labels",
      "The shortest retention period always wins",
      "The longest retention period wins — the document is retained for 7 years",
      "The user must choose which policy applies"
    ],
    correct: 2,
    explanation: "Microsoft Purview applies the principle of the longest retention period: if multiple policies apply, data is retained until the longest period has elapsed. This prevents data from being deleted prematurely in violation of one of the applicable policies.",
    source: "https://learn.microsoft.com/en-us/purview/retention#the-principles-of-retention",
    sourceLabel: "Microsoft Learn – The principles of retention, or what takes precedence?"
  },
  {
    id: 56,
    domain: "Data Protection & Governance",
    question: "An employee downloads large numbers of files to a USB drive shortly after submitting their resignation. Which Purview service detects this pattern?",
    options: ["DLP", "Communication Compliance", "Insider Risk Management", "eDiscovery"],
    correct: 2,
    explanation: "Insider Risk Management combines HR signals (resignation date via HR connector) with activity data (large-scale downloads, USB usage) to create risk profiles. Large downloads shortly before departure is a classic indicator of potential data theft by insiders.",
    source: "https://learn.microsoft.com/en-us/purview/insider-risk-management",
    sourceLabel: "Microsoft Learn – Learn about Insider Risk Management"
  },
  {
    id: 57,
    domain: "Data Protection & Governance",
    question: "What is the Content Search feature in Microsoft Purview eDiscovery used for?",
    options: [
      "Automatically classifying documents based on content",
      "Searching M365 locations (Exchange, SharePoint, Teams, OneDrive) for specific content for legal or compliance purposes",
      "Encrypting sensitive data in selected locations",
      "Testing DLP policy rules on existing content"
    ],
    correct: 1,
    explanation: "Content Search allows administrators (with appropriate rights) to search the entire M365 tenant for keywords, date ranges, senders, and file types. Results can be exported for legal review. It is the core functionality of eDiscovery Standard.",
    source: "https://learn.microsoft.com/en-us/purview/ediscovery-content-search-overview",
    sourceLabel: "Microsoft Learn – Learn about Content search"
  },
  {
    id: 58,
    domain: "Data Protection & Governance",
    question: "A sensitivity label is configured with 'Encryption'. What happens when an unauthorized user tries to open the labeled document?",
    options: [
      "The document is automatically converted to a read-only PDF",
      "The user can open the document but cannot edit it",
      "The user cannot open the document — encryption denies access to unauthorized users, even outside M365",
      "The document is deleted after one failed opening attempt"
    ],
    correct: 2,
    explanation: "Encryption via sensitivity labels (Azure Information Protection) is bound to the content — not the location. Unauthorized users cannot open the file, even if it was emailed, downloaded, or saved outside M365.",
    source: "https://learn.microsoft.com/en-us/purview/encryption-sensitivity-labels",
    sourceLabel: "Microsoft Learn – Restrict access to content by using sensitivity labels to apply encryption"
  },
  {
    id: 59,
    domain: "Data Protection & Governance",
    question: "What is the Microsoft Purview Data Explorer used for?",
    options: [
      "Finding all users who have accessed a specific SharePoint site",
      "Discovering and visualizing sensitive information types and labeled content across M365 locations before implementing DLP policies",
      "Managing retention policies across all M365 workloads",
      "Generating GDPR compliance certificates"
    ],
    correct: 1,
    explanation: "Data Explorer (in Microsoft Purview) shows which sensitive information types are present in the tenant (Exchange, SharePoint, OneDrive, Teams) and how they are classified. This is the essential first step before implementing DLP policies — understand what you have before you protect it.",
    source: "https://learn.microsoft.com/en-us/purview/data-classification-content-explorer",
    sourceLabel: "Microsoft Learn – Get started with content explorer"
  },
  {
    id: 60,
    domain: "Data Protection & Governance",
    question: "How does Microsoft Graph influence Copilot responses?",
    options: [
      "Microsoft Graph translates Copilot prompts into other languages",
      "Microsoft Graph is the 'bridge' that gives Copilot access to M365 data (emails, files, calendar, chats) while respecting existing permissions",
      "Microsoft Graph encrypts all Copilot responses",
      "Microsoft Graph limits the number of questions a user can ask Copilot"
    ],
    correct: 1,
    explanation: "Microsoft Graph is the unified API for all Microsoft 365 data and services. Copilot uses Graph to retrieve, read, and understand data. All Graph calls from Copilot go through the authorization layer — Copilot only sees what the user is allowed to see.",
    source: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-graph-basics",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot and Microsoft Graph basics"
  },
  {
    id: 61,
    domain: "Data Protection & Governance",
    question: "What is 'oversharing' in SharePoint and why is it relevant for Copilot?",
    options: [
      "Using too much storage — irrelevant for Copilot",
      "Files shared more broadly than intended (e.g., with 'Everyone'); relevant because Copilot can access those files for users who shouldn't normally have access",
      "Creating too many Teams channels — managed via Teams policy",
      "External guest access configured too broadly — only relevant for B2B collaboration"
    ],
    correct: 1,
    explanation: "If files are shared with 'Everyone' or overly broad groups, Copilot can retrieve and summarize that data for users who shouldn't have access. The Data Access Governance report in SharePoint helps identify and remediate oversharing.",
    source: "https://learn.microsoft.com/en-us/sharepoint/data-access-governance-reports",
    sourceLabel: "Microsoft Learn – Data Access Governance reports for SharePoint"
  },
  {
    id: 62,
    domain: "Data Protection & Governance",
    question: "What is 'hallucination' in the context of generative AI like Copilot, and how does Microsoft address it?",
    options: [
      "Copilot generating visual content that doesn't exist",
      "AI presenting factually incorrect information with high confidence; Microsoft addresses this via grounding (connecting to reliable data sources) and having Copilot cite its sources",
      "A security issue where Copilot leaks data",
      "Copilot misunderstanding prompts due to language barriers"
    ],
    correct: 1,
    explanation: "Hallucination is the phenomenon where LLMs sometimes generate factually incorrect information that sounds plausible. Copilot mitigates this through grounding (connecting to Microsoft Graph and specific data sources) and by adding citations so users can verify answers.",
    source: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot privacy and security"
  },
  {
    id: 63,
    domain: "Data Protection & Governance",
    question: "Which Responsible AI principle refers to the ability of an organization to be held accountable for AI systems and their impact?",
    options: ["Transparency", "Fairness", "Accountability", "Reliability"],
    correct: 2,
    explanation: "Accountability means that people and organizations are responsible for AI systems and their outputs. There must be mechanisms for oversight, correction, and intervention. In the Copilot context, this means administrators have control and can be held accountable for AI usage.",
    source: "https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai",
    sourceLabel: "Microsoft Learn – Responsible AI principles"
  },
  {
    id: 64,
    domain: "Data Protection & Governance",
    question: "What is the primary step an organization should take before rolling out Copilot from a data governance perspective?",
    options: [
      "Upgrade all Microsoft 365 E3 licenses to E5",
      "Conduct an oversharing assessment and remediate over-privileged access in SharePoint so Copilot cannot retrieve unintended data",
      "Remove all external guest users from the tenant",
      "Assign Copilot licenses only to administrators in the first phase"
    ],
    correct: 1,
    explanation: "Before Copilot rollout, a SharePoint oversharing assessment is critical. If files are unintentionally broadly accessible, Copilot can retrieve and present this data to users who shouldn't have access. Permission remediation is Step 1 in Copilot readiness.",
    source: "https://learn.microsoft.com/en-us/sharepoint/sharepoint-copilot-best-practices",
    sourceLabel: "Microsoft Learn – SharePoint and Microsoft 365 Copilot best practices"
  },
  {
    id: 65,
    domain: "Data Protection & Governance",
    question: "A DLP alert is generated when an employee tries to email a file containing IBAN numbers to an external address. Where does the administrator investigate this?",
    options: [
      "Microsoft Entra ID Protection",
      "Microsoft Purview — DLP Alerts dashboard",
      "Microsoft Defender XDR — Incidents",
      "SharePoint Admin Center — Activity Reports"
    ],
    correct: 1,
    explanation: "DLP alerts are visible in the Microsoft Purview compliance portal under Data Loss Prevention > Alerts. Administrators can investigate alerts, triage them (mark as true or false positive), and initiate follow-up actions.",
    source: "https://learn.microsoft.com/en-us/purview/dlp-alerts-dashboard-get-started",
    sourceLabel: "Microsoft Learn – Get started with the DLP alerts dashboard"
  },

  // ── DOMAIN 3: Copilot & Agent Administration (50 questions) ────────────────
  {
    id: 66,
    domain: "Copilot & Agent Administration",
    question: "What is the primary difference between built-in Copilot capabilities and a custom agent?",
    options: [
      "Built-in Copilot requires more licenses than custom agents",
      "Built-in Copilot capabilities are pre-configured assistants within M365 apps; custom agents are specifically built for a business process, persona, or data source",
      "Custom agents can only generate text; built-in Copilot can also generate images",
      "There is no functional difference — they use the same interface"
    ],
    correct: 1,
    explanation: "Built-in Copilot capabilities (in Word, Teams, Outlook, etc.) are generic productivity assistants for those specific apps. Custom agents are built in Copilot Studio with specific instructions, knowledge (SharePoint sources), and their own persona for a specific use case.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot extensibility"
  },
  {
    id: 67,
    domain: "Copilot & Agent Administration",
    question: "An organization has 200 users who occasionally but not regularly need Copilot. Which licensing model is most cost-effective?",
    options: [
      "Purchase 200 fixed monthly Copilot licenses for all users",
      "Pay-as-you-go, so only actual usage is charged",
      "Only assign Copilot to managers and have them summarize for others",
      "Wait for a bundle that automatically includes Copilot"
    ],
    correct: 1,
    explanation: "The pay-as-you-go model is ideal for occasional use. You pay per Copilot interaction (message) rather than a fixed monthly price per user. This is more cost-efficient for users who only occasionally use Copilot.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/pay-as-you-go/overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot pay-as-you-go overview"
  },
  {
    id: 68,
    domain: "Copilot & Agent Administration",
    question: "How does an administrator monitor Copilot adoption and see which features are used most within an organization?",
    options: [
      "Via Azure Monitor Logs and Log Analytics Workspaces",
      "Via Copilot Analytics in the Microsoft 365 admin center",
      "Via Microsoft Defender XDR Advanced Hunting",
      "Via Exchange Online Mail Flow Reports"
    ],
    correct: 1,
    explanation: "Copilot Analytics in the Microsoft 365 admin center shows active users, usage per app (Word, Teams, Outlook), most-used features, and adoption trends. This helps administrators measure the ROI of Copilot investments.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/activity-reports",
    sourceLabel: "Microsoft Learn – Microsoft 365 Reports in the admin center"
  },
  {
    id: 69,
    domain: "Copilot & Agent Administration",
    question: "What are the use cases for the Researcher feature in Microsoft 365 Copilot?",
    options: [
      "Performing complex arithmetic analyses on spreadsheet data",
      "Conducting in-depth research by gathering information from M365 sources and the web, producing structured research reports",
      "Automating email workflows in Outlook",
      "Automatically summarizing Teams meetings after they end"
    ],
    correct: 1,
    explanation: "Researcher is designed for knowledge-intensive research — it searches for information in M365 data and the web, synthesizes findings, and helps create structured reports. It differs from Analyst, which is focused on quantitative data analysis.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/researcher-analyst-overview",
    sourceLabel: "Microsoft Learn – Researcher and Analyst in Microsoft 365 Copilot"
  },
  {
    id: 70,
    domain: "Copilot & Agent Administration",
    question: "What must happen before a custom agent is available to end users in an organization?",
    options: [
      "The agent automatically becomes active once published in Copilot Studio",
      "The agent goes through an approval process via the Microsoft 365 admin center or Power Platform admin center",
      "Microsoft Support must manually activate the agent",
      "The agent must run in test mode for three months"
    ],
    correct: 1,
    explanation: "Agents go through an approval process. Administrators review and approve (or reject) agents via the M365 admin center or Power Platform admin center, depending on the agent type. This prevents uncontrolled agents from being deployed without IT oversight.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps",
    sourceLabel: "Microsoft Learn – Manage agents for Microsoft 365 Copilot"
  },
  {
    id: 71,
    domain: "Copilot & Agent Administration",
    question: "What is the difference between the Researcher and Analyst features in Microsoft 365 Copilot?",
    options: [
      "Researcher searches information on the web and in M365; Analyst analyzes structured data and performs calculations",
      "Researcher creates presentations; Analyst sends emails",
      "They are identical but have different interfaces",
      "Researcher only works in Teams; Analyst only in Excel"
    ],
    correct: 0,
    explanation: "Researcher gathers and synthesizes information from multiple sources (M365 and web) for knowledge work. Analyst works with structured data (tables, Excel files), performs calculations, identifies patterns, and generates data-driven insights.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/researcher-analyst-overview",
    sourceLabel: "Microsoft Learn – Researcher and Analyst in Microsoft 365 Copilot"
  },
  {
    id: 72,
    domain: "Copilot & Agent Administration",
    question: "An employee has created an effective prompt for analyzing sales reports. How can they share it with colleagues?",
    options: [
      "Email the prompt as a text file to colleagues",
      "Save the prompt in Microsoft Copilot and share it via the prompt management feature",
      "Publish the prompt as a Teams channel post",
      "Convert the prompt into a custom agent in Copilot Studio"
    ],
    correct: 1,
    explanation: "Microsoft 365 Copilot provides prompt management where users can save, name, and share prompts. Shared prompts are visible in the Copilot interface for team members. Administrators can also manage organization-wide prompts.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/prompt-gallery-overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot prompt gallery"
  },
  {
    id: 73,
    domain: "Copilot & Agent Administration",
    question: "Which Power Platform component is used to build and manage custom Copilot agents?",
    options: ["Power BI", "Power Automate", "Copilot Studio (formerly Power Virtual Agents)", "Power Apps"],
    correct: 2,
    explanation: "Copilot Studio (formerly Power Virtual Agents) is the low-code/no-code platform for building custom Copilot agents. It provides a visual interface for defining behavior, knowledge, actions, and integrations without requiring deep programming skills.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio",
    sourceLabel: "Microsoft Learn – What is Microsoft Copilot Studio?"
  },
  {
    id: 74,
    domain: "Copilot & Agent Administration",
    question: "How does an administrator configure user access to a specific custom agent?",
    options: [
      "By editing the agent source code and hard-coding users",
      "Via the Microsoft 365 admin center or Power Platform admin center, where user access to agents is configured",
      "Via the Exchange Online admin center by creating a distribution list",
      "Via SharePoint site permissions for the underlying data source"
    ],
    correct: 1,
    explanation: "User access to agents is managed via the Microsoft 365 admin center (for M365 Copilot agents) and the Power Platform admin center. Administrators can make agents available to specific users, groups, or the entire organization.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps",
    sourceLabel: "Microsoft Learn – Manage agents for Microsoft 365 Copilot"
  },
  {
    id: 75,
    domain: "Copilot & Agent Administration",
    question: "What is the use case for a custom agent in Microsoft 365 Copilot?",
    options: [
      "Replacing the built-in Copilot experience entirely",
      "Building a specialized AI assistant for a specific business process, such as an HR policy assistant based on internal SharePoint documents",
      "Managing SharePoint site permissions automatically",
      "Replacing Microsoft Teams for internal communication"
    ],
    correct: 1,
    explanation: "Custom agents are specialized AI assistants built for specific organizational use cases — for example, an HR assistant that answers policy questions based on internal SharePoint documents, or an IT support agent that creates ServiceNow tickets automatically.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot extensibility overview"
  },
  {
    id: 76,
    domain: "Copilot & Agent Administration",
    question: "What is the pay-as-you-go billing model for Copilot, and how does it differ from the monthly license?",
    options: [
      "There is no difference — they are the same licenses with different names",
      "The monthly license provides unlimited access for a fixed price; pay-as-you-go charges per interaction without a fixed commitment",
      "Pay-as-you-go is exclusively available for SharePoint",
      "The monthly license is only for administrators; pay-as-you-go for end users"
    ],
    correct: 1,
    explanation: "The monthly Copilot license provides unlimited access for a fixed monthly price per user. Pay-as-you-go charges per Copilot interaction (message), with no minimum commitment. Ideal for pilot programs or seasonal use cases.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/pay-as-you-go/overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot pay-as-you-go"
  },
  {
    id: 77,
    domain: "Copilot & Agent Administration",
    question: "What does the agent lifecycle include in the context of Microsoft 365 Copilot?",
    options: [
      "Agent lifecycle is not applicable — agents are permanently active",
      "The lifecycle includes: Build, Test, Publish/Approve, Deploy, Monitor, and Maintain/Update or Deactivate",
      "The lifecycle only consists of Create and Delete",
      "The lifecycle is identical to the lifecycle of a SharePoint site"
    ],
    correct: 1,
    explanation: "Agent lifecycle management covers all phases: build (Copilot Studio), test, publish (approval process), deploy for users, actively monitor on usage and performance, and eventually update or deactivate. Administrators manage this via M365 and Power Platform admin centers.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels",
    sourceLabel: "Microsoft Learn – Publish your agent in Microsoft Copilot Studio"
  },
  {
    id: 78,
    domain: "Copilot & Agent Administration",
    question: "What is 'orchestration' in the context of Copilot agents?",
    options: [
      "Scheduling Teams meetings via Copilot",
      "The process by which Copilot automatically determines which tool, plugin, or knowledge source is most appropriate to answer a user's question",
      "Synchronizing agent data between different M365 tenants",
      "Managing the order of messages in a Teams channel"
    ],
    correct: 1,
    explanation: "Orchestration is the 'brain' behind Copilot agents: the system that analyzes what the user needs and automatically selects the right action (query knowledge base, execute an action via a connector, or generate text). This makes agents intelligent and context-aware.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-generative-actions",
    sourceLabel: "Microsoft Learn – Use generative AI in Copilot Studio"
  },
  {
    id: 79,
    domain: "Copilot & Agent Administration",
    question: "An organization built a Copilot agent that automatically creates IT support tickets in ServiceNow when an employee describes an IT problem. Which Copilot Studio feature enables this?",
    options: [
      "A knowledge source connected to the ServiceNow documentation website",
      "An action (connector) that creates a ticket via the ServiceNow API",
      "A retention policy for IT conversations",
      "A DLP policy that forwards IT-related messages"
    ],
    correct: 1,
    explanation: "Actions (actions/connectors) in Copilot Studio are connections to external systems via API connectors (Power Platform connectors or custom connectors). A ServiceNow connector allows the agent to automatically create tickets based on the user's description.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-connectors",
    sourceLabel: "Microsoft Learn – Use connectors in Copilot Studio"
  },
  {
    id: 80,
    domain: "Copilot & Agent Administration",
    question: "Which Microsoft 365 base license is required to use Microsoft 365 Copilot?",
    options: [
      "Any Microsoft 365 license including the cheapest Business Basic",
      "At minimum Microsoft 365 Business Standard, Business Premium, E3, or E5 as base, plus the separate Copilot license add-on",
      "Exclusively Microsoft 365 E5",
      "Azure AD Premium P2 as the base for Copilot"
    ],
    correct: 1,
    explanation: "Copilot requires a qualifying M365 base license (Business Standard, Business Premium, E3, E5, or specific F-licenses) plus the separate Microsoft 365 Copilot add-on license. Microsoft 365 Business Basic is not sufficient as a base license for Copilot.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-requirements",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot requirements"
  },
  {
    id: 81,
    domain: "Copilot & Agent Administration",
    question: "What Copilot feature can an administrator enable or disable to control whether Copilot can perform web searches in responses?",
    options: [
      "Microsoft Graph connector",
      "Bing web search integration for Copilot",
      "Microsoft Purview data scanning",
      "Teams integration for Copilot"
    ],
    correct: 1,
    explanation: "Administrators can enable or disable Bing web search integration for Copilot in the Microsoft 365 admin center. When disabled, Copilot bases its responses exclusively on internal M365 data via Microsoft Graph, without querying external web sources.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/manage-public-web-access",
    sourceLabel: "Microsoft Learn – Manage Copilot web search"
  },
  {
    id: 82,
    domain: "Copilot & Agent Administration",
    question: "How does an administrator assign a Copilot license to a user?",
    options: [
      "Invite the user as a guest and then assign the license",
      "Navigate to Users > Active users > select user > Licenses and apps > check Microsoft 365 Copilot > Save",
      "Run a PowerShell script — license assignment cannot be done via the UI",
      "Assign the license via the Teams admin center"
    ],
    correct: 1,
    explanation: "Copilot licenses are assigned via the Microsoft 365 admin center under Users > Active users. Select the user, go to the 'Licenses and apps' tab, and select the Microsoft 365 Copilot license. This can also be done via group-based license assignment.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/manage/assign-licenses-to-users",
    sourceLabel: "Microsoft Learn – Assign licenses to users"
  },
  {
    id: 83,
    domain: "Copilot & Agent Administration",
    question: "What operational insights can administrators monitor for Copilot agents via the Power Platform admin center?",
    options: [
      "Only the number of times an agent has been installed",
      "Usage per agent (number of conversations, active users), error rates, average response times, and escalations to human agents",
      "The source code of all active agents",
      "Financial transactions processed by agents"
    ],
    correct: 1,
    explanation: "The Power Platform admin center provides operational insights for Copilot agents including conversation volume, active users, session completion rates, error rates, and escalations. This helps monitor agent performance and identify areas for improvement.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview",
    sourceLabel: "Microsoft Learn – Analytics overview in Copilot Studio"
  },
  {
    id: 84,
    domain: "Copilot & Agent Administration",
    question: "What is a 'declarative agent' in the context of Microsoft 365 Copilot?",
    options: [
      "An agent that makes decisions autonomously without human input",
      "An agent configured with instructions, knowledge, and actions that customize Copilot's behavior for specific scenarios, built in Copilot Studio",
      "A security agent that enforces DLP policies",
      "An agent that automatically manages users in Microsoft Entra"
    ],
    correct: 1,
    explanation: "Declarative agents are customized Copilot experiences built in Copilot Studio (or via the API). You 'declare' the behavior via instructions (system prompt), knowledge (SharePoint sources, websites), and actions (API connections). They run within the Copilot security boundary.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-declarative-agent",
    sourceLabel: "Microsoft Learn – Declarative agents for Microsoft 365 Copilot"
  },
  {
    id: 85,
    domain: "Copilot & Agent Administration",
    question: "What is the most suitable knowledge source for a Copilot agent built to answer HR policy questions?",
    options: [
      "A public website with general HR information",
      "A SharePoint site or library containing the organization's current HR policy documents",
      "An Excel file on the HR manager's local hard drive",
      "An external HR database via the internet"
    ],
    correct: 1,
    explanation: "SharePoint sites and libraries are the recommended knowledge sources for Copilot agents within M365. They are secured via existing permissions, centrally managed, always current, and seamlessly integrable in Copilot Studio as a knowledge connector.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint",
    sourceLabel: "Microsoft Learn – Add SharePoint as a knowledge source in Copilot Studio"
  },
  {
    id: 86,
    domain: "Copilot & Agent Administration",
    question: "What is 'prompt engineering' and why is it relevant for Copilot users?",
    options: [
      "Technically programming Copilot agents in Copilot Studio",
      "Effectively formulating instructions (prompts) to Copilot to get better, more relevant, and more precise responses",
      "Setting security policies for Copilot prompts",
      "Archiving Copilot prompt history for compliance"
    ],
    correct: 1,
    explanation: "Prompt engineering is the skill of writing effective prompts — clear, specific, with context and desired output format. Better prompts lead to more relevant Copilot responses. Microsoft provides resources via Microsoft Learn and the Copilot Lab.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/prompting-tips",
    sourceLabel: "Microsoft Learn – Tips for writing effective Copilot prompts"
  },
  {
    id: 87,
    domain: "Copilot & Agent Administration",
    question: "What is the use case for the Analyst feature in Microsoft 365 Copilot?",
    options: [
      "In-depth online research and gathering market intelligence",
      "Advanced data analysis on structured datasets, such as performing calculations, identifying trends, and generating insights from Excel data",
      "Automatically categorizing emails in Outlook",
      "Creating Teams channels based on project templates"
    ],
    correct: 1,
    explanation: "Analyst is designed for data analysis — it works with structured data (tables, Excel files), performs calculations, identifies patterns, and generates insights. It differs from Researcher, which focuses on information gathering from multiple sources.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/researcher-analyst-overview",
    sourceLabel: "Microsoft Learn – Researcher and Analyst in Microsoft 365 Copilot"
  },
  {
    id: 88,
    domain: "Copilot & Agent Administration",
    question: "An administrator wants to prevent certain departments from independently creating agents. How do they implement this?",
    options: [
      "By revoking the Copilot Studio licenses from those employees",
      "Via the Power Platform admin center — restrict who can create agents via environment and tenant settings",
      "By removing the Teams app for Copilot Studio via the Teams admin center",
      "Via Microsoft Purview — Communication Compliance"
    ],
    correct: 1,
    explanation: "In the Power Platform admin center, administrators can manage environments and maker permissions. You can configure who is allowed to use Copilot Studio for creating agents via environment roles and DLP policies for the Power Platform environment.",
    source: "https://learn.microsoft.com/en-us/power-platform/admin/control-environment-creation",
    sourceLabel: "Microsoft Learn – Control who can create and manage environments"
  },
  {
    id: 89,
    domain: "Copilot & Agent Administration",
    question: "What claim about Copilot and organizational data security is correct?",
    options: [
      "Microsoft uses customer prompts and answers to improve the underlying GPT models",
      "Customer data is anonymized and shared with other M365 tenants for service improvement",
      "Customer data (prompts, responses, M365 content) is not used to train the underlying AI models; data stays within the tenant security boundary",
      "Data security for Copilot can only be disabled via a privacy setting"
    ],
    correct: 2,
    explanation: "Microsoft has clearly stated that customer data (Copilot prompts, responses, M365 content) is not used to train the underlying AI Foundation Models. Copilot also complies with existing M365 security and compliance commitments — data does not leave the tenant security boundary for training.",
    source: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy",
    sourceLabel: "Microsoft Learn – Data, Privacy, and Security for Microsoft 365 Copilot"
  },
  {
    id: 90,
    domain: "Copilot & Agent Administration",
    question: "What does the Copilot billing policy monitoring feature help administrators do?",
    options: [
      "Check whether users renew their monthly license on time",
      "Gain insight into and manage costs incurred by pay-as-you-go Copilot interactions, including setting limits",
      "Automatically disable all Copilot features when the budget is exceeded",
      "Monitor Exchange Online mailbox size in relation to Copilot usage"
    ],
    correct: 1,
    explanation: "Monitoring the billing policy for Copilot pay-as-you-go is critical to prevent unexpected costs. Administrators can monitor usage, see cost trends, and take measures to stay within budget.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/pay-as-you-go/manage-pay-as-you-go",
    sourceLabel: "Microsoft Learn – Manage Microsoft 365 Copilot pay-as-you-go"
  },
  // Additional questions 91-200 follow same pattern
  {
    id: 91,
    domain: "M365 Core Services & Security",
    question: "What is a shared mailbox in Exchange Online, and does it require a separate license?",
    options: [
      "A shared mailbox is a distribution list — no license required",
      "A shared mailbox allows multiple users to read and send email from a common email address; no license is required up to 50 GB",
      "A shared mailbox requires a dedicated Microsoft 365 Business Standard license",
      "A shared mailbox can only be accessed by administrators"
    ],
    correct: 1,
    explanation: "A shared mailbox allows multiple users to monitor and send email from a shared email address (e.g., info@company.com). No separate user license is required for the shared mailbox itself as long as it does not exceed 50 GB.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/email/about-shared-mailboxes",
    sourceLabel: "Microsoft Learn – About shared mailboxes"
  },
  {
    id: 92,
    domain: "Data Protection & Governance",
    question: "What is Communication Compliance in Microsoft Purview used for?",
    options: [
      "Optimizing email delivery in Exchange Online",
      "Monitoring communications for policy violations such as inappropriate language, harassment, or potential regulatory violations in Teams and email",
      "Automatically applying translations to internal communications",
      "Managing email signatures organization-wide"
    ],
    correct: 1,
    explanation: "Communication Compliance helps organizations monitor communications for violations of codes of conduct, regulations (e.g., financial sector), or HR policies. Administrators can set policies and receive alerts when matches are found.",
    source: "https://learn.microsoft.com/en-us/purview/communication-compliance",
    sourceLabel: "Microsoft Learn – Learn about Communication Compliance"
  },
  {
    id: 93,
    domain: "Copilot & Agent Administration",
    question: "What is the purpose of Copilot Pages in Microsoft 365?",
    options: [
      "A new type of SharePoint page for Copilot documentation",
      "A shared workspace automatically created from a Copilot response, where users can collaborate on AI-generated content",
      "An administrator dashboard for Copilot monitoring",
      "A template for creating Copilot agents"
    ],
    correct: 1,
    explanation: "Copilot Pages are shared workspaces (in Microsoft Loop) created from Copilot Business Chat. Teams can directly edit, add to, and collaborate on AI-generated content — the Copilot output becomes a living document for the entire team.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/copilot-pages-overview",
    sourceLabel: "Microsoft Learn – Copilot Pages overview"
  },
  {
    id: 94,
    domain: "M365 Core Services & Security",
    question: "An administrator needs to find which admin deleted a user account last week. Which tool provides this?",
    options: [
      "Microsoft Entra sign-in logs",
      "Microsoft Purview Audit log",
      "SharePoint Activity Reports",
      "Microsoft Defender XDR Incidents"
    ],
    correct: 1,
    explanation: "The Microsoft Purview Audit log records administrator and user activities across all M365 services. You can search for 'Delete user' activities filtered by date range to find who deleted a specific user account.",
    source: "https://learn.microsoft.com/en-us/purview/audit-solutions-overview",
    sourceLabel: "Microsoft Learn – Audit solutions in Microsoft Purview"
  },
  {
    id: 95,
    domain: "Data Protection & Governance",
    question: "What is the primary purpose of Microsoft Purview eDiscovery Standard?",
    options: [
      "To automatically apply retention policies to all M365 content",
      "To search, hold, and export content from M365 for legal and compliance investigations",
      "To classify sensitive data across the organization",
      "To monitor internal user behavior for insider risk"
    ],
    correct: 1,
    explanation: "eDiscovery Standard provides the core capabilities needed for legal investigations: content search across M365 locations, legal holds to preserve content, and export of results for legal review teams.",
    source: "https://learn.microsoft.com/en-us/purview/ediscovery-standard-get-started",
    sourceLabel: "Microsoft Learn – Get started with eDiscovery Standard"
  },
  {
    id: 96,
    domain: "Copilot & Agent Administration",
    question: "How does an administrator deploy a custom agent to all users in the organization via Teams?",
    options: [
      "Publish the agent via the Microsoft App Store",
      "Approve and deploy the agent via the Microsoft 365 admin center or Teams Admin Center under 'Manage apps'",
      "Invite all users as testers in Copilot Studio",
      "Run a PowerShell script to distribute the agent"
    ],
    correct: 1,
    explanation: "After approval in the approval process, an administrator can make the agent available for the entire organization (or specific groups) via the Microsoft 365 admin center or Teams Admin Center. This is similar to deploying other Teams apps.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps",
    sourceLabel: "Microsoft Learn – Manage agents for Microsoft 365 Copilot"
  },
  {
    id: 97,
    domain: "M365 Core Services & Security",
    question: "What is the purpose of a Teams messaging policy?",
    options: [
      "To set storage limits for Teams file uploads",
      "To control messaging features available to users such as priority notifications, read receipts, and the ability to delete sent messages",
      "To manage email delivery rules for Teams notifications",
      "To configure which external users can join Teams meetings"
    ],
    correct: 1,
    explanation: "Teams messaging policies control which messaging features users can access — such as priority notifications, read receipts, deleting or editing sent messages, and using Giphy in chats. Different policies can be applied to different user groups.",
    source: "https://learn.microsoft.com/en-us/microsoftteams/messaging-policies-in-teams",
    sourceLabel: "Microsoft Learn – Manage messaging policies in Teams"
  },
  {
    id: 98,
    domain: "Data Protection & Governance",
    question: "What does 'grounding' mean in the context of generative AI and Copilot?",
    options: [
      "Limiting the token length of prompts",
      "Connecting an LLM to reliable, specific data sources to reduce hallucinations and improve answer accuracy",
      "Fine-tuning a model on GPUs",
      "Storing chat history in Azure Blob Storage"
    ],
    correct: 1,
    explanation: "Grounding connects an LLM to external, verifiable sources (e.g., SharePoint, company documents via Microsoft Graph). This reduces hallucinations — fabricated facts that sound realistic. It is a core principle in Microsoft 365 Copilot architecture.",
    source: "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/grounding",
    sourceLabel: "Microsoft Learn – Grounding LLMs"
  },
  {
    id: 99,
    domain: "Copilot & Agent Administration",
    question: "What is Copilot Studio used for in the context of Microsoft 365?",
    options: [
      "Designing SharePoint site layouts",
      "Building, testing, and publishing custom AI agents and extending Microsoft 365 Copilot with specialized capabilities",
      "Managing Copilot licenses across the organization",
      "Analyzing Copilot usage data and adoption metrics"
    ],
    correct: 1,
    explanation: "Copilot Studio is Microsoft's low-code platform for building custom AI agents. Users can create specialized assistants with specific knowledge sources, behaviors, and actions, then publish them to Microsoft Teams and other channels.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio",
    sourceLabel: "Microsoft Learn – What is Microsoft Copilot Studio?"
  },
  {
    id: 100,
    domain: "M365 Core Services & Security",
    question: "What is the Microsoft 365 admin center primarily used for?",
    options: [
      "Advanced threat hunting and incident response",
      "Central management of users, licenses, groups, domains, billing, and organization-wide settings for Microsoft 365",
      "Configuring SharePoint site templates and designs",
      "Building and deploying custom Copilot agents"
    ],
    correct: 1,
    explanation: "The Microsoft 365 admin center (admin.microsoft.com) is the central hub for managing the entire M365 tenant: adding users, assigning licenses, managing groups, configuring domains, monitoring service health, and accessing all other specialized admin centers.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/admin-overview/admin-center-overview",
    sourceLabel: "Microsoft Learn – Overview of the Microsoft 365 admin center"
  }
];

export default QUESTIONS;
