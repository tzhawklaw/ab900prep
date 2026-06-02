// AB-900 Practice Questions Database — 260 Questions
// Source: Microsoft Learn - https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-900
// Original practice questions based on publicly available Microsoft Learn documentation.
// Not real exam questions. Not affiliated with Microsoft Corporation.

const QUESTIONS = [
  // ── DOMAIN 1: M365 Core Services & Security (Q1–Q80) ──────────────────────
  {
    id: 1, domain: "M365 Core Services & Security",
    question: "A new employee needs access to Microsoft 365 but should only be able to use email. Which license is the most cost-efficient choice?",
    options: ["Microsoft 365 E5", "Microsoft 365 Business Premium", "Exchange Online Plan 1", "Microsoft 365 F3"],
    correct: 2,
    explanation: "Exchange Online Plan 1 provides a 50 GB mailbox and email capabilities only — no Teams, SharePoint, or other apps. For users who only need email, this is the most cost-efficient option.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/misc/compare-ways-to-block-access",
    sourceLabel: "Microsoft Learn – Compare Microsoft 365 plans"
  },
  {
    id: 2, domain: "M365 Core Services & Security",
    question: "Which admin center do you use to add a custom domain like 'contoso.com' to a Microsoft 365 tenant?",
    options: ["Exchange Online admin center", "Microsoft Entra admin center", "Microsoft 365 admin center", "SharePoint admin center"],
    correct: 2,
    explanation: "Domain names and organization settings are managed via the Microsoft 365 admin center (admin.microsoft.com). You add the domain, verify ownership via DNS records, and set it as the primary domain here.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/setup/add-domain",
    sourceLabel: "Microsoft Learn – Add a domain to Microsoft 365"
  },
  {
    id: 3, domain: "M365 Core Services & Security",
    question: "What is the primary difference between a Microsoft 365 Group and a distribution list?",
    options: ["They are identical — only the name differs", "A Microsoft 365 Group creates shared resources (mailbox, SharePoint site, Teams); a distribution list only routes email to members", "Distribution lists offer more features than Microsoft 365 Groups", "Microsoft 365 Groups are only for security purposes"],
    correct: 1,
    explanation: "A Microsoft 365 Group automatically provisions a shared mailbox, SharePoint site, Teams workspace, and Planner board. A distribution list only routes inbound emails to multiple recipients — no shared workspace is created.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/create-groups/compare-groups",
    sourceLabel: "Microsoft Learn – Compare groups in Microsoft 365"
  },
  {
    id: 4, domain: "M365 Core Services & Security",
    question: "Which SharePoint permission level grants read-only access to a site?",
    options: ["Owner", "Member", "Visitor", "Contributor"],
    correct: 2,
    explanation: "Visitors have the 'Read' permission level in SharePoint — they can view content but cannot edit or delete. Members can contribute content; Owners have full control including managing permissions.",
    source: "https://learn.microsoft.com/en-us/sharepoint/understanding-permission-levels",
    sourceLabel: "Microsoft Learn – Understanding permission levels in SharePoint"
  },
  {
    id: 5, domain: "M365 Core Services & Security",
    question: "A Teams administrator wants to prevent users from installing third-party apps in Teams. Which object should be configured?",
    options: ["An Exchange Online transport rule", "A Teams app permission policy", "A SharePoint site policy", "A Microsoft Entra conditional access policy"],
    correct: 1,
    explanation: "Teams app permission policies control which apps users can install and use in Teams. Administrators can block all third-party apps or allow only specific approved apps via the Teams admin center.",
    source: "https://learn.microsoft.com/en-us/microsoftteams/teams-app-permission-policies",
    sourceLabel: "Microsoft Learn – Manage app permission policies in Teams"
  },
  {
    id: 6, domain: "M365 Core Services & Security",
    question: "What is the primary purpose of Multi-Factor Authentication (MFA)?",
    options: ["To encrypt emails in transit", "To require a second verification factor beyond the password, protecting accounts even if the password is compromised", "To automatically reset passwords after 90 days", "To block sign-ins outside business hours"],
    correct: 1,
    explanation: "MFA adds a security layer by requiring a second factor (e.g., authenticator app, SMS code) in addition to the password. A stolen password alone is insufficient to gain access.",
    source: "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-mfa-howitworks",
    sourceLabel: "Microsoft Learn – How MFA works in Microsoft Entra"
  },
  {
    id: 7, domain: "M365 Core Services & Security",
    question: "Which MFA method is considered the most secure for Microsoft 365 accounts?",
    options: ["SMS text message with one-time code", "Email with verification link", "Microsoft Authenticator app with number matching", "Phone call with spoken code"],
    correct: 2,
    explanation: "The Microsoft Authenticator app with number matching is the most secure MFA method. SMS and phone calls are vulnerable to SIM-swapping attacks. Number matching prevents MFA fatigue attacks by requiring the user to enter the displayed number.",
    source: "https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-mfa-number-match",
    sourceLabel: "Microsoft Learn – Number matching in Microsoft Authenticator"
  },
  {
    id: 8, domain: "M365 Core Services & Security",
    question: "An administrator wants non-compliant devices to require MFA when accessing Microsoft 365. Which technology implements this?",
    options: ["Microsoft Purview DLP", "Conditional Access policy", "Microsoft Entra PIM", "Exchange Online mailbox policy"],
    correct: 1,
    explanation: "Conditional Access policies evaluate sign-in signals (user, device, location, app) and apply access controls. A policy can require MFA when a device does not meet compliance requirements set in Microsoft Intune.",
    source: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview",
    sourceLabel: "Microsoft Learn – What is Conditional Access?"
  },
  {
    id: 9, domain: "M365 Core Services & Security",
    question: "What is the difference between authentication and authorization?",
    options: ["Authentication checks what you can do; authorization confirms who you are", "Authentication confirms who you are (identity verification); authorization determines what you can do (access rights)", "They are identical in the Microsoft 365 context", "Authentication is only for external users; authorization for internal users"],
    correct: 1,
    explanation: "Authentication = identity verification ('are you who you say you are?'). Authorization = access control ('what are you allowed to do now that we know who you are?'). In M365, authentication happens via Microsoft Entra ID; authorization via permissions and roles.",
    source: "https://learn.microsoft.com/en-us/entra/fundamentals/identity-fundamental-concepts",
    sourceLabel: "Microsoft Learn – Identity and access management fundamentals"
  },
  {
    id: 10, domain: "M365 Core Services & Security",
    question: "An employee is leaving the organization. What should the administrator do FIRST to prevent unauthorized access?",
    options: ["Delete the user's mailbox", "Revoke the SharePoint license", "Block/disable the user account in Microsoft Entra ID", "Remove the user from all distribution lists"],
    correct: 2,
    explanation: "The first priority is blocking the account in Microsoft Entra ID — this immediately prevents all sign-ins across all M365 services. Revoking licenses and archiving the mailbox are follow-up steps.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/remove-former-employee",
    sourceLabel: "Microsoft Learn – Remove a former employee"
  },
  {
    id: 11, domain: "M365 Core Services & Security",
    question: "Which SharePoint role has full control of a site, including managing permissions?",
    options: ["Visitor", "Member", "Contributor", "Owner"],
    correct: 3,
    explanation: "SharePoint site Owners have the 'Full Control' permission level. They can manage content, change permissions, create subsites, and modify all site settings.",
    source: "https://learn.microsoft.com/en-us/sharepoint/understanding-permission-levels",
    sourceLabel: "Microsoft Learn – Understanding permission levels in SharePoint"
  },
  {
    id: 12, domain: "M365 Core Services & Security",
    question: "What does the Identity Secure Score in Microsoft Entra measure?",
    options: ["The total number of active users in the tenant", "A measurement of the identity environment's security posture with recommendations for improvement", "The compliance score for GDPR regulations", "The number of failed sign-ins in the last 30 days"],
    correct: 1,
    explanation: "The Identity Secure Score measures how well the Entra environment follows security best practices, comparing against similar organizations. It provides prioritized improvement actions such as 'Enable MFA for all administrators'.",
    source: "https://learn.microsoft.com/en-us/entra/identity/monitoring-health/concept-identity-secure-score",
    sourceLabel: "Microsoft Learn – Identity Secure Score"
  },
  {
    id: 13, domain: "M365 Core Services & Security",
    question: "What is a channel in Microsoft Teams?",
    options: ["A separate Teams app for video conferencing", "An organized space within a team for conversations, files, and apps around a specific topic or project", "A private chat between two users", "A security group for Teams access management"],
    correct: 1,
    explanation: "Channels are the primary collaboration spaces within a Teams team. They organize conversations, files, and apps around a topic. Standard channels are visible to all team members; private channels have restricted access.",
    source: "https://learn.microsoft.com/en-us/microsoftteams/teams-channels-overview",
    sourceLabel: "Microsoft Learn – Teams and channels overview"
  },
  {
    id: 14, domain: "M365 Core Services & Security",
    question: "Which Exchange Online object allows multiple employees to receive and reply to emails sent to a shared address like helpdesk@contoso.com?",
    options: ["Distribution list", "Security group", "Shared mailbox", "Microsoft 365 Group"],
    correct: 2,
    explanation: "A shared mailbox lets multiple users receive AND send emails from the same address. Unlike a distribution list (which only routes incoming email), users can reply from the shared address.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/email/about-shared-mailboxes",
    sourceLabel: "Microsoft Learn – About shared mailboxes"
  },
  {
    id: 15, domain: "M365 Core Services & Security",
    question: "What is the purpose of a security group in Microsoft Entra ID?",
    options: ["To send emails to multiple users simultaneously", "To group users for assigning access rights to resources like SharePoint sites, apps, and licenses", "To manage Teams channels for project teams", "To automatically reset passwords for group members"],
    correct: 1,
    explanation: "Security groups are used for access management: you assign rights to the group rather than individual users. This simplifies management — add a user to the group and they automatically inherit all associated permissions.",
    source: "https://learn.microsoft.com/en-us/entra/fundamentals/concept-learn-about-groups",
    sourceLabel: "Microsoft Learn – Learn about groups in Microsoft Entra ID"
  },
  {
    id: 16, domain: "M365 Core Services & Security",
    question: "What are the three core principles of Zero Trust security?",
    options: ["Verify always, use minimal privilege, assume breach", "Trust the internal network, block everything external, use firewalls", "Single authentication, flat network structure, open access", "MFA for admins only, VPN for all users, no guest access"],
    correct: 0,
    explanation: "Zero Trust is built on three pillars: (1) Verify explicitly — always authenticate using all available data points, (2) Use least privilege access — limit user access to the minimum needed, (3) Assume breach — minimize impact by segmenting access.",
    source: "https://learn.microsoft.com/en-us/security/zero-trust/zero-trust-overview",
    sourceLabel: "Microsoft Learn – Zero Trust security model"
  },
  {
    id: 17, domain: "M365 Core Services & Security",
    question: "What is the purpose of an app registration in Microsoft Entra ID?",
    options: ["To publish a Teams app in the organization's app store", "To register an application so it can use Microsoft identity platform for authentication and API access", "To link a SharePoint site to an external web application", "To assign licenses to a specific application"],
    correct: 1,
    explanation: "App registrations allow applications to use Microsoft Entra ID for authentication (OAuth 2.0/OpenID Connect) and authorized access to Microsoft Graph and other APIs.",
    source: "https://learn.microsoft.com/en-us/entra/identity-platform/app-objects-and-service-principals",
    sourceLabel: "Microsoft Learn – Application and service principal objects"
  },
  {
    id: 18, domain: "M365 Core Services & Security",
    question: "Which Microsoft Defender XDR component specifically protects against phishing attacks and malicious email attachments in Exchange Online?",
    options: ["Microsoft Defender for Endpoint", "Microsoft Defender for Identity", "Microsoft Defender for Office 365", "Microsoft Defender for Cloud Apps"],
    correct: 2,
    explanation: "Microsoft Defender for Office 365 protects Exchange Online (and Teams, SharePoint) against phishing, malware in attachments (Safe Attachments), and malicious links (Safe Links).",
    source: "https://learn.microsoft.com/en-us/microsoft-365/security/office-365-security/defender-for-office-365",
    sourceLabel: "Microsoft Learn – Microsoft Defender for Office 365"
  },
  {
    id: 19, domain: "M365 Core Services & Security",
    question: "What is Privileged Identity Management (PIM) in Microsoft Entra used for?",
    options: ["Automatically resetting passwords after 90 days", "Assigning admin roles temporarily and requiring approval, eliminating permanently elevated privileges", "Encrypting sensitive emails in Exchange Online", "Monitoring Copilot usage per administrator"],
    correct: 1,
    explanation: "PIM implements Just-in-Time (JIT) access: admin roles are activated temporarily for a defined period, optionally after approval. After the period expires, the elevated rights are automatically removed.",
    source: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure",
    sourceLabel: "Microsoft Learn – What is Privileged Identity Management?"
  },
  {
    id: 20, domain: "M365 Core Services & Security",
    question: "What is the difference between a Teams standard channel and a private channel?",
    options: ["Standard channels are visible to all team members; private channels are only accessible to specifically invited members", "Private channels are encrypted; standard channels are not", "Standard channels do not support file storage; private channels do", "There is no functional difference, only a naming difference"],
    correct: 0,
    explanation: "Standard channels are visible and accessible to all team members. Private channels have their own isolated space (including their own SharePoint site) and are only accessible to specifically invited members.",
    source: "https://learn.microsoft.com/en-us/microsoftteams/private-channels",
    sourceLabel: "Microsoft Learn – Private channels in Microsoft Teams"
  },
  {
    id: 21, domain: "M365 Core Services & Security",
    question: "Which tool in the Microsoft 365 admin center shows which administrator made configuration changes in the last 7 days?",
    options: ["Compliance Manager", "Audit log in Microsoft Purview", "Microsoft Entra Sign-in logs", "SharePoint Activity Reports"],
    correct: 1,
    explanation: "The Audit log in Microsoft Purview records administrator and user activities across the entire M365 ecosystem. Administrators can search by activity type, user, date, and service to track changes.",
    source: "https://learn.microsoft.com/en-us/purview/audit-solutions-overview",
    sourceLabel: "Microsoft Learn – Audit solutions in Microsoft Purview"
  },
  {
    id: 22, domain: "M365 Core Services & Security",
    question: "A user receives an MFA push notification on their phone but is NOT trying to sign in. What is the most likely cause?",
    options: ["The Microsoft Authenticator app has a bug", "Someone is attempting to log in with the user's stolen password — this is an MFA fatigue/push bombing attack", "The M365 license has expired", "The phone has no internet connection"],
    correct: 1,
    explanation: "This is an 'MFA fatigue' or 'push bombing' attack: an attacker has the password and sends repeated MFA push requests hoping the user accidentally approves one. Number matching in the Authenticator app helps prevent this.",
    source: "https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-mfa-number-match",
    sourceLabel: "Microsoft Learn – Number matching to prevent MFA fatigue"
  },
  {
    id: 23, domain: "M365 Core Services & Security",
    question: "What is the purpose of the Service Health dashboard in the Microsoft 365 admin center?",
    options: ["To monitor the organization's security score", "To monitor the status of Microsoft 365 services for incidents, planned maintenance, and outages", "To check the license status of all users", "To query audit logs for compliance reporting"],
    correct: 1,
    explanation: "The Service Health Dashboard shows the current status of all M365 services. Administrators can see active incidents, service advisories, and planned maintenance so they can proactively inform users.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/misc/health-dashboard-overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Service health dashboard"
  },
  {
    id: 24, domain: "M365 Core Services & Security",
    question: "What is the benefit of group-based licensing over individual license assignment?",
    options: ["Group-based licenses are always cheaper", "Licenses are automatically assigned or removed based on group membership, simplifying management and reducing errors", "Group-based licenses provide more features than individually assigned licenses", "It is exclusively available for Microsoft 365 E5 customers"],
    correct: 1,
    explanation: "With group-based licensing, you assign licenses to a group. Every user who joins the group automatically receives the license; when they leave the group, the license is automatically removed.",
    source: "https://learn.microsoft.com/en-us/entra/identity/users/licensing-groups-assign",
    sourceLabel: "Microsoft Learn – Assign licenses to a group"
  },
  {
    id: 25, domain: "M365 Core Services & Security",
    question: "Which admin center do you use to configure a Teams meeting policy that disables recordings for guests?",
    options: ["Microsoft 365 admin center", "Microsoft Entra admin center", "Teams admin center", "Exchange Online admin center"],
    correct: 2,
    explanation: "Meeting policies in Teams are configured in the Teams admin center (admin.teams.microsoft.com) under Meetings > Meeting policies. You can control per-policy settings such as recordings, transcriptions, and guest admission.",
    source: "https://learn.microsoft.com/en-us/microsoftteams/meeting-policies-overview",
    sourceLabel: "Microsoft Learn – Manage meeting policies in Teams"
  },
  {
    id: 26, domain: "M365 Core Services & Security",
    question: "A user cannot access a SharePoint site despite being in the correct group. Conditional Access is blocking the sign-in. What is the most likely cause?",
    options: ["The user does not have an Exchange Online license", "The device does not meet the compliance requirements in the Conditional Access policy", "The SharePoint site has a retention label applied", "The user has not completed MFA registration, but MFA is not a requirement in the policy"],
    correct: 1,
    explanation: "Conditional Access can require devices to be 'compliant' (registered in Intune, meeting security requirements). If the device is not compliant, access is blocked regardless of other permissions or group memberships.",
    source: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-grant",
    sourceLabel: "Microsoft Learn – Conditional Access grant controls"
  },
  {
    id: 27, domain: "M365 Core Services & Security",
    question: "What is a guest user in Microsoft 365 and how do they differ from a member user?",
    options: ["Guest users are unpaid users; member users pay for their license", "Guest users are external people (outside the organization) invited for collaboration; member users are internal employees with a license in the tenant", "Guest users always have more rights than member users", "There is no functional difference in Microsoft 365"],
    correct: 1,
    explanation: "Guest users (B2B guests) are external and have limited access to specifically shared resources. They authenticate via their own organization or Microsoft account. Member users are internal and have full access based on their license and permissions.",
    source: "https://learn.microsoft.com/en-us/entra/external-id/what-is-b2b",
    sourceLabel: "Microsoft Learn – B2B collaboration overview"
  },
  {
    id: 28, domain: "M365 Core Services & Security",
    question: "What does Microsoft Defender XDR provide that individual security products do not?",
    options: ["Email-only security for Exchange Online", "Correlated detection and response across multiple Microsoft 365 workloads (endpoint, email, identity, apps) in a single platform", "Only protection for on-premises servers", "Automatic license assignment for Copilot"],
    correct: 1,
    explanation: "Microsoft Defender XDR correlates signals from Defender for Endpoint, Defender for Office 365, Defender for Identity, and Defender for Cloud Apps. This provides a holistic view of attacks spanning multiple vectors.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/security/defender/microsoft-365-defender",
    sourceLabel: "Microsoft Learn – What is Microsoft Defender XDR?"
  },
  {
    id: 29, domain: "M365 Core Services & Security",
    question: "An organization wants to implement SSO so employees can use their M365 account to sign into Salesforce. What is the underlying technology?",
    options: ["SMTP relay via Exchange Online", "SAML 2.0 or OpenID Connect via Microsoft Entra ID as Identity Provider", "VPN tunneling via Azure", "Kerberos authentication via on-premises Active Directory"],
    correct: 1,
    explanation: "SSO with SaaS applications uses federation protocols like SAML 2.0 or OpenID Connect. Microsoft Entra ID acts as the Identity Provider (IdP). The external app trusts Microsoft Entra ID tokens for authentication.",
    source: "https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on",
    sourceLabel: "Microsoft Learn – What is single sign-on in Microsoft Entra?"
  },
  {
    id: 30, domain: "M365 Core Services & Security",
    question: "Which Microsoft Defender XDR component detects suspicious activities in on-premises Active Directory, such as pass-the-hash attacks?",
    options: ["Microsoft Defender for Endpoint", "Microsoft Defender for Identity", "Microsoft Defender for Office 365", "Microsoft Defender for Cloud Apps"],
    correct: 1,
    explanation: "Microsoft Defender for Identity (formerly Azure ATP) monitors on-premises Active Directory for suspicious authentication patterns and attack techniques such as pass-the-hash, golden ticket attacks, and lateral movement.",
    source: "https://learn.microsoft.com/en-us/defender-for-identity/what-is",
    sourceLabel: "Microsoft Learn – What is Microsoft Defender for Identity?"
  },
  {
    id: 31, domain: "M365 Core Services & Security",
    question: "What is Microsoft Entra ID Connect used for?",
    options: ["Synchronizing Microsoft 365 licenses from an on-premises system", "Synchronizing on-premises Active Directory identities to Microsoft Entra ID for hybrid identity management", "Connecting SharePoint on-premises to SharePoint Online", "Routing Exchange on-premises emails to Exchange Online"],
    correct: 1,
    explanation: "Microsoft Entra ID Connect synchronizes user accounts, groups, and password hashes from on-premises Active Directory to Microsoft Entra ID. This enables hybrid identity — users sign in with the same account for both on-premises and cloud resources.",
    source: "https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/whatis-azure-ad-connect",
    sourceLabel: "Microsoft Learn – What is Microsoft Entra Connect?"
  },
  {
    id: 32, domain: "M365 Core Services & Security",
    question: "A SharePoint library contains sensitive documents. How do you ensure only Finance team members can access it, even though the site is broadly accessible?",
    options: ["Apply a DLP policy to the library", "Break permission inheritance on the library and restrict access to the Finance security group", "Move the library to a separate SharePoint tenant", "Apply a retention label to all documents in the library"],
    correct: 1,
    explanation: "SharePoint supports breaking permission inheritance at the library or document level. By setting unique permissions, you can restrict access to specific users or groups, regardless of the broader site permissions.",
    source: "https://learn.microsoft.com/en-us/sharepoint/what-is-permissions-inheritance",
    sourceLabel: "Microsoft Learn – SharePoint permissions inheritance"
  },
  {
    id: 33, domain: "M365 Core Services & Security",
    question: "What is a 'risky user' status in Microsoft Entra ID Protection?",
    options: ["A user who has more rights than their job role requires", "Microsoft Entra ID Protection has detected that the account may be compromised based on suspicious activity patterns", "A user who has not changed their password in 90 days", "A user added to a sensitive security group without approval"],
    correct: 1,
    explanation: "Microsoft Entra ID Protection analyzes sign-in patterns and behavior. A 'Risky user' flag means the system has detected signals indicating possible compromise, such as sign-ins from unknown locations or use of leaked credentials.",
    source: "https://learn.microsoft.com/en-us/entra/id-protection/concept-identity-protection-risks",
    sourceLabel: "Microsoft Learn – What are risk detections?"
  },
  {
    id: 34, domain: "M365 Core Services & Security",
    question: "What is the Teams admin center used for in relation to teams and channels?",
    options: ["Creating and deleting individual files in Teams channels", "Configuring teams settings, channel policies, messaging policies, and meeting policies organization-wide", "Managing Exchange Online mailboxes for Teams users", "Assigning Microsoft 365 licenses to Teams users"],
    correct: 1,
    explanation: "The Teams admin center (admin.teams.microsoft.com) is used to configure Teams-wide settings such as team creation policies, channel policies, messaging policies, meeting policies, and app permission policies.",
    source: "https://learn.microsoft.com/en-us/microsoftteams/manage-teams-in-modern-portal",
    sourceLabel: "Microsoft Learn – Manage Teams in the admin center"
  },
  {
    id: 35, domain: "M365 Core Services & Security",
    question: "What are API permissions in the context of Microsoft Entra app registrations?",
    options: ["Conditional Access policies that restrict API access", "Definitions of what an app is allowed to do on behalf of a user (delegated) or as itself (application permissions) when accessing Microsoft Graph", "PIM role assignments for application administrators", "SSO configuration settings for enterprise applications"],
    correct: 1,
    explanation: "API permissions define what an app can access. Delegated permissions work on behalf of a signed-in user; application permissions work without user context (daemon apps). Both must be consented to by an administrator for organization-wide use.",
    source: "https://learn.microsoft.com/en-us/entra/identity-platform/permissions-consent-overview",
    sourceLabel: "Microsoft Learn – Permissions and consent in Microsoft identity platform"
  },
  {
    id: 36, domain: "M365 Core Services & Security",
    question: "A user forgets their password and is locked out. Which self-service feature in Microsoft Entra allows them to reset it without calling the helpdesk?",
    options: ["Password Protection Policy", "Self-Service Password Reset (SSPR)", "PIM Just-in-Time access", "Conditional Access sign-in frequency"],
    correct: 1,
    explanation: "Self-Service Password Reset (SSPR) allows users to reset their own passwords or unlock their accounts using pre-registered authentication methods (email, phone, authenticator app). This reduces helpdesk load significantly.",
    source: "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-howitworks",
    sourceLabel: "Microsoft Learn – How SSPR works"
  },
  {
    id: 37, domain: "M365 Core Services & Security",
    question: "What is the purpose of Microsoft Entra's 'Named Locations' feature in Conditional Access?",
    options: ["To assign office locations to user profiles", "To define trusted IP ranges or countries so Conditional Access policies can apply different rules based on where a sign-in originates", "To set time zone preferences for each user", "To restrict which datacenters store user data"],
    correct: 1,
    explanation: "Named Locations let you define trusted IP address ranges (e.g., your corporate network) or specific countries. Conditional Access policies can then allow, block, or require MFA differently based on whether the sign-in comes from a named location.",
    source: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/location-condition",
    sourceLabel: "Microsoft Learn – Using the location condition in Conditional Access"
  },
  {
    id: 38, domain: "M365 Core Services & Security",
    question: "What is the difference between a Microsoft Entra 'tenant' and a Microsoft Entra 'directory'?",
    options: ["A tenant is a single user account; a directory is a group of users", "A tenant is the organization's dedicated instance of Microsoft Entra ID; a directory is effectively the same thing — each tenant has exactly one directory", "A directory contains multiple tenants", "A tenant is for cloud only; a directory is for on-premises only"],
    correct: 1,
    explanation: "In Microsoft Entra, 'tenant' and 'directory' are used interchangeably. When your organization signs up for a Microsoft cloud service, a unique tenant is created. That tenant has exactly one Entra directory containing all users, groups, and apps.",
    source: "https://learn.microsoft.com/en-us/entra/fundamentals/whatis",
    sourceLabel: "Microsoft Learn – What is Microsoft Entra ID?"
  },
  {
    id: 39, domain: "M365 Core Services & Security",
    question: "An administrator wants to require all users to register for MFA within 14 days. Which Microsoft Entra feature enforces this registration campaign?",
    options: ["Conditional Access policy requiring MFA", "Microsoft Entra ID Protection — MFA registration policy", "Exchange Online mailbox policy", "Teams messaging policy"],
    correct: 1,
    explanation: "Microsoft Entra ID Protection includes an MFA registration policy that requires users to register for MFA within a defined period. It can target all users or specific groups and tracks registration completion.",
    source: "https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-configure-mfa-policy",
    sourceLabel: "Microsoft Learn – Configure the MFA registration policy"
  },
  {
    id: 40, domain: "M365 Core Services & Security",
    question: "What does Microsoft Entra's 'Access Reviews' feature allow administrators to do?",
    options: ["Review and approve all user sign-ins daily", "Periodically review and certify whether users should still have access to specific resources or group memberships", "Audit all file access in SharePoint", "Review Copilot prompts for compliance"],
    correct: 1,
    explanation: "Access Reviews in Microsoft Entra ID Governance allow organizations to regularly review whether users, guests, or service accounts still need their current access. Reviewers can approve or revoke access, and reviews can be automated.",
    source: "https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview",
    sourceLabel: "Microsoft Learn – What are access reviews?"
  },
  {
    id: 41, domain: "M365 Core Services & Security",
    question: "What is a Microsoft Teams 'shared channel' and how does it differ from a private channel?",
    options: ["Shared channels are visible to all team members; private channels are not", "Shared channels can include external users from other organizations directly; private channels are restricted to internal team members only", "Private channels support file storage; shared channels do not", "They are identical in all ways"],
    correct: 1,
    explanation: "Shared channels (Teams Connect) allow collaboration with people from other organizations directly within a Teams channel — without those external users needing to be guests in your tenant. Private channels are for restricted internal collaboration.",
    source: "https://learn.microsoft.com/en-us/microsoftteams/shared-channels",
    sourceLabel: "Microsoft Learn – Shared channels in Microsoft Teams"
  },
  {
    id: 42, domain: "M365 Core Services & Security",
    question: "What is the Microsoft 365 Message Center used for?",
    options: ["Monitoring user email activity", "Communicating upcoming changes, new features, and important updates about Microsoft 365 services to administrators", "Sending bulk emails to all users in the tenant", "Managing spam and phishing reports"],
    correct: 1,
    explanation: "The Message Center in the Microsoft 365 admin center provides administrators with advance notice of upcoming changes, feature rollouts, and required actions. This helps IT teams plan for changes before they affect users.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/manage/message-center",
    sourceLabel: "Microsoft Learn – Message center in Microsoft 365"
  },
  {
    id: 43, domain: "M365 Core Services & Security",
    question: "What is the function of Microsoft Entra's 'Enterprise Applications' blade?",
    options: ["To manage Microsoft 365 app licenses", "To manage third-party and Microsoft SaaS apps registered in the tenant, including SSO configuration, user assignment, and provisioning", "To configure Teams app policies", "To monitor Azure resource consumption"],
    correct: 1,
    explanation: "Enterprise Applications in Microsoft Entra shows all apps (both Microsoft and third-party) that are active in your tenant. Here you manage SSO settings, user/group assignments, automatic provisioning (SCIM), and application-level Conditional Access.",
    source: "https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-application-management",
    sourceLabel: "Microsoft Learn – What is application management in Microsoft Entra ID?"
  },
  {
    id: 44, domain: "M365 Core Services & Security",
    question: "An organization uses Microsoft 365 E3. An administrator notices users can still sign in after their account is disabled. What is the most likely cause?",
    options: ["E3 licenses do not support account disabling", "Active sessions and tokens remain valid until they expire — the administrator should also revoke all active sessions after disabling the account", "The account must be deleted, not just disabled", "Conditional Access is overriding the account disable"],
    correct: 1,
    explanation: "Disabling an account in Microsoft Entra ID prevents new sign-ins but does not immediately terminate active sessions. Tokens can remain valid for up to 1 hour. Administrators should also revoke all refresh tokens to force immediate sign-out across all sessions.",
    source: "https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access",
    sourceLabel: "Microsoft Learn – Revoke user access in Microsoft Entra ID"
  },
  {
    id: 45, domain: "M365 Core Services & Security",
    question: "What is Microsoft Defender for Cloud Apps used for in a Microsoft 365 environment?",
    options: ["Protecting Azure virtual machines from malware", "Providing visibility into and control over cloud app usage, including shadow IT discovery and session control for sanctioned apps", "Managing Azure DevOps pipelines", "Scanning SharePoint files for viruses"],
    correct: 1,
    explanation: "Microsoft Defender for Cloud Apps (formerly MCAS) discovers shadow IT (unauthorized cloud apps used by employees), assesses their risk, and provides session control for sanctioned apps — for example, blocking downloads from unmanaged devices.",
    source: "https://learn.microsoft.com/en-us/defender-cloud-apps/what-is-defender-for-cloud-apps",
    sourceLabel: "Microsoft Learn – What is Microsoft Defender for Cloud Apps?"
  },
  {
    id: 46, domain: "M365 Core Services & Security",
    question: "What is the purpose of a 'break glass' account in Microsoft Entra ID?",
    options: ["An account used for testing new Conditional Access policies", "An emergency access account excluded from Conditional Access and MFA policies, used when normal admin accounts are locked out", "An account that automatically resets all user passwords", "A guest account with temporary elevated permissions"],
    correct: 1,
    explanation: "Break glass (emergency access) accounts are cloud-only accounts with Global Admin rights that are excluded from Conditional Access policies including MFA. They exist to prevent being completely locked out of the tenant if normal admin access fails.",
    source: "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/security-emergency-access",
    sourceLabel: "Microsoft Learn – Manage emergency access accounts"
  },
  {
    id: 47, domain: "M365 Core Services & Security",
    question: "What does the 'Require password change' risk remediation do in Microsoft Entra ID Protection?",
    options: ["Forces all users to change their password immediately", "Requires a specific risky user to change their password at next sign-in as a remediation action for a detected risk", "Resets all admin passwords automatically", "Triggers a Conditional Access policy for all users"],
    correct: 1,
    explanation: "When a user is flagged as risky, administrators can require a password change as a remediation action. This forces the user to create a new password at their next sign-in, which invalidates any stolen credentials.",
    source: "https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-remediate-unblock",
    sourceLabel: "Microsoft Learn – Remediate risks and unblock users"
  },
  {
    id: 48, domain: "M365 Core Services & Security",
    question: "What is Microsoft Secure Score in the Microsoft 365 Defender portal?",
    options: ["The number of users who have completed security training", "A measurement of an organization's overall security posture across Microsoft 365, with recommendations to improve it", "The percentage of emails blocked by Defender for Office 365", "A score assigned to individual user risk levels"],
    correct: 1,
    explanation: "Microsoft Secure Score measures the overall security posture of a Microsoft 365 organization (identity, data, device, apps, infrastructure). It provides prioritized improvement actions with score impact values to guide security investments.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/security/defender/microsoft-secure-score",
    sourceLabel: "Microsoft Learn – Microsoft Secure Score"
  },
  {
    id: 49, domain: "M365 Core Services & Security",
    question: "An organization's SharePoint administrator wants to prevent users from sharing site content with external guests entirely. Where is this configured?",
    options: ["Teams admin center — External access settings", "SharePoint admin center — Policies > Sharing", "Microsoft Entra ID — B2B collaboration settings", "Microsoft 365 admin center — Services settings"],
    correct: 1,
    explanation: "External sharing settings for SharePoint are configured in the SharePoint admin center under Policies > Sharing. You can set the external sharing level from 'Anyone' (most permissive) down to 'Only people in your organization' (no external sharing).",
    source: "https://learn.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off",
    sourceLabel: "Microsoft Learn – Manage sharing settings for SharePoint and OneDrive"
  },
  {
    id: 50, domain: "M365 Core Services & Security",
    question: "What is the role of Microsoft Intune in a Microsoft 365 environment?",
    options: ["To manage Exchange Online mailboxes and calendar settings", "To enroll, configure, and enforce compliance policies on devices (mobile device management and mobile application management)", "To configure Microsoft Teams meeting room devices", "To provision Microsoft 365 licenses automatically"],
    correct: 1,
    explanation: "Microsoft Intune is the MDM/MAM solution in Microsoft 365. It enrolls devices, pushes configuration profiles, enforces compliance policies (used by Conditional Access), and manages mobile app data protection — essential for Zero Trust device compliance.",
    source: "https://learn.microsoft.com/en-us/mem/intune/fundamentals/what-is-intune",
    sourceLabel: "Microsoft Learn – What is Microsoft Intune?"
  },
  {
    id: 51, domain: "M365 Core Services & Security",
    question: "What is the Microsoft Entra ID 'Sign-in logs' feature used for?",
    options: ["Tracking which files users have accessed in SharePoint", "Providing a detailed record of every sign-in attempt including user, app, location, device, and result (success or failure)", "Monitoring Teams meeting attendance", "Logging all email sent and received in Exchange Online"],
    correct: 1,
    explanation: "Sign-in logs in Microsoft Entra ID record every authentication attempt with rich detail: who signed in, which app they accessed, from which IP/location/device, what MFA method was used, and whether it succeeded or was blocked by policy.",
    source: "https://learn.microsoft.com/en-us/entra/identity/monitoring-health/concept-sign-ins",
    sourceLabel: "Microsoft Learn – Sign-in logs in Microsoft Entra ID"
  },
  {
    id: 52, domain: "M365 Core Services & Security",
    question: "What is 'Continuous Access Evaluation' (CAE) in Microsoft Entra ID?",
    options: ["A feature that continuously monitors user productivity", "A capability that allows access tokens to be revoked near real-time when a critical event occurs (e.g., account disabled, password changed, location change)", "A tool that evaluates Conditional Access policy effectiveness", "A reporting feature for access reviews"],
    correct: 1,
    explanation: "CAE enables near-real-time revocation of access when critical events are detected — such as account disable, password change, or risky sign-in detection. Instead of waiting for token expiry (up to 1 hour), CAE pushes revocation within minutes.",
    source: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-continuous-access-evaluation",
    sourceLabel: "Microsoft Learn – Continuous access evaluation"
  },
  {
    id: 53, domain: "M365 Core Services & Security",
    question: "What is the purpose of Microsoft Entra's 'Entitlement Management'?",
    options: ["Managing software entitlements and license compliance", "Automating identity governance by creating access packages that bundle resources users can request and receive time-limited access to", "Managing administrator role entitlements via PIM", "Controlling which Microsoft 365 apps users are entitled to use"],
    correct: 1,
    explanation: "Entitlement Management automates access lifecycle management. Access packages bundle related resources (groups, apps, SharePoint sites). Users request access, approvers review, access is granted for a defined period and automatically expires.",
    source: "https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-overview",
    sourceLabel: "Microsoft Learn – What is entitlement management?"
  },
  {
    id: 54, domain: "M365 Core Services & Security",
    question: "An organization wants to ensure that all new teams created in Microsoft Teams follow a naming convention like 'DEPT-ProjectName'. How is this enforced?",
    options: ["Teams app permission policy", "Microsoft 365 Groups naming policy in Microsoft Entra ID", "SharePoint site template", "Exchange Online organization settings"],
    correct: 1,
    explanation: "Microsoft 365 Groups naming policy in Microsoft Entra ID allows administrators to enforce prefixes, suffixes, and blocked words for group (and thus Teams team) names. This ensures consistent naming across the organization.",
    source: "https://learn.microsoft.com/en-us/entra/identity/users/groups-naming-policy",
    sourceLabel: "Microsoft Learn – Enforce a naming policy for Microsoft 365 Groups"
  },
  {
    id: 55, domain: "M365 Core Services & Security",
    question: "What is the difference between Microsoft Entra ID Free, P1, and P2 license tiers?",
    options: ["Free includes all features; P1 and P2 add storage only", "Free provides basic identity; P1 adds Conditional Access and hybrid identity; P2 adds Identity Protection, PIM, and access reviews", "P1 and P2 are identical — only pricing differs", "P2 is only available for government customers"],
    correct: 1,
    explanation: "Microsoft Entra ID Free includes basic identity management. P1 adds Conditional Access, hybrid identity (Entra Connect), and group-based licensing. P2 adds Identity Protection (risk-based policies), PIM, and access reviews for advanced governance.",
    source: "https://learn.microsoft.com/en-us/entra/fundamentals/whatis",
    sourceLabel: "Microsoft Learn – Microsoft Entra ID licensing overview"
  },
  {
    id: 56, domain: "M365 Core Services & Security",
    question: "What is the Microsoft 365 admin center's 'Usage Reports' feature used for?",
    options: ["Monitoring security incidents across M365", "Providing administrators with insights into how Microsoft 365 services are being used — active users, storage, collaboration activity per service", "Generating compliance reports for auditors", "Tracking license costs and billing history"],
    correct: 1,
    explanation: "Usage Reports in the Microsoft 365 admin center give visibility into service adoption — how many users are active in Teams, Exchange, SharePoint, OneDrive, and Yammer, and trends over time. This helps drive adoption decisions.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/activity-reports",
    sourceLabel: "Microsoft Learn – Microsoft 365 activity reports"
  },
  {
    id: 57, domain: "M365 Core Services & Security",
    question: "What is Microsoft Teams 'Live Events' used for?",
    options: ["Real-time monitoring of Teams performance", "Broadcasting large-scale online events (up to 20,000 attendees) with moderated Q&A and one-way video/audio production", "Hosting interactive workshops with up to 300 participants", "Recording all Teams meetings automatically"],
    correct: 1,
    explanation: "Teams Live Events enable broadcast-style events for large audiences — town halls, company-wide announcements, training sessions. Attendees watch but don't participate interactively (unlike regular meetings). Teams Town Hall has now replaced many Live Events use cases.",
    source: "https://learn.microsoft.com/en-us/microsoftteams/teams-live-events/what-are-teams-live-events",
    sourceLabel: "Microsoft Learn – What are Microsoft Teams live events?"
  },
  {
    id: 58, domain: "M365 Core Services & Security",
    question: "What is Microsoft Purview's role in a Microsoft 365 tenant?",
    options: ["Managing Azure cloud resource compliance", "Providing a unified platform for data governance, compliance, risk management, and data security across Microsoft 365 and beyond", "Replacing Microsoft Defender for endpoint protection", "Managing user identities and access policies"],
    correct: 1,
    explanation: "Microsoft Purview is the umbrella brand for Microsoft's data security and compliance portfolio — covering information protection, DLP, data governance, compliance management, insider risk, eDiscovery, and audit capabilities across M365.",
    source: "https://learn.microsoft.com/en-us/purview/purview",
    sourceLabel: "Microsoft Learn – Microsoft Purview overview"
  },
  {
    id: 59, domain: "M365 Core Services & Security",
    question: "What is the purpose of the 'Sensitivity bar' shown in Microsoft 365 apps like Word and Outlook?",
    options: ["To adjust document font size and formatting", "To allow users to apply or view the sensitivity label of the current document or email, making classification visible and accessible", "To control who can edit the document in real time", "To set the document's language and spell-check preferences"],
    correct: 1,
    explanation: "The sensitivity bar (integrated in Office apps via the Microsoft Purview Information Protection client) shows the current label applied to a document or email and allows users to change it. This makes data classification a natural part of the authoring workflow.",
    source: "https://learn.microsoft.com/en-us/purview/sensitivity-labels-office-apps",
    sourceLabel: "Microsoft Learn – Sensitivity labels in Office apps"
  },
  {
    id: 60, domain: "M365 Core Services & Security",
    question: "A company wants to prevent users from creating new Microsoft 365 Groups and Teams unless they belong to an approved group. How is this implemented?",
    options: ["By setting Teams app permission policies for all users", "By enabling the Microsoft 365 Groups creation restriction in Microsoft Entra ID, limiting group creation to members of a specific security group", "By disabling the Microsoft Teams service entirely", "By applying a SharePoint site creation policy"],
    correct: 1,
    explanation: "Microsoft Entra ID allows administrators to restrict Microsoft 365 Group creation to members of a specific security group. This controls Teams team creation (since each team is backed by a Microsoft 365 Group), preventing ungoverned sprawl.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/create-groups/manage-creation-of-groups",
    sourceLabel: "Microsoft Learn – Manage who can create Microsoft 365 Groups"
  },
  {
    id: 61, domain: "M365 Core Services & Security",
    question: "What is a Microsoft 365 'tenant-level' setting versus a 'user-level' setting?",
    options: ["Tenant-level settings apply to all users by default; user-level settings override tenant settings for specific users or groups via policies", "They are the same thing with different names", "Tenant-level settings only apply to administrators; user-level to regular users", "User-level settings are always more restrictive than tenant-level settings"],
    correct: 0,
    explanation: "Tenant-level settings establish defaults for the entire organization (e.g., external sharing allowed). User-level or group-level policies (e.g., Teams meeting policies, Conditional Access) can then override these defaults for specific users or groups.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/misc/organization-settings-overview",
    sourceLabel: "Microsoft Learn – Organization settings overview"
  },
  {
    id: 62, domain: "M365 Core Services & Security",
    question: "What is Microsoft Entra Verified ID used for?",
    options: ["Verifying that user identities meet MFA requirements", "Issuing and verifying decentralized digital credentials (verifiable credentials) that allow people to prove aspects of their identity without sharing underlying data", "Verifying that applications are approved by Microsoft", "Confirming that SharePoint sites meet governance standards"],
    correct: 1,
    explanation: "Microsoft Entra Verified ID is a decentralized identity solution. Organizations can issue verifiable credentials (e.g., employee badge, degree certificate) that users hold in a digital wallet and can present to prove claims without the verifier accessing the original source.",
    source: "https://learn.microsoft.com/en-us/entra/verified-id/decentralized-identifier-overview",
    sourceLabel: "Microsoft Learn – Introduction to Microsoft Entra Verified ID"
  },
  {
    id: 63, domain: "M365 Core Services & Security",
    question: "What is the recommended approach for assigning administrative roles in Microsoft 365 according to the principle of least privilege?",
    options: ["Assign Global Administrator to all IT staff for simplicity", "Assign the most specific admin role that allows the user to perform their required tasks, rather than Global Administrator", "Use only two admin accounts — one for daily use and one for emergencies", "Assign roles based on seniority rather than job function"],
    correct: 1,
    explanation: "The principle of least privilege recommends using the most specific role available. For example, use 'Exchange Administrator' for Exchange tasks instead of 'Global Administrator'. Microsoft 365 has 60+ built-in roles with varying scopes.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/about-admin-roles",
    sourceLabel: "Microsoft Learn – About admin roles in the Microsoft 365 admin center"
  },
  {
    id: 64, domain: "M365 Core Services & Security",
    question: "What is Microsoft Teams Rooms and what problem does it solve?",
    options: ["A virtual meeting room in Teams for remote workers", "Dedicated hardware and software solution that transforms conference rooms into intelligent meeting spaces that join Teams meetings with one touch", "A SharePoint-based room booking system", "A Teams channel dedicated to meeting coordination"],
    correct: 1,
    explanation: "Microsoft Teams Rooms are certified hardware+software solutions (cameras, speakers, displays, touchscreens) designed for physical conference rooms. They provide one-touch meeting join, room booking integration, and AI features like speaker tracking.",
    source: "https://learn.microsoft.com/en-us/microsoftteams/rooms/",
    sourceLabel: "Microsoft Learn – Microsoft Teams Rooms overview"
  },
  {
    id: 65, domain: "M365 Core Services & Security",
    question: "What is the 'Microsoft 365 Lighthouse' portal used for?",
    options: ["A tool for end users to customize their Microsoft 365 experience", "A management portal designed for Managed Service Providers (MSPs) to manage and monitor Microsoft 365 tenants for multiple customers from a single view", "A security dashboard for large enterprise organizations", "A tool for migrating on-premises Exchange to Exchange Online"],
    correct: 1,
    explanation: "Microsoft 365 Lighthouse is a multi-tenant management portal for MSPs. It provides a unified view across customer tenants for security baselines, risky users, device compliance, and service health — enabling efficient at-scale management.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/lighthouse/m365-lighthouse-overview",
    sourceLabel: "Microsoft Learn – Overview of Microsoft 365 Lighthouse"
  },
  {
    id: 66, domain: "M365 Core Services & Security",
    question: "What is the purpose of Microsoft Entra's 'Conditional Access What If' tool?",
    options: ["Testing whether a password meets complexity requirements", "Simulating which Conditional Access policies would apply to a specific user, app, location, and device combination — without actually blocking access", "Planning capacity for Conditional Access evaluations", "Testing disaster recovery scenarios for identity services"],
    correct: 1,
    explanation: "The 'What If' tool in Conditional Access lets administrators simulate policy application. You input a user, target application, IP address, and device state, and the tool shows exactly which policies would be triggered and what access controls would apply.",
    source: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/what-if-tool",
    sourceLabel: "Microsoft Learn – Troubleshoot Conditional Access using the What If tool"
  },
  {
    id: 67, domain: "M365 Core Services & Security",
    question: "What is Microsoft Viva and how does it relate to Microsoft 365?",
    options: ["A security monitoring platform within Microsoft 365", "An employee experience platform integrated into Microsoft Teams that includes modules for Connections, Learning, Insights, Goals, and Engage", "A cloud storage solution replacing OneDrive", "A video conferencing solution competing with Teams"],
    correct: 1,
    explanation: "Microsoft Viva is an employee experience platform built on top of Microsoft Teams and Microsoft 365. Its modules include Viva Connections (company communications), Viva Learning (training), Viva Insights (productivity analytics), and Viva Engage (communities).",
    source: "https://learn.microsoft.com/en-us/viva/introduction",
    sourceLabel: "Microsoft Learn – Introduction to Microsoft Viva"
  },
  {
    id: 68, domain: "M365 Core Services & Security",
    question: "What does a Microsoft 365 'compliance boundary' define?",
    options: ["The maximum file size that can be uploaded to SharePoint", "The geographic region where Microsoft stores and processes data for a tenant, relevant for data residency requirements", "The maximum number of users in a single Microsoft 365 Group", "The boundary between free and paid features in Microsoft 365"],
    correct: 1,
    explanation: "Data residency and compliance boundaries define where Microsoft stores and processes customer data. Organizations in regulated industries or specific countries can specify data residency preferences to meet local regulations.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/enterprise/o365-data-locations",
    sourceLabel: "Microsoft Learn – Where Microsoft 365 stores customer data"
  },
  {
    id: 69, domain: "M365 Core Services & Security",
    question: "What is Microsoft OneDrive for Business and how does it differ from SharePoint?",
    options: ["OneDrive is for personal file storage of individual users; SharePoint is for team and organizational collaboration and document management", "SharePoint is for individuals; OneDrive is for teams", "They are the same product with different names", "OneDrive is only available on mobile; SharePoint on desktop"],
    correct: 0,
    explanation: "OneDrive for Business provides each user with 1 TB+ of personal cloud storage for their own files. SharePoint is used for team sites, organizational intranets, and shared document libraries. Both sync files to the desktop via the OneDrive sync client.",
    source: "https://learn.microsoft.com/en-us/sharepoint/onedrive-vs-sharepoint",
    sourceLabel: "Microsoft Learn – OneDrive and SharePoint in Microsoft 365"
  },
  {
    id: 70, domain: "M365 Core Services & Security",
    question: "What is the Microsoft 365 'Admin Roles' best practice for day-to-day administrative work?",
    options: ["Always use the Global Administrator account for all tasks to avoid permission issues", "Use dedicated admin accounts with only required role assignments; use separate non-admin accounts for daily non-admin work", "Share admin credentials among the IT team for efficiency", "Only use PowerShell for administrative tasks, never the admin portals"],
    correct: 1,
    explanation: "Security best practice is to have separate accounts: a regular user account for daily work (email, Teams) and a dedicated admin account used only for administrative tasks. The admin account should have MFA and the minimum required roles (PIM for elevated roles).",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/about-admin-roles",
    sourceLabel: "Microsoft Learn – Best practices for Microsoft 365 admin roles"
  },
  {
    id: 71, domain: "M365 Core Services & Security",
    question: "What does 'Teams information barriers' allow an organization to do?",
    options: ["Block users from accessing Teams from certain countries", "Prevent specific groups of users from communicating or collaborating with each other in Teams, for regulatory compliance reasons (e.g., preventing conflicts of interest)", "Limit the file sizes that can be shared in Teams", "Block external guest users from viewing Teams channel files"],
    correct: 1,
    explanation: "Information barriers in Teams allow organizations to restrict communication between defined segments of users — for example, preventing the investment banking team from communicating with the trading desk to avoid conflicts of interest. Required in highly regulated industries.",
    source: "https://learn.microsoft.com/en-us/microsoftteams/information-barriers-in-teams",
    sourceLabel: "Microsoft Learn – Information barriers in Microsoft Teams"
  },
  {
    id: 72, domain: "M365 Core Services & Security",
    question: "What is the purpose of 'Microsoft 365 Backup' (formerly Microsoft 365 Backup Storage)?",
    options: ["Automatically moving old emails to an archive mailbox", "Providing fast, large-scale backup and restore capabilities for SharePoint, OneDrive, and Exchange Online data, directly within Microsoft 365", "Syncing Microsoft 365 data to an on-premises backup server", "Creating read-only snapshots of Teams channels"],
    correct: 1,
    explanation: "Microsoft 365 Backup provides native backup and restore for SharePoint sites, OneDrive accounts, and Exchange mailboxes directly within Microsoft 365. It enables granular restore to a specific point in time, faster than traditional third-party backup solutions.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/backup/backup-overview",
    sourceLabel: "Microsoft Learn – Overview of Microsoft 365 Backup"
  },
  {
    id: 73, domain: "M365 Core Services & Security",
    question: "What is Microsoft 365 Apps (formerly Office 365 ProPlus)?",
    options: ["A web-only version of Office apps", "The subscription-based, regularly updated desktop versions of Word, Excel, PowerPoint, Outlook, and other Office apps deployed from the cloud", "A mobile-only app suite for Microsoft 365", "A separate product from Microsoft 365 requiring its own subscription"],
    correct: 1,
    explanation: "Microsoft 365 Apps is the locally-installed, monthly/semi-annual-updated version of the Office desktop apps (Word, Excel, PowerPoint, etc.) included in Microsoft 365 Business and Enterprise plans. Apps update automatically and connect to Microsoft 365 cloud services.",
    source: "https://learn.microsoft.com/en-us/deployoffice/about-microsoft-365-apps",
    sourceLabel: "Microsoft Learn – About Microsoft 365 Apps"
  },
  {
    id: 74, domain: "M365 Core Services & Security",
    question: "What is the 'Microsoft Entra External ID' feature used for?",
    options: ["Managing identities for internal employees", "Providing identity and access management for external users — customers, partners, and consumers — accessing your applications and resources", "Synchronizing external Active Directory domains", "Managing service accounts for external applications"],
    correct: 1,
    explanation: "Microsoft Entra External ID (combining B2B and B2C capabilities) enables organizations to securely manage identities for external parties. B2B enables partner collaboration; B2C (now Entra External ID for customers) manages customer identities for consumer-facing apps.",
    source: "https://learn.microsoft.com/en-us/entra/external-id/external-identities-overview",
    sourceLabel: "Microsoft Learn – External identities in Microsoft Entra ID"
  },
  {
    id: 75, domain: "M365 Core Services & Security",
    question: "What is a 'Microsoft 365 sensitivity label auto-labeling policy' used for?",
    options: ["Automatically applying labels to files based on administrator-defined conditions, without user interaction, as a server-side policy", "Recommending labels to users as they create documents", "Forcing users to manually label all documents before saving", "Automatically deleting unlabeled documents after 30 days"],
    correct: 0,
    explanation: "Auto-labeling policies scan content in SharePoint, OneDrive, and Exchange (server-side) and automatically apply sensitivity labels based on sensitive information types or trainable classifiers — no user interaction required. Different from client-side auto-labeling in Office apps.",
    source: "https://learn.microsoft.com/en-us/purview/apply-sensitivity-label-automatically",
    sourceLabel: "Microsoft Learn – Apply a sensitivity label to content automatically"
  },
  {
    id: 76, domain: "M365 Core Services & Security",
    question: "What does 'Windows Hello for Business' provide in the context of Microsoft 365 authentication?",
    options: ["A password manager integrated into Windows", "Passwordless authentication using biometrics (face, fingerprint) or a PIN bound to the specific device, replacing passwords for Microsoft 365 sign-in", "A feature for managing Windows device names in Microsoft Entra", "Automatic Windows update management"],
    correct: 1,
    explanation: "Windows Hello for Business provides strong, passwordless authentication. Credentials are stored locally on the device and never transmitted — biometrics or PIN unlock a cryptographic key pair. This significantly reduces phishing risk since there is no password to steal.",
    source: "https://learn.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/",
    sourceLabel: "Microsoft Learn – Windows Hello for Business overview"
  },
  {
    id: 77, domain: "M365 Core Services & Security",
    question: "What is the Microsoft 365 'Compliance Center' now called?",
    options: ["Microsoft Purview compliance portal", "Microsoft Defender compliance dashboard", "Microsoft Entra compliance portal", "Microsoft 365 security portal"],
    correct: 0,
    explanation: "The Microsoft 365 Compliance Center has been rebranded to the Microsoft Purview compliance portal (compliance.microsoft.com). It is the central hub for all compliance and data governance tools including DLP, retention, eDiscovery, audit, and communication compliance.",
    source: "https://learn.microsoft.com/en-us/purview/microsoft-365-compliance-center",
    sourceLabel: "Microsoft Learn – Microsoft Purview compliance portal"
  },
  {
    id: 78, domain: "M365 Core Services & Security",
    question: "An administrator wants to ensure that when a user is removed from a team, they lose access to all the team's files in SharePoint automatically. Is this the default behavior?",
    options: ["No — SharePoint permissions must be manually removed separately", "Yes — removing a user from a Microsoft 365 Group (which backs a Teams team) automatically removes their access to the associated SharePoint site", "It depends on whether the files have unique permissions set", "Yes, but only for private channels"],
    correct: 1,
    explanation: "Teams teams are backed by Microsoft 365 Groups. When you remove someone from the group (and thus the team), their access to the associated SharePoint site, shared mailbox, and other group resources is automatically revoked — permissions are managed at the group level.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/create-groups/manage-groups",
    sourceLabel: "Microsoft Learn – Manage Microsoft 365 Groups"
  },
  {
    id: 79, domain: "M365 Core Services & Security",
    question: "What is the purpose of Microsoft Exchange Online's 'Transport Rules' (Mail Flow Rules)?",
    options: ["Setting up email signatures for all users", "Defining rules that automatically take actions on email messages that match specified conditions — such as adding disclaimers, blocking messages, or redirecting emails", "Managing user mailbox sizes and quotas", "Configuring spam filter thresholds"],
    correct: 1,
    explanation: "Mail Flow Rules (Transport Rules) in Exchange Online allow administrators to inspect and act on messages passing through the mail flow — add disclaimers, apply message encryption, block attachments, redirect emails, or apply sensitivity labels based on conditions.",
    source: "https://learn.microsoft.com/en-us/exchange/security-and-compliance/mail-flow-rules/mail-flow-rules",
    sourceLabel: "Microsoft Learn – Mail flow rules in Exchange Online"
  },
  {
    id: 80, domain: "M365 Core Services & Security",
    question: "What is Microsoft 365's 'Archive mailbox' feature?",
    options: ["A backup copy of the mailbox stored in Azure", "An additional mailbox storage space in Exchange Online that provides users with extra email storage, accessible in Outlook", "A read-only copy of the mailbox for legal hold purposes", "An automatic deletion process for emails older than 2 years"],
    correct: 1,
    explanation: "The archive mailbox (also called In-Place Archive) gives users additional mailbox storage. Items can be automatically moved to the archive via retention policies. The archive appears as a separate mailbox in Outlook and Outlook on the web.",
    source: "https://learn.microsoft.com/en-us/purview/enable-archive-mailboxes",
    sourceLabel: "Microsoft Learn – Enable archive mailboxes in Microsoft Purview"
  },

  // ── DOMAIN 2: Data Protection & Governance (Q81–Q158) ─────────────────────
  {
    id: 81, domain: "Data Protection & Governance",
    question: "What is the difference between Microsoft Purview Information Protection and Microsoft Purview Data Loss Prevention (DLP)?",
    options: ["They are identical — only the name differs", "Information Protection classifies and labels data (sensitivity labels); DLP defines and enforces policies to prevent loss or inadvertent sharing of sensitive data", "DLP classifies data; Information Protection prevents data loss", "Information Protection only works in SharePoint; DLP only in Exchange"],
    correct: 1,
    explanation: "Information Protection (sensitivity labels) marks documents with classifications and applies protection. DLP policies detect these labels (and sensitive information types) and enforce rules — blocking, warning, or logging — on risky actions.",
    source: "https://learn.microsoft.com/en-us/purview/information-protection",
    sourceLabel: "Microsoft Learn – Microsoft Purview Information Protection"
  },
  {
    id: 82, domain: "Data Protection & Governance",
    question: "What is a Sensitive Information Type (SIT) in Microsoft Purview?",
    options: ["A type of sensitivity label for sensitive documents", "A pattern-matching rule that Microsoft Purview uses to identify specific sensitive data, such as credit card numbers or social security numbers", "A special type of security group for sensitive projects", "A DLP policy rule that always blocks"],
    correct: 1,
    explanation: "Sensitive Information Types (SITs) are pattern-based definitions (regex, keywords, checksum validation) that Purview uses to recognize sensitive data. Microsoft provides 300+ built-in SITs and you can create custom SITs.",
    source: "https://learn.microsoft.com/en-us/purview/sensitive-information-type-learn-about",
    sourceLabel: "Microsoft Learn – Learn about sensitive information types"
  },
  {
    id: 83, domain: "Data Protection & Governance",
    question: "A retention label is set to 'Retain for 7 years, then delete'. A user tries to delete a document with this label after 3 years. What happens?",
    options: ["The document is deleted because the user is the owner", "The document is moved to the recycle bin", "The document cannot be permanently deleted — the retention hold prevents deletion until the 7 years have elapsed", "The document is archived in the Compliance Archive"],
    correct: 2,
    explanation: "Retention labels with a 'retain' setting prevent permanent deletion while the retention period is active. Even if the user deletes the document, it is preserved in the Preservation Hold Library until the retention period expires.",
    source: "https://learn.microsoft.com/en-us/purview/retention",
    sourceLabel: "Microsoft Learn – Learn about retention policies and retention labels"
  },
  {
    id: 84, domain: "Data Protection & Governance",
    question: "How does Microsoft Copilot access data within Microsoft 365?",
    options: ["Copilot has access to all tenant data regardless of permissions", "Copilot only uses publicly available internet sources", "Copilot uses Microsoft Graph and respects the existing M365 permissions of the signed-in user", "Copilot asks the user to explicitly select which files to use"],
    correct: 2,
    explanation: "Copilot uses Microsoft Graph to retrieve data. It never sees more than the user is allowed to see — existing SharePoint, Exchange, and Teams permissions are fully respected. This makes correct permissions management critical for Copilot security.",
    source: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy",
    sourceLabel: "Microsoft Learn – Data, Privacy, and Security for Microsoft 365 Copilot"
  },
  {
    id: 85, domain: "Data Protection & Governance",
    question: "What does the Activity Explorer in Microsoft Purview show?",
    options: ["Automatically blocks risky user activities", "A timeline of activities around sensitive and labeled data, such as labeling, printing, external sharing, and downloading", "Generates compliance reports for GDPR audits", "Manages retention policies for SharePoint libraries"],
    correct: 1,
    explanation: "Activity Explorer provides visibility into what is happening with sensitive and labeled content — who downloaded, printed, shared externally, or changed labels on which document and when. This helps administrators assess DLP policy effectiveness.",
    source: "https://learn.microsoft.com/en-us/purview/data-classification-activity-explorer",
    sourceLabel: "Microsoft Learn – Get started with Activity Explorer"
  },
  {
    id: 86, domain: "Data Protection & Governance",
    question: "What is the purpose of Microsoft Purview Data Lifecycle Management?",
    options: ["To encrypt all data in Microsoft 365", "To manage the complete lifecycle of data: automatically retain what is needed and delete what is not, in compliance with regulations", "To detect data breaches in real-time", "To classify data based on sensitivity"],
    correct: 1,
    explanation: "Data Lifecycle Management manages the data lifecycle via retention policies and retention labels. Organizations can automatically retain data (e.g., emails for 5 years) and then delete it, helping with GDPR compliance and reducing storage costs.",
    source: "https://learn.microsoft.com/en-us/purview/data-lifecycle-management",
    sourceLabel: "Microsoft Learn – Data lifecycle management in Microsoft Purview"
  },
  {
    id: 87, domain: "Data Protection & Governance",
    question: "What does the Compliance Manager in Microsoft Purview measure?",
    options: ["The number of active DLP policies in the tenant", "The organization's compliance progress against regulatory frameworks (such as GDPR, ISO 27001) with concrete improvement actions", "The security score of all user identities", "The percentage of emails blocked by DLP"],
    correct: 1,
    explanation: "Compliance Manager calculates a score based on implemented vs. recommended controls for selected regulatory frameworks. Each improvement action increases the score. It also provides risk assessment and audit documentation.",
    source: "https://learn.microsoft.com/en-us/purview/compliance-manager",
    sourceLabel: "Microsoft Learn – Microsoft Purview Compliance Manager"
  },
  {
    id: 88, domain: "Data Protection & Governance",
    question: "A financial company wants to detect when employees discuss market-sensitive information in Teams chats. Which Purview solution applies?",
    options: ["Data Loss Prevention", "Communication Compliance", "Insider Risk Management", "eDiscovery"],
    correct: 1,
    explanation: "Communication Compliance monitors communications (Teams, Exchange, Yammer) for policy violations, including financial sector regulations. It can detect specific keywords, patterns, and sentiments.",
    source: "https://learn.microsoft.com/en-us/purview/communication-compliance",
    sourceLabel: "Microsoft Learn – Learn about Communication Compliance"
  },
  {
    id: 89, domain: "Data Protection & Governance",
    question: "What is the difference between a retention policy and a retention label in Microsoft Purview?",
    options: ["They are identical — only the application differs", "A retention policy applies automatically and broadly to locations (all SharePoint sites, all Exchange mailboxes); a retention label is applied to specific items for fine-grained control", "Retention labels are mandatory; retention policies are optional", "Retention policies only work in Exchange; retention labels only in SharePoint"],
    correct: 1,
    explanation: "Retention policies work at the location level and are ideal for broad compliance. Retention labels work at the item level and can be applied by users or automatically assigned for fine-grained control, including event-based retention.",
    source: "https://learn.microsoft.com/en-us/purview/retention-policies-exchange",
    sourceLabel: "Microsoft Learn – Learn about retention policies for Exchange"
  },
  {
    id: 90, domain: "Data Protection & Governance",
    question: "What is the risk of oversharing in SharePoint specifically in relation to Microsoft 365 Copilot?",
    options: ["Copilot can slow down due to too many shared files", "Users can retrieve information via Copilot from documents they wouldn't normally look for, because Copilot provides easily searchable summaries of broadly available data", "Oversharing causes storage limit issues in SharePoint", "Copilot refuses to work when oversharing is detected"],
    correct: 1,
    explanation: "Copilot makes existing oversharing more visible. Data that was 'technically accessible but practically unfindable' can now be easily summarized and presented by Copilot. Oversharing risks increase significantly once Copilot is in use.",
    source: "https://learn.microsoft.com/en-us/sharepoint/sharepoint-copilot-best-practices",
    sourceLabel: "Microsoft Learn – SharePoint and Microsoft 365 Copilot best practices"
  },
  {
    id: 91, domain: "Data Protection & Governance",
    question: "Which Microsoft Purview tool helps identify SharePoint sites whose content is shared with 'Everyone in the organization'?",
    options: ["Communication Compliance", "Data Access Governance (DAG) report in SharePoint", "Microsoft Purview Compliance Manager", "Microsoft Defender for Cloud Apps"],
    correct: 1,
    explanation: "The Data Access Governance report in SharePoint (part of SharePoint Advanced Management) shows an overview of files and sites shared with 'Everyone', external users, or broad internal groups.",
    source: "https://learn.microsoft.com/en-us/sharepoint/data-access-governance-reports",
    sourceLabel: "Microsoft Learn – Data Access Governance reports for SharePoint sites"
  },
  {
    id: 92, domain: "Data Protection & Governance",
    question: "What does DSPM for AI (Data Security Posture Management) do that Compliance Manager does not?",
    options: ["DSPM is the same as Compliance Manager but with a different interface", "DSPM specifically focuses on AI-related data risks — which data AI tools like Copilot can reach — and helps reduce the AI-specific attack surface", "DSPM manages retention policies for AI-generated content", "DSPM replaces DLP policies for AI workloads"],
    correct: 1,
    explanation: "DSPM for AI is specifically designed for the AI era. It analyzes which sensitive data is reachable by Copilot, identifies over-privileged access, and provides recommendations to improve the data risk profile for AI.",
    source: "https://learn.microsoft.com/en-us/purview/ai-microsoft-purview",
    sourceLabel: "Microsoft Learn – Microsoft Purview data security for Microsoft Copilot"
  },
  {
    id: 93, domain: "Data Protection & Governance",
    question: "What is the purpose of a Legal Hold in Microsoft Purview eDiscovery?",
    options: ["To create a retention policy for all mailboxes", "To preserve content in Exchange, SharePoint, and Teams for specific users regardless of regular deletion processes or user actions", "To create a DLP policy that blocks deletion", "To temporarily freeze user accounts"],
    correct: 1,
    explanation: "A Legal Hold via Microsoft Purview eDiscovery freezes content for specific users or queries, regardless of retention policies or user actions. Content that would normally be deleted is preserved in the Preservation Hold Library.",
    source: "https://learn.microsoft.com/en-us/purview/ediscovery-create-holds",
    sourceLabel: "Microsoft Learn – Create eDiscovery holds"
  },
  {
    id: 94, domain: "Data Protection & Governance",
    question: "What is the correct statement about Copilot and AI model training?",
    options: ["Microsoft uses customer prompts and responses to improve the underlying GPT models", "Customer data is anonymized and shared with other M365 tenants for model improvement", "Customer data (prompts, responses, M365 content) is NOT used to train the underlying AI foundation models", "Model training on customer data can be disabled via a privacy setting"],
    correct: 2,
    explanation: "Microsoft has clearly stated that customer data (Copilot prompts, responses, M365 content) is not used to train the underlying AI Foundation Models. This is a core commitment in the Microsoft Product Terms.",
    source: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy",
    sourceLabel: "Microsoft Learn – Data, Privacy, and Security for Microsoft 365 Copilot"
  },
  {
    id: 95, domain: "Data Protection & Governance",
    question: "What does Restricted Site Access in SharePoint Advanced Management do?",
    options: ["Blocks all external guest users from a site", "Restricts access to a SharePoint site exclusively to members of a specified Microsoft Entra group, as an additional layer on top of normal site permissions", "Automatically encrypts all documents on a site", "Disables Copilot access to the site"],
    correct: 1,
    explanation: "Restricted Site Access lets administrators 'fence' a SharePoint site so only members of a specific group can access it — even if other users technically have rights through a broader policy.",
    source: "https://learn.microsoft.com/en-us/sharepoint/restricted-access-control",
    sourceLabel: "Microsoft Learn – Restricted Access Control for SharePoint sites"
  },
  {
    id: 96, domain: "Data Protection & Governance",
    question: "What are the Responsible AI principles that apply to Microsoft 365 Copilot?",
    options: ["Speed, accuracy, cost-efficiency, and scalability", "Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency, and Accountability", "Performance, availability, integration, and ease of use", "Compliance, governance, security, and monitoring"],
    correct: 1,
    explanation: "Microsoft's Responsible AI framework includes six principles: Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency, and Accountability. These principles guide the development and deployment of Copilot.",
    source: "https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai",
    sourceLabel: "Microsoft Learn – Responsible AI principles"
  },
  {
    id: 97, domain: "Data Protection & Governance",
    question: "If both a retention policy (retain 3 years) and a retention label (retain 7 years, then delete) apply to a document, which takes precedence?",
    options: ["The retention policy always takes precedence over retention labels", "The shortest retention period always wins", "The longest retention period wins — the document is retained for 7 years", "The user must choose which policy applies"],
    correct: 2,
    explanation: "Microsoft Purview applies the principle of the longest retention period: if multiple policies apply, data is retained until the longest period has elapsed. This prevents data from being deleted prematurely.",
    source: "https://learn.microsoft.com/en-us/purview/retention#the-principles-of-retention",
    sourceLabel: "Microsoft Learn – The principles of retention"
  },
  {
    id: 98, domain: "Data Protection & Governance",
    question: "An employee downloads large numbers of files to a USB drive shortly after submitting their resignation. Which Purview service detects this pattern?",
    options: ["DLP", "Communication Compliance", "Insider Risk Management", "eDiscovery"],
    correct: 2,
    explanation: "Insider Risk Management combines HR signals (resignation date via HR connector) with activity data (large-scale downloads, USB usage) to create risk profiles. This is a classic indicator of potential data theft by insiders.",
    source: "https://learn.microsoft.com/en-us/purview/insider-risk-management",
    sourceLabel: "Microsoft Learn – Learn about Insider Risk Management"
  },
  {
    id: 99, domain: "Data Protection & Governance",
    question: "What is the Content Search feature in Microsoft Purview eDiscovery used for?",
    options: ["Automatically classifying documents based on content", "Searching M365 locations (Exchange, SharePoint, Teams, OneDrive) for specific content for legal or compliance purposes", "Encrypting sensitive data in selected locations", "Testing DLP policy rules on existing content"],
    correct: 1,
    explanation: "Content Search allows administrators (with appropriate rights) to search the entire M365 tenant for keywords, date ranges, senders, and file types. Results can be exported for legal review.",
    source: "https://learn.microsoft.com/en-us/purview/ediscovery-content-search-overview",
    sourceLabel: "Microsoft Learn – Learn about Content search"
  },
  {
    id: 100, domain: "Data Protection & Governance",
    question: "How does Microsoft Graph influence Copilot responses?",
    options: ["Microsoft Graph translates Copilot prompts into other languages", "Microsoft Graph is the 'bridge' that gives Copilot access to M365 data (emails, files, calendar, chats) while respecting existing permissions", "Microsoft Graph encrypts all Copilot responses", "Microsoft Graph limits the number of questions a user can ask Copilot"],
    correct: 1,
    explanation: "Microsoft Graph is the unified API for all Microsoft 365 data and services. Copilot uses Graph to retrieve, read, and understand data. All Graph calls from Copilot go through the authorization layer — Copilot only sees what the user is allowed to see.",
    source: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-graph-basics",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot and Microsoft Graph basics"
  },
  {
    id: 101, domain: "Data Protection & Governance",
    question: "What is 'oversharing' in SharePoint and why is it relevant for Copilot?",
    options: ["Using too much storage — irrelevant for Copilot", "Files shared more broadly than intended (e.g., with 'Everyone'); relevant because Copilot can access those files for users who shouldn't normally have access", "Creating too many Teams channels — managed via Teams policy", "External guest access configured too broadly — only relevant for B2B collaboration"],
    correct: 1,
    explanation: "If files are shared with 'Everyone' or overly broad groups, Copilot can retrieve and summarize that data for users who shouldn't have access. The Data Access Governance report in SharePoint helps identify and remediate oversharing.",
    source: "https://learn.microsoft.com/en-us/sharepoint/data-access-governance-reports",
    sourceLabel: "Microsoft Learn – Data Access Governance reports for SharePoint"
  },
  {
    id: 102, domain: "Data Protection & Governance",
    question: "What is 'hallucination' in the context of generative AI like Copilot?",
    options: ["Copilot generating visual content that doesn't exist", "AI presenting factually incorrect information with high confidence; Microsoft addresses this via grounding and having Copilot cite its sources", "A security issue where Copilot leaks data", "Copilot misunderstanding prompts due to language barriers"],
    correct: 1,
    explanation: "Hallucination is the phenomenon where LLMs sometimes generate factually incorrect information that sounds plausible. Copilot mitigates this through grounding (connecting to Microsoft Graph) and by adding citations so users can verify answers.",
    source: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot privacy and security"
  },
  {
    id: 103, domain: "Data Protection & Governance",
    question: "What is the primary step an organization should take before rolling out Copilot from a data governance perspective?",
    options: ["Upgrade all Microsoft 365 E3 licenses to E5", "Conduct an oversharing assessment and remediate over-privileged access in SharePoint so Copilot cannot retrieve unintended data", "Remove all external guest users from the tenant", "Assign Copilot licenses only to administrators in the first phase"],
    correct: 1,
    explanation: "Before Copilot rollout, a SharePoint oversharing assessment is critical. If files are unintentionally broadly accessible, Copilot can retrieve and present this data to users who shouldn't have access. Permission remediation is Step 1 in Copilot readiness.",
    source: "https://learn.microsoft.com/en-us/sharepoint/sharepoint-copilot-best-practices",
    sourceLabel: "Microsoft Learn – SharePoint and Microsoft 365 Copilot best practices"
  },
  {
    id: 104, domain: "Data Protection & Governance",
    question: "What is a 'trainable classifier' in Microsoft Purview?",
    options: ["A machine learning model that can be trained to recognize specific content categories (like contracts, resumes, or source code) beyond what pattern-matching SITs can detect", "A tool for training employees on data classification", "An auto-labeling rule based on file metadata", "A compliance score improvement recommendation"],
    correct: 0,
    explanation: "Trainable classifiers use machine learning to recognize content types that are hard to define with patterns — like 'project proposals' or 'financial reports'. You train the classifier with sample content, and it learns to recognize similar content across the tenant.",
    source: "https://learn.microsoft.com/en-us/purview/classifier-learn-about",
    sourceLabel: "Microsoft Learn – Learn about trainable classifiers"
  },
  {
    id: 105, domain: "Data Protection & Governance",
    question: "What is Microsoft Purview's 'eDiscovery Premium' (formerly Advanced eDiscovery) used for?",
    options: ["Basic content search across Exchange and SharePoint", "Advanced legal investigation workflows including custodian management, review sets, machine learning-based relevance scoring, and near-duplicate detection", "Automated retention policy management", "Real-time monitoring of user file access"],
    correct: 1,
    explanation: "eDiscovery Premium adds advanced legal investigation capabilities: custodian management, legal hold notifications, review sets with ML-based relevance and near-duplicate detection, conversation threading, and export in formats suitable for legal review platforms.",
    source: "https://learn.microsoft.com/en-us/purview/ediscovery-overview",
    sourceLabel: "Microsoft Learn – Overview of Microsoft Purview eDiscovery solutions"
  },
  {
    id: 106, domain: "Data Protection & Governance",
    question: "What is 'Microsoft Purview Data Map' used for?",
    options: ["Visualizing network topology for Microsoft 365 services", "Creating a unified map of an organization's data estate across on-premises, multi-cloud, and SaaS sources to enable data discovery, classification, and lineage", "Mapping sensitivity labels to data locations", "Generating network diagrams for compliance reports"],
    correct: 1,
    explanation: "Microsoft Purview Data Map provides a unified data catalog for the entire enterprise data estate — not just Microsoft 365. It scans, classifies, and maps data across SQL databases, Azure storage, on-premises sources, and SaaS apps for governance and discovery.",
    source: "https://learn.microsoft.com/en-us/purview/concept-data-map",
    sourceLabel: "Microsoft Learn – Microsoft Purview Data Map"
  },
  {
    id: 107, domain: "Data Protection & Governance",
    question: "A DLP policy is set to 'Block with override' for emails containing credit card numbers. What does this mean for users?",
    options: ["The email is always blocked with no exceptions", "The email is blocked, but the user can provide a business justification to send it anyway — and the override is logged for review", "The email is automatically redirected to the compliance team", "The user receives a warning but the email is sent automatically"],
    correct: 1,
    explanation: "Block with override prevents the action but allows the user to override the block by providing a business justification. The override is logged in DLP reports, giving visibility into potential policy violations while not completely stopping legitimate business use.",
    source: "https://learn.microsoft.com/en-us/purview/dlp-policy-tips-reference",
    sourceLabel: "Microsoft Learn – DLP policy tips reference"
  },
  {
    id: 108, domain: "Data Protection & Governance",
    question: "What is 'Microsoft Purview Insider Risk Management' specifically designed to address?",
    options: ["External hacker attacks on Microsoft 365", "Risks posed by people inside the organization — current and former employees, contractors — who may intentionally or unintentionally misuse their access", "Malware infections on user devices", "Compliance violations by third-party vendors"],
    correct: 1,
    explanation: "Insider Risk Management focuses on internal risks: data theft by departing employees, IP theft, sabotage, accidental data leakage, or regulatory violations. It uses behavioral signals from M365 activities and integrates with HR connectors for contextual risk signals.",
    source: "https://learn.microsoft.com/en-us/purview/insider-risk-management",
    sourceLabel: "Microsoft Learn – Learn about Insider Risk Management"
  },
  {
    id: 109, domain: "Data Protection & Governance",
    question: "What is a 'sensitivity label scope' in Microsoft Purview?",
    options: ["The geographic region where a sensitivity label can be applied", "The types of content the label can be applied to — Files & emails, Groups & sites, or Schematized data assets (like SQL databases)", "The number of users who can apply a specific label", "The encryption strength used by the label"],
    correct: 1,
    explanation: "Label scope defines where a sensitivity label can be applied: to Files & emails (documents, email), to Groups & sites (Teams teams, SharePoint sites, Microsoft 365 Groups), or to Schematized data assets. A label can have one or multiple scopes.",
    source: "https://learn.microsoft.com/en-us/purview/sensitivity-labels",
    sourceLabel: "Microsoft Learn – Learn about sensitivity labels"
  },
  {
    id: 110, domain: "Data Protection & Governance",
    question: "What happens to content in Microsoft Teams when a retention policy set to 'Delete after 1 year' is applied?",
    options: ["Teams messages older than 1 year are immediately deleted when the policy is activated", "Teams channel messages and chat messages older than 1 year are deleted from the user view and preserved in a hidden compliance copy, then permanently deleted after the retention period ends", "Only files in Teams channels are deleted; chat messages are unaffected", "The policy only applies to files, not messages"],
    correct: 1,
    explanation: "When a Teams retention policy deletes a message, it is removed from the user view (they no longer see it) but a compliance copy is preserved in the user's mailbox hidden folder. At the end of the retention period, the compliance copy is permanently deleted.",
    source: "https://learn.microsoft.com/en-us/purview/retention-policies-teams",
    sourceLabel: "Microsoft Learn – Learn about retention policies for Microsoft Teams"
  },
  {
    id: 111, domain: "Data Protection & Governance",
    question: "What is 'Microsoft Purview Audit (Premium)' and what does it add over Audit (Standard)?",
    options: ["Audit Premium is only for government cloud tenants", "Audit Premium adds longer retention of audit logs (up to 10 years), high-value audit events (e.g., MailItemsAccessed for email forensics), and intelligent insights for investigations", "Audit Standard retains logs for 10 years; Audit Premium for 90 days", "They are identical except for pricing"],
    correct: 1,
    explanation: "Audit Standard retains logs for 90 days. Audit Premium extends retention to 1 year (or 10 years with an add-on), adds crucial forensic events like MailItemsAccessed (who read specific emails, for compromise investigation), and provides AI-powered insights.",
    source: "https://learn.microsoft.com/en-us/purview/audit-premium",
    sourceLabel: "Microsoft Learn – Microsoft Purview Audit (Premium)"
  },
  {
    id: 112, domain: "Data Protection & Governance",
    question: "What is the Microsoft Purview 'Data Explorer' (Content Explorer) used for?",
    options: ["Finding all users who have accessed a specific SharePoint site", "Showing a snapshot of all items in the tenant that have been labeled with sensitivity labels or classified with sensitive information types", "Managing retention policies across all M365 workloads", "Generating GDPR compliance certificates"],
    correct: 1,
    explanation: "Content Explorer (Data Explorer) provides a repository-level view of all content with sensitivity labels or sensitive information type matches across M365. Admins can see counts per label/SIT and drill down to actual items — essential for understanding the data landscape before implementing policies.",
    source: "https://learn.microsoft.com/en-us/purview/data-classification-content-explorer",
    sourceLabel: "Microsoft Learn – Get started with content explorer"
  },
  {
    id: 113, domain: "Data Protection & Governance",
    question: "What is 'exact data match' (EDM) classification in Microsoft Purview?",
    options: ["An exact keyword match DLP rule", "A sensitive information type based on a database of actual sensitive records (e.g., your specific employees' SSNs or patient IDs), rather than generic patterns", "A method to exactly match document templates", "An audit feature that detects exact copies of confidential documents"],
    correct: 1,
    explanation: "Exact Data Match classifies based on a fingerprint of your actual sensitive data. Instead of detecting 'any credit card number', EDM detects specifically the credit card numbers belonging to your customers. This dramatically reduces false positives.",
    source: "https://learn.microsoft.com/en-us/purview/sit-learn-about-exact-data-match-based-sits",
    sourceLabel: "Microsoft Learn – Learn about exact data match based sensitive information types"
  },
  {
    id: 114, domain: "Data Protection & Governance",
    question: "What does applying a sensitivity label with 'Content Marking' do to a document?",
    options: ["Restricts who can print the document", "Adds visual markings to the document such as headers, footers, and watermarks that indicate its classification", "Encrypts the document content", "Prevents the document from being attached to emails"],
    correct: 1,
    explanation: "Content marking applies visual indicators — headers (e.g., 'CONFIDENTIAL' at top), footers, or watermarks — to labeled documents. These visual markings help users identify a document's classification and are applied regardless of encryption settings.",
    source: "https://learn.microsoft.com/en-us/purview/sensitivity-labels-office-apps#dynamic-markings-with-variables",
    sourceLabel: "Microsoft Learn – Dynamic markings in Office apps"
  },
  {
    id: 115, domain: "Data Protection & Governance",
    question: "What is 'Microsoft Purview Information Barriers' used for?",
    options: ["Blocking information from being stored in specific geographic regions", "Defining and enforcing policies that prevent certain groups of users from communicating or accessing data from other groups, for compliance reasons", "Setting DLP policies based on information type", "Managing information access for external partners"],
    correct: 1,
    explanation: "Information Barriers define segments of users and restrict communication/collaboration between specified segments — for example, preventing conflict-of-interest scenarios in financial institutions by separating investment banking from retail banking users.",
    source: "https://learn.microsoft.com/en-us/purview/information-barriers-solution-overview",
    sourceLabel: "Microsoft Learn – Information barriers in Microsoft Purview"
  },
  {
    id: 116, domain: "Data Protection & Governance",
    question: "How does Microsoft Purview handle GDPR 'right to erasure' (right to be forgotten) requests?",
    options: ["Microsoft automatically deletes all user data upon request without admin involvement", "Administrators can use Content Search in eDiscovery to find and then hard-delete specific personal data from Exchange, SharePoint, Teams, and OneDrive", "GDPR erasure requests automatically trigger retention label deletion", "Only Microsoft Support can process GDPR erasure requests"],
    correct: 1,
    explanation: "For GDPR data subject erasure requests, administrators use Content Search to identify all personal data for the subject across M365 locations, then use the relevant deletion methods (hard delete from Exchange, document deletion from SharePoint) — a deliberate manual process to prevent accidental data loss.",
    source: "https://learn.microsoft.com/en-us/compliance/regulatory/gdpr-dsr-office365",
    sourceLabel: "Microsoft Learn – Office 365 Data Subject Requests for GDPR"
  },
  {
    id: 117, domain: "Data Protection & Governance",
    question: "What is a 'compliance boundary' in the context of Microsoft Purview eDiscovery multi-geo tenants?",
    options: ["The geographic boundary for data storage", "A logical boundary that restricts which eDiscovery managers can search or place holds on which organizational units or geographic regions — preventing cross-departmental snooping", "The maximum amount of data that can be searched in a single query", "A boundary that prevents external users from being included in eDiscovery searches"],
    correct: 1,
    explanation: "Compliance boundaries in eDiscovery limit which content locations an eDiscovery manager can search. For example, a HR eDiscovery manager can only search HR user content, while the Legal team manager has broader access — enforcing separation of duties.",
    source: "https://learn.microsoft.com/en-us/purview/ediscovery-set-up-compliance-boundaries",
    sourceLabel: "Microsoft Learn – Set up compliance boundaries for eDiscovery"
  },
  {
    id: 118, domain: "Data Protection & Governance",
    question: "What is 'Microsoft Purview Customer Lockbox'?",
    options: ["A feature that locks customer data in a specific Azure region", "A process that requires customer approval before Microsoft support engineers can access customer content during a support case", "A way to lock sensitivity labels so users cannot change them", "A compliance feature that prevents data export from Microsoft 365"],
    correct: 1,
    explanation: "Customer Lockbox ensures that when Microsoft support needs to access your content to resolve a support issue, they must first request your explicit approval. You review the request (including scope and duration) and can approve or deny access.",
    source: "https://learn.microsoft.com/en-us/purview/customer-lockbox-requests",
    sourceLabel: "Microsoft Learn – Customer Lockbox in Microsoft Purview"
  },
  {
    id: 119, domain: "Data Protection & Governance",
    question: "What is Microsoft Purview's 'Communication Compliance' specifically able to detect that regular DLP cannot?",
    options: ["Files containing credit card numbers", "Behavioral patterns in communications such as inappropriate language, bullying, threatening language, or regulatory violations in message content over time", "External sharing of sensitive documents", "Bulk download of SharePoint files"],
    correct: 1,
    explanation: "Communication Compliance analyzes the content of messages (Teams, Exchange, Yammer) for behavioral compliance — inappropriate conduct, harassment, regulatory violations like Reg FD disclosures. Regular DLP focuses on data patterns in documents and emails, not behavioral communication content.",
    source: "https://learn.microsoft.com/en-us/purview/communication-compliance",
    sourceLabel: "Microsoft Learn – Learn about Communication Compliance"
  },
  {
    id: 120, domain: "Data Protection & Governance",
    question: "What is the 'sensitivity label priority order' and why does it matter?",
    options: ["The order in which labels are applied to new documents", "A ranking that determines which label takes precedence when multiple labels could apply — higher-priority labels cannot be downgraded by users without justification", "The order in which labels appear in the user interface", "The processing priority for auto-labeling policies"],
    correct: 1,
    explanation: "Labels have a priority order (0 = lowest, higher number = higher priority). Users cannot downgrade to a lower-priority label without providing a justification (and the action is audited). This prevents accidental or deliberate declassification of sensitive documents.",
    source: "https://learn.microsoft.com/en-us/purview/sensitivity-labels#label-priority-order-matters",
    sourceLabel: "Microsoft Learn – Label priority order matters"
  },
  {
    id: 121, domain: "Data Protection & Governance",
    question: "What is 'Microsoft Purview Data Loss Prevention for endpoints'?",
    options: ["DLP policies that only apply to Exchange email on Windows devices", "DLP capability that monitors and enforces data handling policies on Windows 10/11 devices — such as blocking copying sensitive files to USB drives, uploading to non-corporate cloud storage, or printing", "A mobile device management feature that prevents data loss when devices are lost", "Endpoint detection and response for data breaches"],
    correct: 1,
    explanation: "Endpoint DLP extends Purview DLP enforcement to Windows devices. It can detect sensitive content in files and apply policies to block or audit activities like copying to USB, printing, uploading to non-approved cloud services, or sharing via Bluetooth — regardless of network location.",
    source: "https://learn.microsoft.com/en-us/purview/endpoint-dlp-learn-about",
    sourceLabel: "Microsoft Learn – Learn about endpoint data loss prevention"
  },
  {
    id: 122, domain: "Data Protection & Governance",
    question: "What is a 'policy tip' in Microsoft Purview DLP?",
    options: ["A recommendation to create a new DLP policy", "A notification shown to users in real-time (within Outlook, SharePoint, Teams) when their action may violate a DLP policy, allowing them to adjust before completing the action", "An automatic email sent to compliance officers when a policy is violated", "A tooltip that explains what a sensitivity label means"],
    correct: 1,
    explanation: "Policy tips provide real-time, in-context guidance to users in Office apps and Teams when they are about to perform an action that matches a DLP rule. The tip can explain the policy, provide override options, or simply notify the user — changing behavior proactively.",
    source: "https://learn.microsoft.com/en-us/purview/use-notifications-and-policy-tips",
    sourceLabel: "Microsoft Learn – Use notifications and policy tips"
  },
  {
    id: 123, domain: "Data Protection & Governance",
    question: "What is the Microsoft Purview 'Insider Risk Management' triage workflow?",
    options: ["Automatic deletion of files flagged as risky", "A process of reviewing alerts generated by Insider Risk Management policies, investigating cases, and taking actions (dismiss, escalate, or remediate) based on findings", "An automated email notification system for risky behavior", "A report exported to the security team weekly"],
    correct: 1,
    explanation: "Insider Risk Management generates alerts when user behavior matches policy indicators. Investigators triage alerts (dismiss as false positive or open a case), investigate the case timeline (activities across M365 over the investigation period), and take appropriate action — including escalating to eDiscovery or HR.",
    source: "https://learn.microsoft.com/en-us/purview/insider-risk-management-cases",
    sourceLabel: "Microsoft Learn – Investigate insider risk management cases"
  },
  {
    id: 124, domain: "Data Protection & Governance",
    question: "What is 'Microsoft Purview Data Catalog' used for?",
    options: ["A catalog of available DLP policy templates", "A searchable inventory of an organization's data assets across all sources, enabling users to discover, understand, and access data for business use", "A list of all sensitivity labels applied in the tenant", "A catalog of Microsoft compliance frameworks"],
    correct: 1,
    explanation: "The Purview Data Catalog (part of Microsoft Purview governance) provides a searchable, organized inventory of all data assets across the organization's data estate — databases, files, APIs, Power BI datasets. Data users can discover data and understand its classification and lineage.",
    source: "https://learn.microsoft.com/en-us/purview/use-azure-purview-studio",
    sourceLabel: "Microsoft Learn – Use Microsoft Purview governance portal"
  },
  {
    id: 125, domain: "Data Protection & Governance",
    question: "A user labels a document as 'Highly Confidential - Encrypted'. They then try to share it with an external partner via email. What happens?",
    options: ["The document is automatically decrypted before being sent", "The email is blocked by DLP regardless of the sensitivity label", "The encryption remains — the external partner can only open the document if their identity is authorized in the label's encryption settings", "The external partner receives a link to the document in SharePoint instead"],
    correct: 2,
    explanation: "Sensitivity label encryption persists with the document regardless of where it goes. The external partner can only open the document if their email address (or domain) has been granted access in the label's encryption configuration — the label's permissions travel with the file.",
    source: "https://learn.microsoft.com/en-us/purview/encryption-sensitivity-labels",
    sourceLabel: "Microsoft Learn – Restrict access to content by using sensitivity labels to apply encryption"
  },
  {
    id: 126, domain: "Data Protection & Governance",
    question: "What is the 'Microsoft Purview Compliance Manager' improvement action score?",
    options: ["The number of DLP violations prevented this month", "Points awarded for each security/compliance control implemented, contributing to the overall compliance score toward a regulatory framework", "The percentage of employees who completed compliance training", "The number of sensitivity labels applied this quarter"],
    correct: 1,
    explanation: "Each improvement action in Compliance Manager has a point value reflecting its compliance impact. Implementing the action (e.g., 'Enable MFA for all users') earns those points, increasing the overall compliance score. Actions are prioritized by point value to guide remediation.",
    source: "https://learn.microsoft.com/en-us/purview/compliance-manager-improvement-actions",
    sourceLabel: "Microsoft Learn – Improvement actions in Compliance Manager"
  },
  {
    id: 127, domain: "Data Protection & Governance",
    question: "What is 'adaptive protection' in Microsoft Purview?",
    options: ["DLP policies that adapt to the time of day", "A feature that dynamically adjusts DLP policy enforcement based on a user's current insider risk level — applying stricter controls to users with elevated risk", "Automatic label adjustments based on document changes", "Conditional Access policies that adapt to device risk"],
    correct: 1,
    explanation: "Adaptive Protection integrates Insider Risk Management with DLP. Users flagged as elevated risk in Insider Risk Management automatically receive stricter DLP policy enforcement (e.g., block instead of warn), while low-risk users experience less friction. Risk-based, dynamic protection.",
    source: "https://learn.microsoft.com/en-us/purview/insider-risk-management-adaptive-protection",
    sourceLabel: "Microsoft Learn – Help dynamically mitigate risks with adaptive protection"
  },
  {
    id: 128, domain: "Data Protection & Governance",
    question: "What is 'Microsoft Purview Records Management' used for?",
    options: ["Managing contact records in Microsoft 365", "Declaring items as official business records that cannot be modified or deleted during their retention period, with defensible disposal at end of life", "Managing meeting recordings in Teams", "Maintaining a database of compliance officers"],
    correct: 1,
    explanation: "Records Management in Microsoft Purview allows organizations to declare items as immutable 'records' — content that must be kept exactly as-is for regulatory or legal reasons. Records are locked from editing and deletion, with a reviewed, auditable disposal process at the end of the retention period.",
    source: "https://learn.microsoft.com/en-us/purview/records-management",
    sourceLabel: "Microsoft Learn – Learn about records management"
  },
  {
    id: 129, domain: "Data Protection & Governance",
    question: "What does the 'SharePoint Advanced Management' site lifecycle management feature do?",
    options: ["Automatically migrates SharePoint sites to newer versions", "Identifies and manages inactive SharePoint sites — notifying owners to confirm the site is still needed or triggering archival/deletion of truly inactive sites", "Manages the SharePoint site template library", "Controls how many sites a single user can create"],
    correct: 1,
    explanation: "Site lifecycle management in SharePoint Advanced Management helps address SharePoint sprawl. It detects sites with low activity, emails site owners to confirm continued need, and can automatically archive or delete confirmed inactive sites — keeping the tenant clean and reducing oversharing risk.",
    source: "https://learn.microsoft.com/en-us/sharepoint/site-lifecycle-management",
    sourceLabel: "Microsoft Learn – Site lifecycle management"
  },
  {
    id: 130, domain: "Data Protection & Governance",
    question: "What is 'Microsoft Purview Data Security Posture Management (DSPM) for AI' specifically designed to address?",
    options: ["General security posture for all Microsoft 365 services", "The specific risks introduced by AI tools accessing organizational data — providing visibility into which sensitive data AI can reach and recommending controls to reduce AI-specific risk", "Securing Azure AI services and models", "Managing DLP policies for AI-generated content"],
    correct: 1,
    explanation: "DSPM for AI focuses exclusively on AI risk: it maps which sensitive data is accessible to Copilot and other Microsoft AI tools, identifies permissions gaps that could expose sensitive data through AI interactions, and recommends specific remediations to reduce the AI attack surface.",
    source: "https://learn.microsoft.com/en-us/purview/ai-microsoft-purview",
    sourceLabel: "Microsoft Learn – Microsoft Purview data security and compliance for Microsoft Copilot"
  },
  {
    id: 131, domain: "Data Protection & Governance",
    question: "What is the purpose of 'Microsoft Purview eDiscovery' review sets?",
    options: ["A set of DLP policies to review quarterly", "A static collection of items collected from a search that can be analyzed, filtered, tagged, annotated, and exported for legal review — without affecting the original content", "A set of reviewer accounts assigned to compliance investigations", "A collection of audit log entries for a specific time period"],
    correct: 1,
    explanation: "Review sets in eDiscovery Premium contain a static, isolated collection of items from a search. Legal teams can work with the review set — apply tags, add annotations, run ML analysis, filter by relevance — without affecting the original data in M365.",
    source: "https://learn.microsoft.com/en-us/purview/ediscovery-review-set-search",
    sourceLabel: "Microsoft Learn – Query and filter content in a review set"
  },
  {
    id: 132, domain: "Data Protection & Governance",
    question: "What is 'Microsoft Purview's Compliance Score' and what score is considered good?",
    options: ["A score from 0-100 where 100 means fully compliant with all regulations", "A relative score reflecting the percentage of recommended controls implemented; higher is better but there is no universal 'good' score — it depends on the regulatory frameworks selected and the organization's risk tolerance", "A binary pass/fail score for each regulatory framework", "A score calculated monthly by external auditors"],
    correct: 1,
    explanation: "The Compliance Manager score is relative, not absolute. It reflects the percentage of recommended controls implemented across selected frameworks. A score of 60% means 60% of recommended controls are in place. There is no universal 'good' threshold — organizations compare against their own targets and peer benchmarks.",
    source: "https://learn.microsoft.com/en-us/purview/compliance-manager-setup",
    sourceLabel: "Microsoft Learn – Set up Compliance Manager"
  },
  {
    id: 133, domain: "Data Protection & Governance",
    question: "What happens to Microsoft Teams meeting recordings in relation to retention policies?",
    options: ["Teams meeting recordings are stored in SharePoint and OneDrive and can be subject to retention policies just like other files", "Meeting recordings are automatically deleted after 30 days regardless of retention policies", "Retention policies do not apply to Teams meeting recordings", "Meeting recordings are stored only in Azure Media Services, outside Purview's scope"],
    correct: 0,
    explanation: "Teams meeting recordings are stored in OneDrive (for personal meetings) or SharePoint (for channel meetings). Since they are stored in M365, they can be subject to retention policies and sensitivity labels applied to SharePoint/OneDrive content.",
    source: "https://learn.microsoft.com/en-us/microsoftteams/meeting-recording",
    sourceLabel: "Microsoft Learn – Teams meeting recording"
  },
  {
    id: 134, domain: "Data Protection & Governance",
    question: "What is 'Microsoft Purview Message Encryption' (formerly Office Message Encryption)?",
    options: ["Encrypting all email transport between Microsoft servers", "A service that allows users to send encrypted emails to recipients inside and outside the organization, who can read them without needing S/MIME certificates or special software", "An anti-spam service for Exchange Online", "End-to-end encryption for Teams chat messages"],
    correct: 1,
    explanation: "Microsoft Purview Message Encryption allows sending encrypted, rights-protected emails to anyone (Microsoft account, Google, any email provider). Recipients access the message via a one-time passcode or by signing in with a supported identity — no special software required.",
    source: "https://learn.microsoft.com/en-us/purview/ome",
    sourceLabel: "Microsoft Learn – Message encryption"
  },
  {
    id: 135, domain: "Data Protection & Governance",
    question: "What is the 'privacy by design' principle in the context of Responsible AI and Copilot?",
    options: ["Designing Copilot to only work with publicly available data", "Building privacy protections into the AI system from the ground up — rather than as an afterthought — so that data minimization, purpose limitation, and user control are inherent features", "Requiring users to consent before every Copilot interaction", "Encrypting all Copilot prompts before processing"],
    correct: 1,
    explanation: "Privacy by design means privacy controls are built into the architecture of Copilot from the start. Microsoft implements this through tenant data isolation, no use of customer data for model training, respecting existing permissions, and providing admin controls over data access.",
    source: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy",
    sourceLabel: "Microsoft Learn – Data, Privacy, and Security for Microsoft 365 Copilot"
  },
  {
    id: 136, domain: "Data Protection & Governance",
    question: "What is the 'Microsoft Purview Compliance Manager' regulatory template library?",
    options: ["A library of DLP policy templates", "A collection of pre-built assessment templates for specific regulatory frameworks (GDPR, HIPAA, ISO 27001, NIST, SOC 2, etc.) that map controls to improvement actions", "A library of sensitivity label configurations", "Pre-built eDiscovery search templates"],
    correct: 1,
    explanation: "Compliance Manager includes 350+ regulatory framework templates. Each template maps the framework's specific controls to Microsoft 365 improvement actions, giving organizations a structured path to demonstrate compliance with specific regulations.",
    source: "https://learn.microsoft.com/en-us/purview/compliance-manager-templates-list",
    sourceLabel: "Microsoft Learn – Compliance Manager templates list"
  },
  {
    id: 137, domain: "Data Protection & Governance",
    question: "What does 'co-authoring with sensitivity labels' allow in Microsoft 365?",
    options: ["Multiple users collaborating on a document while it maintains its sensitivity label encryption", "Two compliance officers co-creating a sensitivity label policy", "Sharing sensitivity label policies across multiple tenants", "Automatically applying the highest label of any co-author"],
    correct: 0,
    explanation: "Co-authoring with sensitivity labels enables real-time collaboration (multiple users editing simultaneously) on encrypted, labeled documents in Office apps. Previously, AIP encryption blocked co-authoring. This feature removes that barrier while maintaining label protection.",
    source: "https://learn.microsoft.com/en-us/purview/sensitivity-labels-coauthoring",
    sourceLabel: "Microsoft Learn – Enable co-authoring for files encrypted with sensitivity labels"
  },
  {
    id: 138, domain: "Data Protection & Governance",
    question: "What is the recommended sequence for deploying Microsoft Purview data protection in an organization?",
    options: ["Deploy DLP first, then classify data, then apply labels", "Know your data (classification) → Protect your data (labels + DLP) → Prevent data loss (DLP enforcement) → Govern your data (lifecycle management)", "Deploy retention policies first to protect all data, then add labels", "Labels first, then DLP, then classification"],
    correct: 1,
    explanation: "Microsoft recommends the 'Know, Protect, Prevent, Govern' framework: first understand what sensitive data exists and where (classification), then apply appropriate protections (sensitivity labels), then enforce data loss prevention policies, and finally manage the data lifecycle.",
    source: "https://learn.microsoft.com/en-us/purview/information-protection-solution",
    sourceLabel: "Microsoft Learn – Deploy an information protection solution with Microsoft Purview"
  },

  // ── DOMAIN 3: Copilot & Agent Administration (Q139–Q238) ──────────────────
  {
    id: 139, domain: "Copilot & Agent Administration",
    question: "What is the primary difference between built-in Copilot capabilities and a custom agent?",
    options: ["Built-in Copilot requires more licenses than custom agents", "Built-in Copilot capabilities are pre-configured assistants within M365 apps; custom agents are specifically built for a business process, persona, or data source", "Custom agents can only generate text; built-in Copilot can also generate images", "There is no functional difference — they use the same interface"],
    correct: 1,
    explanation: "Built-in Copilot capabilities (in Word, Teams, Outlook, etc.) are generic productivity assistants for those specific apps. Custom agents are built in Copilot Studio with specific instructions, knowledge (SharePoint sources), and their own persona for a specific use case.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot extensibility"
  },
  {
    id: 140, domain: "Copilot & Agent Administration",
    question: "An organization has 200 users who occasionally but not regularly need Copilot. Which licensing model is most cost-effective?",
    options: ["Purchase 200 fixed monthly Copilot licenses for all users", "Pay-as-you-go, so only actual usage is charged", "Only assign Copilot to managers and have them summarize for others", "Wait for a bundle that automatically includes Copilot"],
    correct: 1,
    explanation: "The pay-as-you-go model is ideal for occasional use. You pay per Copilot interaction (message) rather than a fixed monthly price per user. This is more cost-efficient for users who only occasionally use Copilot.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/pay-as-you-go/overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot pay-as-you-go overview"
  },
  {
    id: 141, domain: "Copilot & Agent Administration",
    question: "How does an administrator monitor Copilot adoption and see which features are used most within an organization?",
    options: ["Via Azure Monitor Logs and Log Analytics Workspaces", "Via Copilot Analytics in the Microsoft 365 admin center", "Via Microsoft Defender XDR Advanced Hunting", "Via Exchange Online Mail Flow Reports"],
    correct: 1,
    explanation: "Copilot Analytics in the Microsoft 365 admin center shows active users, usage per app (Word, Teams, Outlook), most-used features, and adoption trends. This helps administrators measure the ROI of Copilot investments.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/activity-reports",
    sourceLabel: "Microsoft Learn – Microsoft 365 Reports in the admin center"
  },
  {
    id: 142, domain: "Copilot & Agent Administration",
    question: "What are the use cases for the Researcher feature in Microsoft 365 Copilot?",
    options: ["Performing complex arithmetic analyses on spreadsheet data", "Conducting in-depth research by gathering information from M365 sources and the web, producing structured research reports", "Automating email workflows in Outlook", "Automatically summarizing Teams meetings after they end"],
    correct: 1,
    explanation: "Researcher is designed for knowledge-intensive research — it searches for information in M365 data and the web, synthesizes findings, and helps create structured reports. It differs from Analyst, which is focused on quantitative data analysis.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/researcher-analyst-overview",
    sourceLabel: "Microsoft Learn – Researcher and Analyst in Microsoft 365 Copilot"
  },
  {
    id: 143, domain: "Copilot & Agent Administration",
    question: "What must happen before a custom agent is available to end users in an organization?",
    options: ["The agent automatically becomes active once published in Copilot Studio", "The agent goes through an approval process via the Microsoft 365 admin center or Power Platform admin center", "Microsoft Support must manually activate the agent", "The agent must run in test mode for three months"],
    correct: 1,
    explanation: "Agents go through an approval process. Administrators review and approve (or reject) agents via the M365 admin center or Power Platform admin center, depending on the agent type. This prevents uncontrolled agents from being deployed without IT oversight.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps",
    sourceLabel: "Microsoft Learn – Manage agents for Microsoft 365 Copilot"
  },
  {
    id: 144, domain: "Copilot & Agent Administration",
    question: "What are the use cases for the Analyst feature in Microsoft 365 Copilot?",
    options: ["In-depth online research and gathering market intelligence", "Advanced data analysis on structured datasets, such as performing calculations, identifying trends, and generating insights from Excel data", "Automatically categorizing emails in Outlook", "Creating Teams channels based on project templates"],
    correct: 1,
    explanation: "Analyst is designed for data analysis — it works with structured data (tables, Excel files), performs calculations, identifies patterns, and generates insights. It differs from Researcher, which focuses on information gathering from multiple sources.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/researcher-analyst-overview",
    sourceLabel: "Microsoft Learn – Researcher and Analyst in Microsoft 365 Copilot"
  },
  {
    id: 145, domain: "Copilot & Agent Administration",
    question: "An employee has created an effective prompt for analyzing sales reports. How can they share it with colleagues?",
    options: ["Email the prompt as a text file to colleagues", "Save the prompt in Microsoft Copilot and share it via the prompt management feature", "Publish the prompt as a Teams channel post", "Convert the prompt into a custom agent in Copilot Studio"],
    correct: 1,
    explanation: "Microsoft 365 Copilot provides prompt management where users can save, name, and share prompts. Shared prompts are visible in the Copilot interface for team members. Administrators can also manage organization-wide prompts.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/prompt-gallery-overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot prompt gallery"
  },
  {
    id: 146, domain: "Copilot & Agent Administration",
    question: "Which Power Platform component is used to build and manage custom Copilot agents?",
    options: ["Power BI", "Power Automate", "Copilot Studio (formerly Power Virtual Agents)", "Power Apps"],
    correct: 2,
    explanation: "Copilot Studio (formerly Power Virtual Agents) is the low-code/no-code platform for building custom Copilot agents. It provides a visual interface for defining behavior, knowledge, actions, and integrations without requiring deep programming skills.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio",
    sourceLabel: "Microsoft Learn – What is Microsoft Copilot Studio?"
  },
  {
    id: 147, domain: "Copilot & Agent Administration",
    question: "What is the pay-as-you-go billing model for Copilot, and how does it differ from the monthly license?",
    options: ["There is no difference — they are the same licenses with different names", "The monthly license provides unlimited access for a fixed price; pay-as-you-go charges per interaction without a fixed commitment", "Pay-as-you-go is exclusively available for SharePoint", "The monthly license is only for administrators; pay-as-you-go for end users"],
    correct: 1,
    explanation: "The monthly Copilot license provides unlimited access for a fixed monthly price per user. Pay-as-you-go charges per Copilot interaction (message), with no minimum commitment. Ideal for pilot programs or seasonal use cases.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/pay-as-you-go/overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot pay-as-you-go"
  },
  {
    id: 148, domain: "Copilot & Agent Administration",
    question: "What does the agent lifecycle include in the context of Microsoft 365 Copilot?",
    options: ["Agent lifecycle is not applicable — agents are permanently active", "The lifecycle includes: Build, Test, Publish/Approve, Deploy, Monitor, and Maintain/Update or Deactivate", "The lifecycle only consists of Create and Delete", "The lifecycle is identical to the lifecycle of a SharePoint site"],
    correct: 1,
    explanation: "Agent lifecycle management covers all phases: build (Copilot Studio), test, publish (approval process), deploy for users, actively monitor usage and performance, and eventually update or deactivate. Administrators manage this via M365 and Power Platform admin centers.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels",
    sourceLabel: "Microsoft Learn – Publish your agent in Microsoft Copilot Studio"
  },
  {
    id: 149, domain: "Copilot & Agent Administration",
    question: "What is 'orchestration' in the context of Copilot agents?",
    options: ["Scheduling Teams meetings via Copilot", "The process by which Copilot automatically determines which tool, plugin, or knowledge source is most appropriate to answer a user's question", "Synchronizing agent data between different M365 tenants", "Managing the order of messages in a Teams channel"],
    correct: 1,
    explanation: "Orchestration is the 'brain' behind Copilot agents: the system that analyzes what the user needs and automatically selects the right action (query knowledge base, execute an action via a connector, or generate text). This makes agents intelligent and context-aware.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-generative-actions",
    sourceLabel: "Microsoft Learn – Use generative AI in Copilot Studio"
  },
  {
    id: 150, domain: "Copilot & Agent Administration",
    question: "An organization built a Copilot agent that automatically creates IT support tickets in ServiceNow. Which Copilot Studio feature enables this?",
    options: ["A knowledge source connected to the ServiceNow documentation website", "An action (connector) that creates a ticket via the ServiceNow API", "A retention policy for IT conversations", "A DLP policy that forwards IT-related messages"],
    correct: 1,
    explanation: "Actions (connectors) in Copilot Studio are connections to external systems via API connectors. A ServiceNow connector allows the agent to automatically create tickets based on the user's description.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-connectors",
    sourceLabel: "Microsoft Learn – Use connectors in Copilot Studio"
  },
  {
    id: 151, domain: "Copilot & Agent Administration",
    question: "Which Microsoft 365 base license is required to use Microsoft 365 Copilot?",
    options: ["Any Microsoft 365 license including the cheapest Business Basic", "At minimum Microsoft 365 Business Standard, Business Premium, E3, or E5 as base, plus the separate Copilot license add-on", "Exclusively Microsoft 365 E5", "Azure AD Premium P2 as the base for Copilot"],
    correct: 1,
    explanation: "Copilot requires a qualifying M365 base license (Business Standard, Business Premium, E3, E5, or specific F-licenses) plus the separate Microsoft 365 Copilot add-on license. Microsoft 365 Business Basic is not sufficient.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-requirements",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot requirements"
  },
  {
    id: 152, domain: "Copilot & Agent Administration",
    question: "What Copilot feature can an administrator enable or disable to control whether Copilot can perform web searches?",
    options: ["Microsoft Graph connector", "Bing web search integration for Copilot", "Microsoft Purview data scanning", "Teams integration for Copilot"],
    correct: 1,
    explanation: "Administrators can enable or disable Bing web search integration for Copilot in the Microsoft 365 admin center. When disabled, Copilot bases its responses exclusively on internal M365 data via Microsoft Graph.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/manage-public-web-access",
    sourceLabel: "Microsoft Learn – Manage Copilot web search"
  },
  {
    id: 153, domain: "Copilot & Agent Administration",
    question: "What operational insights can administrators monitor for Copilot agents via the Power Platform admin center?",
    options: ["Only the number of times an agent has been installed", "Usage per agent (number of conversations, active users), error rates, average response times, and escalations to human agents", "The source code of all active agents", "Financial transactions processed by agents"],
    correct: 1,
    explanation: "The Power Platform admin center provides operational insights for Copilot agents including conversation volume, active users, session completion rates, error rates, and escalations. This helps monitor agent performance and identify areas for improvement.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview",
    sourceLabel: "Microsoft Learn – Analytics overview in Copilot Studio"
  },
  {
    id: 154, domain: "Copilot & Agent Administration",
    question: "What is a 'declarative agent' in the context of Microsoft 365 Copilot?",
    options: ["An agent that makes decisions autonomously without human input", "An agent configured with instructions, knowledge, and actions that customize Copilot's behavior for specific scenarios, built in Copilot Studio", "A security agent that enforces DLP policies", "An agent that automatically manages users in Microsoft Entra"],
    correct: 1,
    explanation: "Declarative agents are customized Copilot experiences built in Copilot Studio (or via the API). You 'declare' the behavior via instructions (system prompt), knowledge (SharePoint sources, websites), and actions (API connections). They run within the Copilot security boundary.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-declarative-agent",
    sourceLabel: "Microsoft Learn – Declarative agents for Microsoft 365 Copilot"
  },
  {
    id: 155, domain: "Copilot & Agent Administration",
    question: "What is the most suitable knowledge source for a Copilot agent built to answer HR policy questions?",
    options: ["A public website with general HR information", "A SharePoint site or library containing the organization's current HR policy documents", "An Excel file on the HR manager's local hard drive", "An external HR database via the internet"],
    correct: 1,
    explanation: "SharePoint sites and libraries are the recommended knowledge sources for Copilot agents within M365. They are secured via existing permissions, centrally managed, always current, and seamlessly integrable in Copilot Studio as a knowledge connector.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint",
    sourceLabel: "Microsoft Learn – Add SharePoint as a knowledge source in Copilot Studio"
  },
  {
    id: 156, domain: "Copilot & Agent Administration",
    question: "What is 'prompt engineering' and why is it relevant for Copilot users?",
    options: ["Technically programming Copilot agents in Copilot Studio", "Effectively formulating instructions (prompts) to Copilot to get better, more relevant, and more precise responses", "Setting security policies for Copilot prompts", "Archiving Copilot prompt history for compliance"],
    correct: 1,
    explanation: "Prompt engineering is the skill of writing effective prompts — clear, specific, with context and desired output format. Better prompts lead to more relevant Copilot responses. Microsoft provides resources via Microsoft Learn and the Copilot Lab.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/prompting-tips",
    sourceLabel: "Microsoft Learn – Tips for writing effective Copilot prompts"
  },
  {
    id: 157, domain: "Copilot & Agent Administration",
    question: "How does an administrator deploy a custom agent to all users in the organization via Teams?",
    options: ["Publish the agent via the Microsoft App Store", "Approve and deploy the agent via the Microsoft 365 admin center or Teams Admin Center under 'Manage apps'", "Invite all users as testers in Copilot Studio", "Run a PowerShell script to distribute the agent"],
    correct: 1,
    explanation: "After approval in the approval process, an administrator can make the agent available for the entire organization (or specific groups) via the Microsoft 365 admin center or Teams Admin Center. This is similar to deploying other Teams apps.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps",
    sourceLabel: "Microsoft Learn – Manage agents for Microsoft 365 Copilot"
  },
  {
    id: 158, domain: "Copilot & Agent Administration",
    question: "What is the purpose of Copilot Pages in Microsoft 365?",
    options: ["A new type of SharePoint page for Copilot documentation", "A shared workspace automatically created from a Copilot response, where users can collaborate on AI-generated content", "An administrator dashboard for Copilot monitoring", "A template for creating Copilot agents"],
    correct: 1,
    explanation: "Copilot Pages are shared workspaces (in Microsoft Loop) created from Copilot Business Chat. Teams can directly edit, add to, and collaborate on AI-generated content — the Copilot output becomes a living document for the entire team.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/copilot-pages-overview",
    sourceLabel: "Microsoft Learn – Copilot Pages overview"
  },
  {
    id: 159, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft 365 Copilot Chat' (formerly Business Chat)?",
    options: ["A replacement for Microsoft Teams chat", "A cross-M365-app AI experience that synthesizes information from emails, chats, files, meetings, and calendar to answer complex, multi-source questions", "A chatbot for IT support tickets", "A channel in Teams dedicated to Copilot interactions"],
    correct: 1,
    explanation: "Copilot Chat (formerly Business Chat/BizChat) provides a conversational AI experience that works across all M365 data — it can answer 'What did I miss while I was on vacation?' by synthesizing emails, chats, meeting notes, and files from the user's accessible content.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot overview"
  },
  {
    id: 160, domain: "Copilot & Agent Administration",
    question: "What is Copilot Studio's 'generative answers' feature?",
    options: ["A feature that generates promotional content for marketing", "A capability that enables an agent to answer questions from connected knowledge sources using generative AI, without requiring explicit predefined conversation paths for every question", "A tool for generating structured forms and surveys", "Automatically generating agent instructions from a description"],
    correct: 1,
    explanation: "Generative answers in Copilot Studio allow agents to use connected knowledge sources (SharePoint, websites, files) and generative AI to answer questions that don't match predefined topics. This makes agents more flexible and reduces the need to author every conversation path.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-conversations",
    sourceLabel: "Microsoft Learn – Use generative answers to boost conversations"
  },
  {
    id: 161, domain: "Copilot & Agent Administration",
    question: "What is 'Microsoft Copilot for Microsoft 365' in Teams specifically able to do during a meeting?",
    options: ["Block unwanted attendees from joining the meeting", "Provide real-time transcription, summarize discussion points, identify action items, and answer questions about what was discussed — even in a live meeting", "Automatically record and share meetings to SharePoint", "Translate meeting audio in real-time for international attendees"],
    correct: 1,
    explanation: "Copilot in Teams meetings can summarize discussion so far, identify key points and action items, and answer questions about what has been discussed — all in real-time during the meeting. Post-meeting, it creates structured summaries with decisions and action items.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-teams-meetings",
    sourceLabel: "Microsoft Learn – Use Copilot in Microsoft Teams meetings"
  },
  {
    id: 162, domain: "Copilot & Agent Administration",
    question: "What is 'Microsoft Copilot in Outlook' primarily used for?",
    options: ["Blocking spam and phishing emails automatically", "Helping users draft, summarize, and reply to emails more efficiently — suggesting clearer language, summarizing long email threads, and generating draft responses", "Managing calendar scheduling and room bookings", "Enforcing email retention policies on sent messages"],
    correct: 1,
    explanation: "Copilot in Outlook summarizes long email threads (especially useful after vacation), helps users draft replies ('make this more concise'), and can generate draft emails from bullet points. It focuses on reducing email overload and improving communication quality.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-outlook",
    sourceLabel: "Microsoft Learn – Use Copilot in Outlook"
  },
  {
    id: 163, domain: "Copilot & Agent Administration",
    question: "What is 'Microsoft Copilot in Word' specifically designed to help with?",
    options: ["Spell-checking and grammar correction only", "Drafting documents from a brief prompt, transforming existing content (rewrite, summarize, make it more concise), and answering questions about document content", "Converting Word documents to PDF format", "Managing track changes and comments in collaborative documents"],
    correct: 1,
    explanation: "Copilot in Word can draft entire documents from a brief description, transform existing text (make it shorter, change tone, add structure), summarize long documents, and answer specific questions about document content — accelerating document creation and editing significantly.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-word",
    sourceLabel: "Microsoft Learn – Use Copilot in Word"
  },
  {
    id: 164, domain: "Copilot & Agent Administration",
    question: "What is 'Microsoft Copilot in Excel' specifically designed to help with?",
    options: ["Creating charts only", "Analyzing data using natural language (e.g., 'show me top 5 products by revenue'), creating formulas from descriptions, generating Python scripts for analysis, and highlighting insights in datasets", "Importing data from external databases", "Managing Excel file permissions and sharing settings"],
    correct: 1,
    explanation: "Copilot in Excel lets users analyze data by asking natural language questions, generates complex formulas from plain English descriptions, creates Python scripts for advanced analysis, and proactively surfaces insights and trends — making data analysis accessible to non-technical users.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-excel",
    sourceLabel: "Microsoft Learn – Use Copilot in Excel"
  },
  {
    id: 165, domain: "Copilot & Agent Administration",
    question: "What is 'Microsoft Copilot in PowerPoint' specifically designed to help with?",
    options: ["Only adjusting slide transitions and animations", "Creating presentations from a prompt or existing document, transforming existing decks (reorganize slides, add speaker notes, apply themes), and summarizing presentation content", "Converting PowerPoint to video format", "Managing PowerPoint file version history"],
    correct: 1,
    explanation: "Copilot in PowerPoint creates entire presentations from a brief prompt or existing Word document, adds speaker notes, applies branding themes, reorganizes slide structure, and summarizes long presentations. It dramatically reduces time spent on presentation creation.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-powerpoint",
    sourceLabel: "Microsoft Learn – Use Copilot in PowerPoint"
  },
  {
    id: 166, domain: "Copilot & Agent Administration",
    question: "What does the 'Microsoft 365 Copilot Dashboard' in Microsoft Viva Insights provide?",
    options: ["Individual employee productivity scores for performance reviews", "Aggregated, privacy-protected analytics on Copilot usage, adoption trends, and measured productivity impact — without exposing individual-level data", "Real-time monitoring of all Copilot interactions", "A configuration tool for Copilot features and policies"],
    correct: 1,
    explanation: "The Copilot Dashboard in Viva Insights provides HR and business leaders with aggregated (minimum group sizes for privacy), anonymized insights into Copilot adoption, feature usage, and measured time savings. Individual-level data is not exposed, protecting employee privacy.",
    source: "https://learn.microsoft.com/en-us/viva/insights/org-team-insights/copilot-dashboard",
    sourceLabel: "Microsoft Learn – Microsoft Copilot Dashboard"
  },
  {
    id: 167, domain: "Copilot & Agent Administration",
    question: "What is 'grounding' in the context of Microsoft 365 Copilot?",
    options: ["Limiting the token length of prompts", "Connecting Copilot to an organization's actual data via Microsoft Graph so responses are based on real, specific, up-to-date organizational content rather than general training data alone", "Fine-tuning the underlying AI model on company data", "Storing Copilot chat history in Azure Blob Storage"],
    correct: 1,
    explanation: "Grounding connects Copilot to the organization's specific data via Microsoft Graph. When a user asks a question, Copilot retrieves relevant content from the user's emails, files, meetings, and chats, combining this grounded context with the LLM's language capabilities for accurate, relevant answers.",
    source: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-graph-basics",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot and Microsoft Graph basics"
  },
  {
    id: 168, domain: "Copilot & Agent Administration",
    question: "What is the 'Copilot Lab' in Microsoft 365?",
    options: ["A testing environment for Copilot agents before deployment", "A resource within Microsoft 365 apps that provides curated, ready-to-use prompts and prompt inspiration to help users discover effective ways to use Copilot in their work", "A developer environment for building Copilot extensions", "A data analysis tool built into Copilot"],
    correct: 1,
    explanation: "The Copilot Lab is an in-app resource accessible from Copilot in Microsoft 365 apps. It provides curated prompt examples organized by task and role, helping users learn prompt engineering and discover use cases for Copilot in their specific work context.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/use-cases-scenarios",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot use cases and scenarios"
  },
  {
    id: 169, domain: "Copilot & Agent Administration",
    question: "What is 'Microsoft Copilot Studio' previously known as?",
    options: ["Microsoft Bot Framework", "Power Virtual Agents", "Azure Bot Service", "Microsoft AI Studio"],
    correct: 1,
    explanation: "Microsoft Copilot Studio was formerly known as Power Virtual Agents. It was rebranded in late 2023 to reflect its expanded role as the platform for building custom Microsoft 365 Copilot agents and extensions, not just standalone chatbots.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio",
    sourceLabel: "Microsoft Learn – What is Microsoft Copilot Studio?"
  },
  {
    id: 170, domain: "Copilot & Agent Administration",
    question: "What is a 'knowledge source' in Microsoft Copilot Studio?",
    options: ["A document that explains how to use Copilot Studio", "A connected data repository (SharePoint site, website, uploaded files, or Dataverse) that an agent searches to generate responses to user questions", "The AI model underlying the Copilot agent", "A compliance document that governs agent behavior"],
    correct: 1,
    explanation: "Knowledge sources are the data repositories that an agent uses to answer questions. You connect SharePoint sites, public websites, uploaded files, or Dataverse tables as knowledge sources. The agent uses generative AI to search these sources and synthesize answers.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint",
    sourceLabel: "Microsoft Learn – Add knowledge to your agent"
  },
  {
    id: 171, domain: "Copilot & Agent Administration",
    question: "What is the 'System prompt' (instructions) in a Copilot Studio agent?",
    options: ["The first message a user sends to the agent", "Predefined instructions that define the agent's persona, purpose, scope, and behavioral guidelines — the 'character' of the agent", "A prompt template users must fill in before asking questions", "Technical configuration for the agent's API connections"],
    correct: 1,
    explanation: "The system prompt / instructions define the agent's behavior: who it is (persona), what it helps with (purpose and scope), what it should not discuss (boundaries), what tone to use, and how to handle situations outside its knowledge. Well-crafted instructions are critical to agent quality.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-authoring-overview",
    sourceLabel: "Microsoft Learn – Author topics in Microsoft Copilot Studio"
  },
  {
    id: 172, domain: "Copilot & Agent Administration",
    question: "What is the difference between a 'topic' and 'generative answers' in Copilot Studio?",
    options: ["They are the same feature with different names", "Topics are explicit conversation paths authored for specific intents; generative answers handle any question not matched by a topic by searching knowledge sources using generative AI", "Topics are for business users; generative answers for developers only", "Generative answers replace topics entirely in new agents"],
    correct: 1,
    explanation: "Topics are pre-authored conversation flows for known, specific intents (e.g., 'How do I reset my password?' triggers a specific step-by-step response). Generative answers handle the 'long tail' of questions that don't match predefined topics, by searching connected knowledge sources.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-conversations",
    sourceLabel: "Microsoft Learn – Generative answers overview"
  },
  {
    id: 173, domain: "Copilot & Agent Administration",
    question: "What is a 'Power Automate flow' in the context of Copilot Studio agents?",
    options: ["A workflow that automatically approves Copilot agent deployments", "An automation workflow connected to an agent that performs backend actions when triggered by the agent — such as creating records, sending emails, or updating databases", "A flow that monitors agent performance metrics", "An automated process that updates agent knowledge sources"],
    correct: 1,
    explanation: "Power Automate flows can be connected to Copilot Studio agents as actions. When a user asks the agent to perform an action (e.g., 'Create a support ticket for this issue'), the agent triggers a Power Automate flow that executes the action in a connected system.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-use-flow",
    sourceLabel: "Microsoft Learn – Use Power Automate with Copilot Studio"
  },
  {
    id: 174, domain: "Copilot & Agent Administration",
    question: "What does 'agent escalation to a human' mean in Copilot Studio?",
    options: ["The agent reports a user to the compliance team", "A designed handoff mechanism where the agent transfers the conversation to a live human agent when it cannot answer a question or when the user requests human assistance", "Escalating agent deployment approval to senior administrators", "Reporting an agent malfunction to Microsoft Support"],
    correct: 1,
    explanation: "Agent escalation is a crucial feature for customer-facing agents. When the bot reaches its limits (cannot answer the question, user is frustrated, or situation requires human judgment), it can seamlessly hand off the conversation to a human agent via integration with Dynamics 365 Customer Service or other platforms.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-hand-off",
    sourceLabel: "Microsoft Learn – Hand off to a live agent"
  },
  {
    id: 175, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft 365 Copilot adoption score' and what does it measure?",
    options: ["The number of Copilot licenses purchased vs. used", "An organizational-level metric tracking how deeply Copilot is integrated into daily work patterns, measuring active usage, feature diversity, and frequency of use across M365 apps", "The cost savings achieved through Copilot usage", "Individual employee scores for Copilot usage"],
    correct: 1,
    explanation: "The Copilot adoption metrics in the M365 admin center and Viva Insights Copilot Dashboard measure adoption depth — how many users are active, which apps they use Copilot in, how frequently, and what features they engage with. This helps drive adoption strategy.",
    source: "https://learn.microsoft.com/en-us/viva/insights/org-team-insights/copilot-dashboard",
    sourceLabel: "Microsoft Learn – Microsoft Copilot Dashboard"
  },
  {
    id: 176, domain: "Copilot & Agent Administration",
    question: "What is an 'Agent Store' in Microsoft Teams?",
    options: ["A SharePoint library containing agent documentation", "A curated gallery within Teams where users can discover and add Microsoft-built, partner-built, and organization-approved custom Copilot agents", "A marketplace for purchasing Copilot Studio licenses", "A storage location for agent conversation logs"],
    correct: 1,
    explanation: "The Agent Store in Teams is where users discover and add agents. It includes Microsoft-built agents (like the M365 Copilot agent), partner agents from the Microsoft ecosystem, and organization-specific custom agents approved by IT administrators.",
    source: "https://learn.microsoft.com/en-us/microsoftteams/platform/bots/how-to/add-power-virtual-agents-bot-to-teams",
    sourceLabel: "Microsoft Learn – Add agents to Microsoft Teams"
  },
  {
    id: 177, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft Copilot for Security' product and how does it differ from Copilot in Microsoft 365?",
    options: ["They are the same product used in different contexts", "Copilot for Security is a separate AI product specifically for security operations — helping security analysts investigate incidents, analyze threats, and generate security reports using natural language", "Copilot for Security is only for Microsoft Defender configuration", "Copilot for Security replaces Microsoft Sentinel"],
    correct: 1,
    explanation: "Microsoft Copilot for Security (now Microsoft Security Copilot) is a standalone AI product for security operations teams. It integrates with Microsoft Defender, Sentinel, Intune, and Entra to help analysts investigate threats, reverse-engineer malware, and generate incident reports — separate from the M365 productivity Copilot.",
    source: "https://learn.microsoft.com/en-us/copilot/security/microsoft-security-copilot",
    sourceLabel: "Microsoft Learn – What is Microsoft Copilot for Security?"
  },
  {
    id: 178, domain: "Copilot & Agent Administration",
    question: "What is 'Microsoft Copilot for Microsoft 365' fundamentally based on?",
    options: ["A proprietary Microsoft language model built from scratch", "Large Language Models (LLMs) from OpenAI (GPT-4 and successors), Microsoft Graph for data access, and Microsoft 365 apps as the user interface layer", "The same AI model used in Bing search", "A rules-based AI system without neural networks"],
    correct: 1,
    explanation: "Microsoft 365 Copilot is built on three layers: OpenAI's LLMs (GPT-4 and successors) for language understanding and generation, Microsoft Graph for grounded access to organizational data, and Microsoft 365 apps as the interface where users interact. These three components together form the Copilot architecture.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot overview"
  },
  {
    id: 179, domain: "Copilot & Agent Administration",
    question: "What is the 'Copilot for Microsoft 365' data residency commitment?",
    options: ["All Copilot data is stored only in the United States", "Copilot for Microsoft 365 processes and stores data in the same geographic boundaries as the customer's existing Microsoft 365 data residency configuration", "Copilot data is stored in a separate Microsoft datacenter for security", "Data residency cannot be configured for Copilot"],
    correct: 1,
    explanation: "Copilot for Microsoft 365 respects the tenant's existing data residency configuration. If your M365 tenant is configured for EU data residency, Copilot prompts and responses are also processed and stored within the EU boundary — consistent with the organization's compliance commitments.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-privacy",
    sourceLabel: "Microsoft Learn – Data residency for Microsoft 365 Copilot"
  },
  {
    id: 180, domain: "Copilot & Agent Administration",
    question: "What is a 'plugin' in the context of Microsoft 365 Copilot extensibility?",
    options: ["A browser extension that adds Copilot to non-Microsoft websites", "An extension that adds new capabilities to Copilot — connecting to external data sources or actions (like querying a CRM or creating a Jira ticket) using standardized interfaces", "A user interface customization for the Copilot experience", "A premium add-on that extends Copilot's language capabilities"],
    correct: 1,
    explanation: "Plugins extend Copilot's capabilities by connecting to external services and data. They allow Copilot to query real-time data (e.g., stock prices, CRM records) or perform actions (create tickets, send messages) in third-party systems — all via natural language from the user.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-message-extension-bot",
    sourceLabel: "Microsoft Learn – Extend Microsoft 365 Copilot"
  },
  {
    id: 181, domain: "Copilot & Agent Administration",
    question: "What is 'Microsoft 365 Copilot for Sales' (formerly Viva Sales)?",
    options: ["A Copilot feature for creating sales presentations in PowerPoint", "An AI-powered sales companion that integrates CRM data (Salesforce, Dynamics 365) into Teams and Outlook — helping salespeople draft customer emails, summarize CRM records, and prepare for meetings", "A licensing option that includes Copilot for sales teams at a discount", "A Teams app for managing sales pipeline in Teams channels"],
    correct: 1,
    explanation: "Copilot for Sales (formerly Viva Sales) is a role-based Copilot that integrates CRM data into the M365 workflow. Sales reps can get AI-generated email drafts populated with customer data, meeting summaries that auto-update CRM, and deal insights — without leaving Outlook or Teams.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/sales/introduction",
    sourceLabel: "Microsoft Learn – What is Microsoft 365 Copilot for Sales?"
  },
  {
    id: 182, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft 365 Copilot adoption framework' recommended by Microsoft?",
    options: ["Deploy to all users simultaneously for maximum impact", "A phased approach: identify champions → pilot with early adopters → measure and iterate → scale deployment → continuously improve based on usage data and feedback", "Deploy only to senior management first", "Deploy to all departments simultaneously but with limited features"],
    correct: 1,
    explanation: "Microsoft recommends a phased Copilot adoption approach: identify and train champions who drive adoption; pilot with engaged early adopters; measure productivity gains and gather feedback; address friction points; then scale to the broader organization with champion support and continuous improvement.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/adoption/get-started",
    sourceLabel: "Microsoft Learn – Get started with Microsoft 365 Copilot adoption"
  },
  {
    id: 183, domain: "Copilot & Agent Administration",
    question: "What does 'Microsoft Copilot for Microsoft 365' specifically NOT do?",
    options: ["Draft emails in Outlook", "Summarize Teams meetings", "Train or update the underlying AI model with your organization's data", "Answer questions about documents in SharePoint"],
    correct: 2,
    explanation: "Copilot does NOT use customer data (prompts, responses, or M365 content) to train or update the underlying AI foundation models. Microsoft has explicitly committed to this in their Product Terms. The AI model is trained by Microsoft using curated datasets, not customer organizational data.",
    source: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy",
    sourceLabel: "Microsoft Learn – Data, Privacy, and Security for Microsoft 365 Copilot"
  },
  {
    id: 184, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft Copilot for Microsoft 365' license management best practice for pilot deployments?",
    options: ["Assign licenses to all users at once to avoid confusion", "Use Microsoft Entra ID group-based licensing to assign Copilot licenses to a pilot group, allowing easy expansion by adding users to the group without individual license management", "Manually assign licenses one by one to control the rollout", "Start with external users before internal employees"],
    correct: 1,
    explanation: "Group-based licensing is the recommended approach for Copilot pilots. Create a security group for Copilot pilot users, assign the Copilot license to the group, and add/remove users from the group to control who has access. This scales easily without manual license management.",
    source: "https://learn.microsoft.com/en-us/entra/identity/users/licensing-groups-assign",
    sourceLabel: "Microsoft Learn – Assign licenses to a group in Microsoft Entra ID"
  },
  {
    id: 185, domain: "Copilot & Agent Administration",
    question: "What is 'Microsoft Copilot for Microsoft 365' tenant-wide disablement and why might an organization use it?",
    options: ["Permanently removing Copilot from the tenant with no ability to re-enable", "Temporarily disabling all Copilot features for all users at the tenant level — useful during security investigations, compliance reviews, or data governance remediation before a safe rollout", "Disabling specific Copilot features while keeping others active", "Removing Copilot from specific Microsoft 365 apps only"],
    correct: 1,
    explanation: "Administrators can disable Copilot at the tenant level while governance, oversharing remediation, or compliance reviews are completed. This prevents premature access to Copilot before the organization's data security posture is ready, avoiding unintended data exposure via AI.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-enable-users",
    sourceLabel: "Microsoft Learn – Enable users for Microsoft 365 Copilot"
  },
  {
    id: 186, domain: "Copilot & Agent Administration",
    question: "What is 'Microsoft Copilot for Service' (formerly Dynamics 365 Copilot)?",
    options: ["Copilot for IT service management and helpdesk", "An AI assistant for customer service agents that summarizes case history, suggests knowledge article responses, generates email drafts, and provides real-time guidance during customer interactions", "A standalone customer portal with AI chatbot capabilities", "A Copilot feature for managing SharePoint Help sites"],
    correct: 1,
    explanation: "Copilot for Service brings AI assistance to customer service agents in Dynamics 365 Customer Service and Teams — summarizing case history, surfacing relevant knowledge articles, drafting responses, and providing real-time coaching during calls. It reduces average handle time and improves customer satisfaction.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/service/introduction",
    sourceLabel: "Microsoft Learn – What is Microsoft 365 Copilot for Service?"
  },
  {
    id: 187, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft 365 Copilot license' cost model (monthly subscription)?",
    options: ["A one-time purchase per device", "A per-user, per-month subscription add-on on top of a qualifying Microsoft 365 base license, with no minimum commitment on pay-as-you-go plans", "A flat organizational fee regardless of user count", "Included automatically with Microsoft 365 E5 at no additional cost"],
    correct: 1,
    explanation: "Microsoft 365 Copilot is a per-user, per-month add-on license. It requires a qualifying M365 base license. Monthly subscriptions have a per-seat price; pay-as-you-go bills per message/interaction for flexibility. E5 does not automatically include Copilot — it is always an additional purchase.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-requirements",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot requirements and licensing"
  },
  {
    id: 188, domain: "Copilot & Agent Administration",
    question: "What governance controls does an administrator have over which users can interact with specific Copilot agents in an organization?",
    options: ["No controls — all users can access all deployed agents", "Administrators can assign agents to specific users, groups, or the entire organization via the M365 admin center; access can be restricted using Microsoft Entra ID groups", "Only Global Administrators can interact with Copilot agents", "Agent access is controlled exclusively via SharePoint permissions"],
    correct: 1,
    explanation: "Administrators control agent availability via the M365 admin center — making agents available to all users, specific groups, or blocking them. This governance capability ensures agents with access to sensitive knowledge sources are only available to authorized personnel.",
    source: "https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps",
    sourceLabel: "Microsoft Learn – Manage agents for Microsoft 365 Copilot"
  },
  {
    id: 189, domain: "Copilot & Agent Administration",
    question: "What is 'Microsoft Copilot for Microsoft 365' retention and how are prompts and responses stored?",
    options: ["All prompts and responses are stored permanently in Microsoft's AI servers", "Copilot interactions (prompts and responses) are stored in the user's Microsoft 365 account data (Exchange Online mailbox) and are subject to the organization's existing retention policies and eDiscovery", "Prompts are never stored — they are processed and immediately discarded", "Responses are stored in Azure AI Studio, separate from M365"],
    correct: 1,
    explanation: "Copilot prompts and responses are stored in the user's Exchange Online mailbox (hidden folder). This means existing retention policies, legal holds, and eDiscovery capabilities apply to Copilot interaction history just like email — providing compliance consistency.",
    source: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy",
    sourceLabel: "Microsoft Learn – Data, Privacy, and Security for Microsoft 365 Copilot"
  },
  {
    id: 190, domain: "Copilot & Agent Administration",
    question: "What is an 'autonomous agent' in the context of Microsoft 365 and Copilot Studio?",
    options: ["An agent that requires explicit user approval for every action", "An agent that can independently execute multi-step tasks over time without requiring a human to trigger each step — it can monitor conditions and take actions based on triggers", "A Copilot feature that generates autonomous responses in Teams", "An agent with no knowledge sources, relying entirely on the AI model"],
    correct: 1,
    explanation: "Autonomous agents (part of Microsoft's 'agentic AI' direction) can execute multi-step business processes independently. For example, an autonomous agent might monitor a SharePoint library for new contracts, extract key terms, update a CRM record, and notify the responsible account manager — all without human intervention per step.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-generative-actions",
    sourceLabel: "Microsoft Learn – Use generative AI in Microsoft Copilot Studio"
  },
  {
    id: 191, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft Copilot for Microsoft 365' impact on meeting culture?",
    options: ["Copilot requires all meetings to be recorded to function", "Copilot can reduce meeting fatigue by automatically providing summaries and action items, allowing users who missed a meeting to catch up without attending a recording review session", "Copilot replaces the need for all meetings", "Copilot only works in scheduled calendar meetings, not ad hoc calls"],
    correct: 1,
    explanation: "One of the highest-impact Copilot use cases is meeting intelligence. Copilot generates meeting summaries with decisions and action items, allows 'catch up' on missed meetings, and can answer 'what did I miss?' — reducing the need to watch full recordings and making asynchronous work more effective.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-teams-meetings",
    sourceLabel: "Microsoft Learn – Use Copilot in Microsoft Teams meetings"
  },
  {
    id: 192, domain: "Copilot & Agent Administration",
    question: "What is the 'responsible use of Copilot' requirement for organizations deploying it?",
    options: ["Organizations must purchase additional liability insurance when using Copilot", "Organizations must review and agree to Microsoft's Acceptable Use Policy, ensure appropriate governance controls are in place, and train users on responsible AI use — including understanding Copilot's limitations and verifying outputs", "Only certified Microsoft partners can deploy Copilot", "Organizations must appoint a dedicated 'Copilot officer' role"],
    correct: 1,
    explanation: "Responsible use of Copilot requires organizations to implement governance (data access controls, oversharing remediation), train users to verify AI outputs (Copilot can make mistakes), and adhere to Microsoft's Acceptable Use Policy. Copilot is a productivity tool, not an infallible oracle.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-overview",
    sourceLabel: "Microsoft Learn – Responsible use of AI"
  },
  {
    id: 193, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft Copilot' experience on mobile devices (iOS and Android)?",
    options: ["Copilot is only available on Windows desktop devices", "Copilot is available in the Microsoft 365 mobile app, Teams mobile, and the dedicated Microsoft Copilot app — providing AI assistance on mobile for drafting, summarizing, and answering questions on the go", "Mobile Copilot only works on iOS, not Android", "Mobile Copilot is limited to voice interactions only"],
    correct: 1,
    explanation: "Microsoft 365 Copilot is available across devices — Windows, Mac, iOS, and Android. The Teams mobile app, Microsoft 365 app, and dedicated Copilot mobile app all provide Copilot capabilities. Users can access AI assistance from any device with their M365 account.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot overview"
  },
  {
    id: 194, domain: "Copilot & Agent Administration",
    question: "How does an administrator manage the deletion of Copilot conversation history for GDPR data subject requests?",
    options: ["Microsoft automatically handles all GDPR deletion requests for Copilot data", "Since Copilot prompts and responses are stored in the user's Exchange mailbox, administrators can use eDiscovery Content Search and hard-delete to remove specific Copilot interactions for GDPR compliance", "GDPR data subject requests do not apply to AI-generated content", "Administrators can delete Copilot history via the M365 admin center in a single click"],
    correct: 1,
    explanation: "Copilot interaction history stored in Exchange Online is subject to the same GDPR processes as email. For data subject erasure requests, administrators use Content Search to locate Copilot interactions for the specific user, then hard-delete them. The same workflow used for email erasure applies.",
    source: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy",
    sourceLabel: "Microsoft Learn – Data, Privacy, and Security for Microsoft 365 Copilot"
  },
  {
    id: 195, domain: "Copilot & Agent Administration",
    question: "What is 'Microsoft Copilot for Microsoft 365' semantic indexing?",
    options: ["A standard text search index of all M365 content", "An AI-powered indexing capability that understands the meaning and context of content (not just keywords), enabling Copilot to find relevant information even when the exact words don't match", "A SharePoint search configuration for Copilot", "An indexing feature that logs all Copilot interactions"],
    correct: 1,
    explanation: "Microsoft 365 Copilot uses semantic indexing — an AI-powered content understanding layer that enables meaning-based search. This allows Copilot to find relevant documents about 'quarterly performance' even if they are titled 'Q3 results' — understanding conceptual relationships beyond keyword matching.",
    source: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-graph-basics",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot and Microsoft Graph basics"
  },
  {
    id: 196, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft Copilot' prompt context window and why does it matter?",
    options: ["The window of time in which a prompt can be submitted before timing out", "The amount of text (tokens) that Copilot can process in a single interaction — including the user's prompt, retrieved context from M365, conversation history, and the system prompt; larger context enables more comprehensive answers", "The visual window in the Teams interface where Copilot responses appear", "The size of the document Copilot can analyze at once"],
    correct: 1,
    explanation: "The context window determines how much information Copilot can consider at once. A larger context window allows Copilot to analyze longer documents, longer conversation histories, and more retrieved content simultaneously — enabling more nuanced and comprehensive responses.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot overview"
  },
  {
    id: 197, domain: "Copilot & Agent Administration",
    question: "What organizational readiness assessment should be performed before deploying Microsoft 365 Copilot at scale?",
    options: ["Only a license inventory check", "A comprehensive readiness assessment covering: license eligibility, data governance (oversharing, sensitivity labels), identity security (MFA coverage, Conditional Access), user training plan, and success metrics definition", "A technical performance test of network bandwidth", "An assessment of whether users have modern enough devices"],
    correct: 1,
    explanation: "Copilot readiness involves multiple dimensions: license eligibility (qualifying base + Copilot add-on), data readiness (oversharing assessment, DLP policies, sensitivity labels), identity readiness (MFA, Conditional Access), change management (training, champions), and success metrics. Microsoft provides a Copilot Readiness Assessment tool.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/adoption/get-started",
    sourceLabel: "Microsoft Learn – Get started with Microsoft 365 Copilot adoption"
  },
  {
    id: 198, domain: "Copilot & Agent Administration",
    question: "What is the difference between 'Microsoft Copilot' (consumer) and 'Microsoft 365 Copilot' (enterprise)?",
    options: ["They are exactly the same product with different branding", "Microsoft Copilot (consumer/free) uses Bing and public web data; Microsoft 365 Copilot (enterprise, requires M365 license) additionally accesses organizational M365 data via Microsoft Graph and provides enterprise security, privacy, and compliance guarantees", "Microsoft 365 Copilot does not use internet data at all", "Microsoft Copilot is more powerful than Microsoft 365 Copilot"],
    correct: 1,
    explanation: "Consumer Microsoft Copilot (free or Copilot Pro) works with Bing and public data. Microsoft 365 Copilot adds the organizational data layer via Microsoft Graph — emails, files, meetings, chats — with full enterprise security, data residency, compliance, and privacy commitments not present in the consumer version.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot overview"
  },
  {
    id: 199, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft Foundry' (formerly Azure AI Foundry) and how does it relate to Microsoft 365 Copilot?",
    options: ["Microsoft Foundry is the same product as Copilot Studio", "Microsoft Foundry is a platform for enterprise AI development — organizations can build custom AI applications using foundation models, fine-tuning, and RAG. The AB-900 exam references it as the platform underlying Azure OpenAI Service capabilities", "Microsoft Foundry manages Microsoft 365 tenant configurations", "Microsoft Foundry is a data backup service for Copilot interactions"],
    correct: 1,
    explanation: "Microsoft Foundry (formerly Azure AI Foundry) is Microsoft's enterprise AI development platform — providing access to foundation models (GPT-4, Phi, etc.), tools for fine-tuning, grounding, and deploying AI applications. It underpins Azure OpenAI Service and is referenced in the AB-900 study guide as the model catalog platform.",
    source: "https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-azure-ai-foundry",
    sourceLabel: "Microsoft Learn – What is Azure AI Foundry?"
  },
  {
    id: 200, domain: "Copilot & Agent Administration",
    question: "What is the 'Azure OpenAI Service' model catalog and why is it relevant for the AB-900 exam?",
    options: ["A catalog of Azure cloud storage options", "A curated collection of AI foundation models (GPT-4, Phi, Mistral, Llama, etc.) available through Azure AI Foundry for organizations to deploy, evaluate, and customize for enterprise AI applications — forming the AI backbone accessible via Microsoft 365 Copilot and agents", "A list of Microsoft 365 Copilot features available per license", "A catalog of Copilot Studio templates"],
    correct: 1,
    explanation: "The Azure AI Foundry model catalog provides access to Microsoft's and third-party AI foundation models. For the AB-900 exam, understanding that Azure OpenAI Service provides the GPT models underlying Copilot, and that organizations can leverage the model catalog for custom AI solutions via Azure AI Foundry, is relevant knowledge.",
    source: "https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/models",
    sourceLabel: "Microsoft Learn – Model catalog in Azure AI Foundry"
  },
  {
    id: 201, domain: "Copilot & Agent Administration",
    question: "What is Microsoft's recommended approach when Copilot returns an incorrect or surprising answer?",
    options: ["Ignore the error — Copilot is always accurate", "Verify the answer against the cited source, provide feedback via the thumbs down button, and never rely on Copilot for high-stakes decisions without verification", "Report the error to Microsoft Support immediately", "Disable Copilot for the entire organization"],
    correct: 1,
    explanation: "Microsoft explicitly advises users to verify Copilot outputs, especially for important decisions. Copilot can hallucinate. The feedback mechanism (thumbs up/down) helps Microsoft improve the model. For high-stakes decisions (legal, financial, medical), human verification of AI outputs is always required.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot overview"
  },
  {
    id: 202, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft 365 Copilot' interaction with Microsoft Teams channels specifically designed to do?",
    options: ["Automatically moderate all Teams channel conversations", "Summarize channel conversations, surface relevant threads, answer questions about past channel discussions, and help compose channel posts — enabling users to stay on top of high-volume channels", "Enforce Teams channel policies automatically", "Archive old channel messages to SharePoint"],
    correct: 1,
    explanation: "Copilot in Teams channels helps users manage information overload. It summarizes what's been discussed in a channel, surfaces relevant conversations to specific queries, and helps compose thoughtful responses — enabling participation in many channels without reading every message.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-teams",
    sourceLabel: "Microsoft Learn – Use Copilot in Microsoft Teams"
  },
  {
    id: 203, domain: "Copilot & Agent Administration",
    question: "What is the recommended way to evaluate the success of a Microsoft 365 Copilot deployment?",
    options: ["Count the number of Copilot licenses purchased", "Define clear success metrics before deployment (time saved, user satisfaction, task completion rates), measure via Copilot Analytics and Viva Insights, gather user feedback, and compare against baseline productivity measures", "Track only whether users open Copilot at least once", "Evaluate success based on IT support ticket volume reduction only"],
    correct: 1,
    explanation: "Microsoft recommends pre-defining success metrics: time saved per task type (email management, document drafting), user satisfaction scores, feature adoption rates, and business outcomes. Copilot Analytics, Viva Insights Copilot Dashboard, and user surveys provide the measurement data.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/adoption/measure-success",
    sourceLabel: "Microsoft Learn – Measure success of Microsoft 365 Copilot"
  },
  {
    id: 204, domain: "Copilot & Agent Administration",
    question: "What specific capabilities does 'Microsoft 365 Copilot in SharePoint' provide?",
    options: ["Automatically migrates SharePoint sites to modern templates", "Enables users to ask questions about SharePoint site content, summarize pages and document libraries, discover relevant content, and generate new pages from a brief description using Copilot Pages", "Manages SharePoint site permissions and access controls", "Provides SharePoint administration guidance to site owners"],
    correct: 1,
    explanation: "Copilot in SharePoint allows users to converse with their site content — asking questions about documents in a library, summarizing pages, and generating new SharePoint pages via Copilot Pages. It brings AI-assisted content discovery and creation directly into the SharePoint experience.",
    source: "https://learn.microsoft.com/en-us/sharepoint/copilot-in-sharepoint",
    sourceLabel: "Microsoft Learn – Copilot in SharePoint"
  },
  {
    id: 205, domain: "Copilot & Agent Administration",
    question: "What does 'Microsoft Copilot for Microsoft 365' do with the information a user asks about?",
    options: ["Shares the user's queries with other users in the organization to improve collective knowledge", "Processes the query in the context of the signed-in user's permissions — accessing only what that user can access — and generates a response that is visible only to that user", "Stores queries in a shared organizational knowledge base automatically", "Sends queries to Microsoft for manual review before responding"],
    correct: 1,
    explanation: "Copilot interactions are private to the individual user. The response is based on data that user can access, and the query and response are stored in the user's own Exchange mailbox. Other users, including administrators, cannot see the content of another user's Copilot interactions by default.",
    source: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy",
    sourceLabel: "Microsoft Learn – Data, Privacy, and Security for Microsoft 365 Copilot"
  },
  {
    id: 206, domain: "Copilot & Agent Administration",
    question: "What is 'Microsoft 365 Copilot in OneNote' designed to help with?",
    options: ["Enforcing OneNote sharing permissions", "Generating notes from a prompt, summarizing existing notes, creating to-do lists and plans from meeting notes, and answering questions about the content of a notebook", "Converting OneNote notebooks to Word documents", "Managing OneNote notebook version history"],
    correct: 1,
    explanation: "Copilot in OneNote helps users organize and act on their notes — generating structured notes from a brief prompt, summarizing long notes, creating action plans from meeting notes, and answering questions about notebook content. It transforms raw notes into actionable, organized information.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-onenote",
    sourceLabel: "Microsoft Learn – Use Copilot in OneNote"
  },
  {
    id: 207, domain: "Copilot & Agent Administration",
    question: "What is the 'Agent builder' feature in Microsoft Teams and SharePoint?",
    options: ["A way to build Microsoft Entra conditional access policies", "A simplified interface within Teams and SharePoint (no Copilot Studio required) for creating basic Copilot agents scoped to specific SharePoint sites or Teams channels — targeting non-developers", "A feature that builds Teams channel structures automatically", "A tool that builds SharePoint site templates from AI descriptions"],
    correct: 1,
    explanation: "Agent builder in Teams and SharePoint allows non-developers to create basic Copilot agents without opening Copilot Studio. You select knowledge sources (SharePoint libraries), write instructions, and publish — making agent creation accessible to power users and site owners for department-specific use cases.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-builder",
    sourceLabel: "Microsoft Learn – Use agent builder to create agents"
  },
  {
    id: 208, domain: "Copilot & Agent Administration",
    question: "What does the 'Microsoft 365 Copilot for Microsoft 365' 'Think Deeper' feature do?",
    options: ["Increases the response time for more accurate answers", "Enables Copilot to spend more time reasoning through complex, multi-step problems before responding — improving accuracy on tasks requiring logical deduction, analysis, and planning", "Accesses additional premium knowledge sources", "Enables Copilot to access the user's entire email history"],
    correct: 1,
    explanation: "Think Deeper (available in Microsoft 365 Copilot) uses extended reasoning to tackle complex problems that require careful, step-by-step analysis. Instead of generating an immediate response, Copilot works through the problem more thoroughly — improving quality on complex analytical and planning tasks.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot overview"
  },
  {
    id: 209, domain: "Copilot & Agent Administration",
    question: "What is 'Copilot for Microsoft 365' enterprise compliance archiving?",
    options: ["A separate archiving solution that must be purchased for Copilot compliance", "Copilot prompts and responses are automatically stored in Exchange Online hidden folders and subject to the same compliance archiving, retention policies, eDiscovery, and audit capabilities as all M365 content — no separate setup required", "Copilot interactions must be manually exported to a compliance archive", "Only licensed compliance administrators can access Copilot interaction history"],
    correct: 1,
    explanation: "By default, Copilot interactions are stored in the user's Exchange mailbox hidden folder (SubstrateHolds) and inherit all existing compliance capabilities: retention policies, legal holds, eDiscovery searches, DLP scanning, and Purview audit logs apply automatically.",
    source: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy",
    sourceLabel: "Microsoft Learn – Data, Privacy, and Security for Microsoft 365 Copilot"
  },
  {
    id: 210, domain: "Copilot & Agent Administration",
    question: "What is the minimum requirement for testing a Copilot agent in Copilot Studio before publishing?",
    options: ["The agent must be reviewed by Microsoft before testing can begin", "Copilot Studio provides a built-in test panel where developers can test conversations with the agent immediately during authoring — no publishing step required for internal testing", "A separate test environment tenant must be provisioned", "Testing requires a minimum of 10 knowledge source documents"],
    correct: 1,
    explanation: "Copilot Studio includes an integrated test panel (test canvas) on the right side of the authoring interface. Developers can immediately test the agent's responses to different inputs as they build, without needing to publish. This enables rapid iteration during development.",
    source: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-test-bot",
    sourceLabel: "Microsoft Learn – Test your agent in Microsoft Copilot Studio"
  },
  {
    id: 211, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft 365 Copilot' for 'Frontline Workers' and what licenses apply?",
    options: ["Copilot is not available for frontline workers in any license tier", "Microsoft 365 Copilot is available for frontline workers via specific F-series licenses (Microsoft 365 F1/F3) as the qualifying base license, plus the Copilot add-on — providing AI capabilities for desk-less workers", "Frontline workers get Copilot automatically with Teams Essentials", "Copilot for frontline workers is a separate product called Copilot Field"],
    correct: 1,
    explanation: "Microsoft 365 F1 and F3 licenses are qualifying base licenses for Copilot for frontline workers. This extends AI productivity tools to factory workers, retail associates, healthcare frontline staff, and other desk-less worker roles who use Teams on mobile devices.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-requirements",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot licensing requirements"
  },
  {
    id: 212, domain: "Copilot & Agent Administration",
    question: "What Copilot administrative setting controls whether Copilot can reference content from meetings the user attended but didn't personally create notes for?",
    options: ["Microsoft Graph content access settings", "The 'Allow Copilot to process meeting transcripts' setting in the Teams admin center, which controls whether Copilot can reference transcribed meeting content beyond basic metadata", "Exchange Online mailbox access settings", "SharePoint content discovery settings"],
    correct: 1,
    explanation: "Copilot's ability to reference meeting content depends on Teams transcription being enabled and the Copilot meeting processing setting. Administrators can control whether Copilot can process and reference meeting transcripts for summarization and Q&A — balancing functionality with privacy considerations.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-enable-users",
    sourceLabel: "Microsoft Learn – Enable and manage Microsoft 365 Copilot"
  },
  {
    id: 213, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft Copilot for Microsoft 365' relationship to Microsoft Teams Intelligent Recap?",
    options: ["They are competing products for the same function", "Intelligent Recap is powered by Copilot AI — providing AI-generated meeting summaries, AI notes, follow-up tasks, and AI-generated chapters for recorded meetings in Teams Premium", "Intelligent Recap is a separate product not related to Copilot", "Intelligent Recap only works with Teams Rooms hardware"],
    correct: 1,
    explanation: "Teams Premium's Intelligent Recap uses AI (related to Copilot technology) to provide enhanced meeting features: AI-generated chapters and highlights in recordings, AI notes, action items, and follow-up suggestions. It's part of the broader Microsoft AI meeting intelligence story.",
    source: "https://learn.microsoft.com/en-us/microsoftteams/teams-premium-overview",
    sourceLabel: "Microsoft Learn – Microsoft Teams Premium overview"
  },
  {
    id: 214, domain: "Copilot & Agent Administration",
    question: "What is the 'Copilot Academy' in Microsoft Viva Learning?",
    options: ["A Microsoft-run training program for Copilot developers", "A curated learning content set within Viva Learning specifically designed to help employees build Copilot skills — available to organizations with Microsoft 365 Copilot licenses", "An AI-powered learning recommendation engine", "A certification program for Copilot administrators"],
    correct: 1,
    explanation: "Copilot Academy in Viva Learning provides structured, curated training content to help employees learn how to use Microsoft 365 Copilot effectively in their specific role and workflows. It supports the change management aspect of Copilot adoption.",
    source: "https://learn.microsoft.com/en-us/viva/learning/copilot-academy",
    sourceLabel: "Microsoft Learn – Copilot Academy in Microsoft Viva Learning"
  },
  {
    id: 215, domain: "Copilot & Agent Administration",
    question: "What is the role of 'Microsoft Copilot champions' in an organization's Copilot adoption strategy?",
    options: ["Champions are Microsoft employees assigned to assist organizations", "Champions are enthusiastic internal employees who are trained on Copilot first, share knowledge with colleagues, provide peer support, and drive grassroots adoption within their departments — the human element of change management", "Champions are IT administrators who configure Copilot policies", "Champions formally approve Copilot agents before deployment"],
    correct: 1,
    explanation: "The Copilot champion program is a key adoption lever. Champions are selected from business units, trained early, and empowered to evangelize Copilot use cases relevant to their team's work. Peer influence is far more effective than top-down mandates for technology adoption.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/adoption/champion-program",
    sourceLabel: "Microsoft Learn – Copilot champion program"
  },
  {
    id: 216, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft Copilot for Microsoft 365' multi-language support?",
    options: ["Copilot only works in English", "Copilot supports multiple languages — users can write prompts in one language and receive responses in the same language, with Copilot automatically detecting language and responding accordingly", "Copilot requires a language pack purchase for each non-English language", "Language selection must be configured by the administrator, not the user"],
    correct: 1,
    explanation: "Microsoft 365 Copilot supports dozens of languages. Users can interact with Copilot in their preferred language — writing prompts in Dutch, Spanish, Chinese, Arabic, or other supported languages — and Copilot responds in the same language. This is based on the underlying LLM's multilingual capabilities.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-languages",
    sourceLabel: "Microsoft Learn – Supported languages for Microsoft 365 Copilot"
  },
  {
    id: 217, domain: "Copilot & Agent Administration",
    question: "What is an 'environment' in Power Platform context, and why does it matter for Copilot agent governance?",
    options: ["The physical office location where agents are used", "A container that separates data, apps, flows, and agents — with its own security, DLP policies, and access controls. Administrators use environments to isolate production agents from development/test agents", "The operating system on which Copilot Studio runs", "The Microsoft 365 tenant in which Copilot agents are deployed"],
    correct: 1,
    explanation: "Power Platform environments provide logical separation for governance. A 'production' environment has strict DLP policies and controlled access; 'development' environments allow experimentation. Administrators can control who can create agents in which environment, preventing ungoverned agent proliferation.",
    source: "https://learn.microsoft.com/en-us/power-platform/admin/environments-overview",
    sourceLabel: "Microsoft Learn – Environments overview in Power Platform"
  },
  {
    id: 218, domain: "Copilot & Agent Administration",
    question: "What is 'Microsoft 365 Copilot for Administrators' specifically about in the context of the AB-900 exam?",
    options: ["A special edition of Copilot only for IT administrators", "The administrative tasks covered in AB-900: licensing Copilot, configuring what features are available, managing agent deployments, monitoring usage/adoption, handling governance (oversharing, permissions), and ensuring compliance for Copilot usage", "A Copilot feature that automates IT administration tasks", "A training program for Microsoft 365 administrators"],
    correct: 1,
    explanation: "AB-900 focuses on the administrative aspects of Copilot: assigning and managing licenses, enabling/disabling features, approving and deploying agents, monitoring adoption via Copilot Analytics, managing governance risks (oversharing, permissions), and ensuring compliance (DSPM for AI, retention policies for Copilot data).",
    source: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-900",
    sourceLabel: "Microsoft Learn – AB-900 Study Guide"
  },
  {
    id: 219, domain: "Copilot & Agent Administration",
    question: "What is the 'Copilot Control System' in Microsoft 365?",
    options: ["A hardware controller for Microsoft Teams Rooms", "A set of administrative controls across M365, Purview, and Entra that allows IT to configure what Copilot can access, what users can do with Copilot, and how Copilot data is governed", "An AI system that controls how Copilot responds to prompts", "A Power Platform flow that controls agent behavior"],
    correct: 1,
    explanation: "The Copilot Control System is the umbrella term for the governance controls available to administrators: M365 admin center settings (features on/off, web search), Purview controls (DSPM for AI, DLP for Copilot outputs, Communication Compliance), Entra controls (Conditional Access, permissions), and SharePoint governance (oversharing remediation).",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot overview"
  },
  {
    id: 220, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft 365 Copilot' interaction model — how does a typical Copilot interaction work end to end?",
    options: ["User types prompt → Microsoft servers store the prompt → AI generates response from internet data → Response delivered to user", "User types prompt → Prompt is sent to Microsoft 365 Copilot service → Copilot orchestrates retrieval from Microsoft Graph (user's accessible M365 data) and generates response using LLM → Response delivered to user and stored in Exchange mailbox", "User speaks a command → Copilot transcribes and processes → Response is stored in SharePoint", "User types prompt → Prompt is shared with all users in the tenant for collaborative AI responses"],
    correct: 1,
    explanation: "The Copilot interaction flow: (1) User prompt is sent to Copilot service, (2) Copilot uses Microsoft Graph to retrieve relevant data the user can access, (3) The LLM (GPT-4) combines the retrieved context with the prompt to generate a grounded response, (4) Response is returned to the user and stored in their Exchange mailbox for compliance.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-overview",
    sourceLabel: "Microsoft Learn – How Microsoft 365 Copilot works"
  },
  {
    id: 221, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft 365 Copilot' for 'Microsoft Loop' integration?",
    options: ["Loop is being replaced by Copilot Pages", "Copilot in Loop can generate Loop components from a prompt, summarize Loop workspace content, and help draft collaborative content — with Copilot Pages being the output format for Copilot Business Chat results that teams can co-edit", "Loop only works with Copilot for Teams meetings", "Copilot in Loop requires a separate Loop license beyond M365 Copilot"],
    correct: 1,
    explanation: "Microsoft Loop (collaborative workspace app) integrates deeply with Copilot. Copilot Pages (a Loop-based format) is created when users want to persist and collaborate on Copilot Business Chat responses. Copilot in Loop can generate components from prompts and help teams co-create content.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/copilot-pages-overview",
    sourceLabel: "Microsoft Learn – Copilot Pages overview"
  },
  {
    id: 222, domain: "Copilot & Agent Administration",
    question: "What does an administrator need to verify AFTER assigning Microsoft 365 Copilot licenses to ensure users can actually use Copilot?",
    options: ["Nothing additional — assigning the license is sufficient", "Verify that Copilot features are enabled for the tenant, users have qualifying base licenses, the organizational accounts are active, and (for meeting features) transcription is enabled in Teams", "Verify that users have upgraded to Windows 11", "Verify that users have a minimum 1 Gbps internet connection"],
    correct: 1,
    explanation: "License assignment alone is not always sufficient. Administrators should also verify: Copilot is enabled at tenant level (not disabled by admin), users have qualifying base licenses, accounts are active (not blocked), and specific features like meeting intelligence require Teams transcription to be enabled in meeting policies.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-enable-users",
    sourceLabel: "Microsoft Learn – Enable users for Microsoft 365 Copilot"
  },
  {
    id: 223, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft 365 Copilot' for 'Planner' and 'Project' integration?",
    options: ["Copilot can only view Planner tasks, not create or modify them", "Copilot in Planner and Project can help create project plans from a brief description, generate task breakdowns, suggest timelines, summarize project status, and surface at-risk tasks", "Copilot replaces the need for Microsoft Project entirely", "Planner and Project are not supported by Microsoft 365 Copilot"],
    correct: 1,
    explanation: "Copilot in Planner (now part of Microsoft Planner which includes the Planner and Project capabilities) can generate project plans from prompts, break work down into tasks, suggest timelines, and provide intelligent summaries of project health — helping project managers work more efficiently.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot overview"
  },
  {
    id: 224, domain: "Copilot & Agent Administration",
    question: "What is 'responsible disclosure' in the context of Microsoft 365 Copilot issues?",
    options: ["The process for users to share Copilot responses publicly", "The recommended process for reporting security vulnerabilities or serious Copilot concerns to Microsoft through appropriate channels (Microsoft Security Response Center), rather than public disclosure that could cause harm before a fix is available", "Disclosing Copilot usage to the organization's board of directors", "Sharing Copilot prompts with team members for review"],
    correct: 1,
    explanation: "Responsible disclosure (coordinated vulnerability disclosure) is the security industry practice of reporting security flaws to the vendor (Microsoft's Security Response Center) privately, giving them time to develop and deploy a fix before public disclosure. This applies to any discovered security issues in Copilot.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-privacy",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot security"
  },
  {
    id: 225, domain: "Copilot & Agent Administration",
    question: "What is the 'AB-900 exam' topic of 'managing prompts including saving, sharing, scheduling, and deleting' referring to?",
    options: ["Managing PowerShell scripts called 'prompts'", "The prompt management features in Microsoft 365 Copilot that allow users to save effective prompts for reuse, share prompts with colleagues, schedule prompts (in supported workflows), and delete prompts they no longer need", "Managing email templates in Outlook called 'prompts'", "Scheduling Copilot to run automatically at set times"],
    correct: 1,
    explanation: "Prompt management in M365 Copilot includes saving prompts to a personal library (so you don't have to retype them), sharing useful prompts with team members, and deleting outdated prompts. Administrators can manage organization-wide prompt libraries and scheduled prompts for recurring tasks.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/prompt-gallery-overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot prompt gallery and management"
  },
  {
    id: 226, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft Copilot' approach to 'sensitive topics' and content safety?",
    options: ["Copilot has no content filtering and generates all requested content", "Copilot includes multiple layers of content safety: Azure AI Content Safety filters, responsible AI guidelines built into the system prompt, and user feedback mechanisms — preventing generation of harmful content, misinformation, or inappropriate material", "Content safety is managed entirely by the organization's DLP policies", "Copilot only filters content that violates copyright law"],
    correct: 1,
    explanation: "Copilot's content safety is multi-layered: Azure AI Content Safety filters prevent harmful content generation, Responsible AI guidelines embedded in the system prompt guide appropriate behavior, the model is trained to decline harmful requests, and user feedback (thumbs down) helps continuous improvement.",
    source: "https://learn.microsoft.com/en-us/azure/ai-services/content-safety/overview",
    sourceLabel: "Microsoft Learn – Azure AI Content Safety overview"
  },
  {
    id: 227, domain: "Copilot & Agent Administration",
    question: "What is 'Microsoft Copilot in Dynamics 365' and how does it relate to Microsoft 365 Copilot?",
    options: ["They are the same product deployed in different contexts", "Copilot in Dynamics 365 brings AI capabilities to business applications like Sales, Customer Service, Finance, and Supply Chain — using the same underlying LLM technology but grounded in Dynamics 365 data rather than M365 data", "Dynamics 365 Copilot requires a separate Azure subscription", "Copilot in Dynamics 365 is only available for on-premises deployments"],
    correct: 1,
    explanation: "Copilot in Dynamics 365 brings AI to business processes — sales forecasting, customer service case summarization, financial anomaly detection, supply chain optimization. It uses the same OpenAI LLM foundation but is grounded in Dynamics 365 CRM/ERP data and business workflows rather than M365 productivity data.",
    source: "https://learn.microsoft.com/en-us/dynamics365/copilot/copilot-for-dynamics365",
    sourceLabel: "Microsoft Learn – Copilot in Dynamics 365"
  },
  {
    id: 228, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft Copilot' experience in terms of 'citation and source transparency'?",
    options: ["Copilot never shows which documents it used to generate a response", "Copilot typically provides citations linking to the specific documents, emails, or other M365 sources it used to generate an answer — enabling users to verify accuracy and access the full source material", "Citations are only shown to administrators, not end users", "Citations are only provided when the user explicitly requests them"],
    correct: 1,
    explanation: "Transparency through citations is a key Responsible AI principle implemented in Copilot. When Copilot uses specific documents, emails, or other M365 content to generate a response, it cites those sources with links. Users can click through to verify the source material — reducing blind trust in AI outputs.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot overview"
  },
  {
    id: 229, domain: "Copilot & Agent Administration",
    question: "What does it mean when the AB-900 exam asks about 'determining which Copilot features can be enabled or disabled'?",
    options: ["Configuring AI model parameters in the background", "Understanding the administrative controls available in the M365 admin center to turn specific Copilot features on or off for the entire tenant or specific user groups — such as web access, specific app integrations, or agent availability", "Setting programming toggles in Copilot Studio", "Enabling or disabling Copilot for individual documents"],
    correct: 1,
    explanation: "AB-900 candidates must know the governance levers available: enabling/disabling Copilot's web search, controlling which agents are available, enabling/disabling Copilot in specific apps, and setting tenant-level feature availability. These controls are in the M365 admin center under 'Copilot' settings.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-enable-users",
    sourceLabel: "Microsoft Learn – Enable and manage Microsoft 365 Copilot"
  },
  {
    id: 230, domain: "Copilot & Agent Administration",
    question: "What is 'SharePoint Copilot readiness' in the context of preparing for Microsoft 365 Copilot deployment?",
    options: ["Installing a special SharePoint component for Copilot", "Ensuring SharePoint content is well-governed before Copilot accesses it: conducting oversharing assessments, applying sensitivity labels to sensitive content, remediating broad permissions, and enabling SharePoint Advanced Management features", "Upgrading SharePoint to the latest version", "Configuring SharePoint search for optimal Copilot performance"],
    correct: 1,
    explanation: "SharePoint readiness for Copilot means: (1) run Data Access Governance reports to identify oversharing, (2) remediate broad permissions, (3) apply sensitivity labels to sensitive documents, (4) consider Restricted Site Access for highly sensitive sites, and (5) use DSPM for AI to understand the risk profile. This is the most critical preparation step.",
    source: "https://learn.microsoft.com/en-us/sharepoint/sharepoint-copilot-best-practices",
    sourceLabel: "Microsoft Learn – SharePoint and Microsoft 365 Copilot best practices"
  },
  {
    id: 231, domain: "Copilot & Agent Administration",
    question: "What is the role of 'Microsoft Power Platform DLP policies' in governing Copilot agents?",
    options: ["Power Platform DLP is the same as Purview DLP — there is no distinction", "Power Platform DLP policies control which connectors Copilot Studio agents can use — classifying connectors as Business (allowed for enterprise data), Non-Business (personal data, kept separate), or Blocked (disallowed entirely)", "Power Platform DLP policies govern the text content of agent responses", "Power Platform DLP prevents agents from accessing SharePoint"],
    correct: 1,
    explanation: "Power Platform DLP policies are a governance mechanism for agents built in Copilot Studio. They classify API connectors — for example, blocking agents from using personal email connectors alongside business data connectors, preventing data mixing. This ensures appropriate data boundary management for agents.",
    source: "https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention",
    sourceLabel: "Microsoft Learn – Data loss prevention policies in Power Platform"
  },
  {
    id: 232, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft 365 Copilot' approach to 'fairness' as a Responsible AI principle?",
    options: ["Ensuring all users get equal numbers of Copilot interactions per day", "Building the AI system to minimize bias — ensuring Copilot's outputs do not unfairly advantage or disadvantage users based on protected characteristics, and testing models against fairness benchmarks", "Charging the same price per Copilot interaction regardless of user tier", "Giving all users equal access to all Copilot features"],
    correct: 1,
    explanation: "Fairness in Copilot means the AI system should not reflect or amplify biases in training data that could lead to outputs unfairly advantaging or disadvantaging people based on characteristics like race, gender, or nationality. Microsoft continuously evaluates and mitigates bias in Copilot models.",
    source: "https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai",
    sourceLabel: "Microsoft Learn – Responsible AI: Fairness"
  },
  {
    id: 233, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft 365 Copilot' approach to 'inclusiveness' as a Responsible AI principle?",
    options: ["Ensuring Copilot is available in all Microsoft 365 license tiers at the same price", "Designing Copilot to empower everyone — including people with disabilities — by making AI capabilities accessible through assistive technologies, multiple interaction modalities, and multi-language support", "Including all employees in the Copilot pilot program simultaneously", "Making Copilot available to non-profit organizations at no cost"],
    correct: 1,
    explanation: "Inclusiveness means Copilot is designed to be accessible and beneficial to everyone. This includes screen reader compatibility, multi-language support, support for different interaction styles, and ensuring that AI capabilities don't exclude or disadvantage users with disabilities or those in non-English-speaking regions.",
    source: "https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai",
    sourceLabel: "Microsoft Learn – Responsible AI: Inclusiveness"
  },
  {
    id: 234, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft 365 Copilot' approach to 'transparency' as a Responsible AI principle in practice?",
    options: ["Microsoft publishes all Copilot training data publicly", "Providing users with explanations of what Copilot is, what it can and cannot do, citing sources for responses, acknowledging uncertainty, showing what data was used, and publishing responsible AI documentation — so users can make informed decisions about trusting AI outputs", "Showing all Copilot prompts to administrators in real-time", "Requiring users to read the AI terms of service before each interaction"],
    correct: 1,
    explanation: "Transparency in Copilot includes: clear communication that it is AI (not human), citing sources so users can verify, acknowledging when Copilot is uncertain, Microsoft's published Responsible AI documentation and transparency notes, and user-facing explanations of how Copilot works and uses data.",
    source: "https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai",
    sourceLabel: "Microsoft Learn – Responsible AI: Transparency"
  },
  {
    id: 235, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft 365 Copilot' approach to 'reliability and safety' as a Responsible AI principle?",
    options: ["Guaranteeing 100% uptime for Copilot services", "Designing Copilot to perform reliably according to its intended purpose, behave safely and predictably, resist manipulation (prompt injection), and fail gracefully — while continuously monitoring for unexpected behaviors and safety issues", "Ensuring Copilot only responds during business hours", "Limiting Copilot to pre-approved response templates for safety"],
    correct: 1,
    explanation: "Reliability & Safety means Copilot behaves as intended consistently, handles unexpected inputs gracefully, resists adversarial prompt injection attempts, and is continuously monitored for safety issues. Microsoft implements red-teaming, safety evaluations, and ongoing monitoring to maintain these standards.",
    source: "https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai",
    sourceLabel: "Microsoft Learn – Responsible AI: Reliability and safety"
  },
  {
    id: 236, domain: "Copilot & Agent Administration",
    question: "What is the 'Microsoft 365 Copilot' approach to 'privacy and security' as a Responsible AI principle?",
    options: ["All Copilot data is public by default to improve the AI model", "Protecting user and organizational data through encryption, tenant isolation, permission enforcement via Microsoft Graph, no use of customer data for model training, and providing administrative controls over data access and retention", "Privacy settings can only be configured by Microsoft, not customers", "Privacy protection only applies to data stored outside Microsoft 365"],
    correct: 1,
    explanation: "Privacy & Security in Copilot: data encrypted in transit and at rest, tenant isolation (no cross-tenant data access), Microsoft Graph permission enforcement (user sees only what they can access), no use of customer data for model training, admin controls over features and data retention, and compliance with global privacy regulations.",
    source: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy",
    sourceLabel: "Microsoft Learn – Data, Privacy, and Security for Microsoft 365 Copilot"
  },
  {
    id: 237, domain: "Copilot & Agent Administration",
    question: "What is the relationship between the AB-900 exam and the broader AB certification series?",
    options: ["AB-900 is the most advanced exam in the AB series", "AB-900 is the foundational entry-level certification in the AB series, providing a prerequisite understanding of M365 Copilot administration before pursuing more advanced certifications like AB-730 (AI Business Professional) or AB-100 (Agentic AI Business Solutions Architect)", "AB-900 is only for developers, not administrators", "The AB series is unrelated to Microsoft 365 — it covers Azure services only"],
    correct: 1,
    explanation: "AB-900 is the fundamentals-level starting point of Microsoft's AB certification series. It validates foundational knowledge of M365 Copilot administration. More advanced certifications in the series (AB-730 for business professionals, AB-731 for leaders, AB-100 for architects) build on these foundations.",
    source: "https://learn.microsoft.com/en-us/credentials/certifications/copilot-and-agent-administration-fundamentals/",
    sourceLabel: "Microsoft Learn – Microsoft 365 Certified: Copilot and Agent Administration Fundamentals"
  },
  {
    id: 238, domain: "Copilot & Agent Administration",
    question: "What is the single most important governance action an organization should take before deploying Microsoft 365 Copilot to ensure both security and value from day one?",
    options: ["Purchase the maximum number of Copilot licenses possible", "Conduct a comprehensive data access governance review — identifying and remediating oversharing in SharePoint, applying sensitivity labels to sensitive content, verifying permissions are principle-of-least-privilege, and running DSPM for AI to understand the data risk profile", "Disable all external sharing before enabling Copilot", "Train all users on prompt engineering before they receive licenses"],
    correct: 1,
    explanation: "The foundational governance action is data access review and remediation. If permissions are misconfigured (oversharing, legacy broad access), Copilot will surface that missharing at scale. Remediating permissions, labeling sensitive data, and understanding the AI risk profile via DSPM for AI ensures Copilot is both useful and secure from day one.",
    source: "https://learn.microsoft.com/en-us/sharepoint/sharepoint-copilot-best-practices",
    sourceLabel: "Microsoft Learn – SharePoint and Microsoft 365 Copilot best practices"
  },

  // ── DOMAIN 2 EXPANSION: Data Protection & Governance (Q239–Q258) ─────────
  {
    id: 239, domain: "Data Protection & Governance",
    question: "What is the difference between Microsoft Purview Audit (Standard) and Audit (Premium)?",
    options: ["They are identical — only the name differs", "Audit Standard retains logs for 90 days; Audit Premium retains for up to 1 year (or 10 years with add-on), and adds high-value events like MailItemsAccessed for forensic investigation", "Audit Premium is only available for SharePoint workloads", "Audit Standard requires an E5 license; Premium is included in E3"],
    correct: 1,
    explanation: "Audit Standard is included in most M365 plans and retains logs for 90 days. Audit Premium (E5 or add-on) extends retention to 1 year by default (10-year add-on available) and adds crucial forensic events such as MailItemsAccessed, which shows exactly which emails were read — critical for breach investigations.",
    source: "https://learn.microsoft.com/en-us/purview/audit-solutions-overview",
    sourceLabel: "Microsoft Learn – Microsoft Purview Audit solutions overview"
  },
  {
    id: 240, domain: "Data Protection & Governance",
    question: "What is the difference between Microsoft Purview eDiscovery (Standard) and eDiscovery (Premium)?",
    options: ["Standard supports legal holds; Premium adds custodian management, advanced analytics, and review sets for large-scale litigation", "Premium only adds a faster search engine over Standard", "Standard is for admins only; Premium is for legal teams", "There is no functional difference — only the price differs"],
    correct: 0,
    explanation: "eDiscovery Standard provides content search and legal holds. eDiscovery Premium adds custodian management, communication workflows, review sets (with deduplication, email threading, and near-duplicate detection), and advanced analytics — designed for large, complex litigation matters.",
    source: "https://learn.microsoft.com/en-us/purview/ediscovery-overview",
    sourceLabel: "Microsoft Learn – Microsoft Purview eDiscovery overview"
  },
  {
    id: 241, domain: "Data Protection & Governance",
    question: "What is auto-labeling in Microsoft Purview Information Protection and how does it differ from manual labeling?",
    options: ["Auto-labeling and manual labeling apply the same labels with the same user experience", "Auto-labeling automatically applies sensitivity labels to content based on sensitive information types or trainable classifiers — without requiring user action; manual labeling requires users to choose the label themselves", "Auto-labeling only works in Exchange Online", "Manual labeling is always more accurate than auto-labeling"],
    correct: 1,
    explanation: "Auto-labeling policies scan content in Exchange, SharePoint, and OneDrive and apply labels automatically when sensitive content is detected (e.g., credit card numbers, passport data). This removes the dependency on users to correctly label content, ensuring consistent classification at scale.",
    source: "https://learn.microsoft.com/en-us/purview/apply-sensitivity-label-automatically",
    sourceLabel: "Microsoft Learn – Apply a sensitivity label automatically"
  },
  {
    id: 242, domain: "Data Protection & Governance",
    question: "What is a DLP policy simulation mode and why is it useful?",
    options: ["Simulation mode is a training mode for compliance officers", "Simulation mode (test mode) lets you run a DLP policy without enforcing it — showing which content would be matched and which users would be affected, so you can tune the policy before enforcement", "Simulation mode encrypts matched content instead of blocking it", "Simulation mode is only available in Microsoft Defender, not Purview"],
    correct: 1,
    explanation: "Before enforcing a DLP policy, running it in simulation/test mode shows policy matches in Activity Explorer without notifying users or blocking actions. This lets administrators validate that the policy catches the right content and does not generate false positives before switching to enforcement.",
    source: "https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp",
    sourceLabel: "Microsoft Learn – Learn about data loss prevention"
  },
  {
    id: 243, domain: "Data Protection & Governance",
    question: "What are Information Barriers in Microsoft Purview and when are they used?",
    options: ["Information Barriers are firewall rules that block external email", "Policies that restrict communication and collaboration between specific groups of users — used in financial services to prevent conflicts of interest (e.g., preventing research analysts from communicating with investment bankers)", "A feature that encrypts messages between two departments", "A compliance report that shows unauthorized data flows"],
    correct: 1,
    explanation: "Information Barriers (IB) prevent specific groups from communicating or collaborating in Teams, SharePoint, and OneDrive. Common use cases: financial institutions separating investment banking from research, law firms separating conflicting client teams, or regulated industries with Chinese wall requirements.",
    source: "https://learn.microsoft.com/en-us/purview/information-barriers-solution-overview",
    sourceLabel: "Microsoft Learn – Information barriers in Microsoft Purview"
  },
  {
    id: 244, domain: "Data Protection & Governance",
    question: "What is records management in Microsoft Purview and how does it differ from regular retention?",
    options: ["Records management and retention are identical features", "Records management (via retention labels marked as 'records') locks content so it cannot be edited or deleted during the retention period — providing immutable, legally defensible records. Regular retention preserves content but allows editing.", "Records management only applies to physical documents", "Records management permanently deletes content immediately after the retention period"],
    correct: 1,
    explanation: "When a retention label is configured as a 'record', the item becomes immutable — users cannot edit or delete it. A 'regulatory record' is even stricter: administrators cannot change or remove the label. This is essential for legal, compliance, and regulatory requirements where immutability must be provable.",
    source: "https://learn.microsoft.com/en-us/purview/records-management",
    sourceLabel: "Microsoft Learn – Learn about records management"
  },
  {
    id: 245, domain: "Data Protection & Governance",
    question: "What is the Activity Explorer in Microsoft Purview used for?",
    options: ["Monitoring Microsoft Entra sign-in activity", "Providing a timeline view of labeled content activities — showing when labels were applied, changed, or removed; when DLP policies were triggered; and file activities like downloads, prints, and copies to USB", "Running eDiscovery searches across M365 workloads", "Configuring DLP policies based on detected activity patterns"],
    correct: 1,
    explanation: "Activity Explorer gives compliance administrators a unified view of data-related activities: sensitivity label changes, DLP policy matches, endpoint activities (print, USB copy, upload to cloud), and more. It is read-only — used for monitoring and investigation, not policy configuration.",
    source: "https://learn.microsoft.com/en-us/purview/data-classification-activity-explorer",
    sourceLabel: "Microsoft Learn – Get started with Activity Explorer"
  },
  {
    id: 246, domain: "Data Protection & Governance",
    question: "What is the Microsoft Purview Data Explorer (Content Explorer) used for?",
    options: ["Managing SharePoint site collections and document libraries", "Showing administrators exactly which items are classified with specific sensitivity labels or contain specific sensitive information types — providing item-level visibility into classified content across M365", "Creating and editing sensitivity labels", "Searching audit logs for compliance investigations"],
    correct: 1,
    explanation: "Content Explorer (Data Explorer) lets compliance administrators drill down to see individual files and emails that have specific sensitivity labels or contain sensitive information types. It requires specific roles (Content Explorer List Viewer / Content Viewer) and provides item-level visibility into the data landscape.",
    source: "https://learn.microsoft.com/en-us/purview/data-classification-content-explorer",
    sourceLabel: "Microsoft Learn – Get started with Content Explorer"
  },
  {
    id: 247, domain: "Data Protection & Governance",
    question: "What is an Insider Risk Management policy template and give an example of when you would use the 'Data theft by departing users' template?",
    options: ["Templates are only decorative — all IRM policies have the same rules", "Policy templates are pre-configured rule sets for common insider risk scenarios. 'Data theft by departing users' detects high-volume downloads, USB transfers, and cloud uploads by users with an upcoming resignation date from the HR connector", "The 'Data theft' template is only available in E3 licenses", "Templates require a SOC team to manually review every alert"],
    correct: 1,
    explanation: "Insider Risk Management templates are pre-built policy configurations for common scenarios. The 'Data theft by departing users' template combines HR signals (resignation or termination date) with risky activity indicators (bulk downloads, USB activity) to detect potential data exfiltration in the critical period before an employee leaves.",
    source: "https://learn.microsoft.com/en-us/purview/insider-risk-management-policies",
    sourceLabel: "Microsoft Learn – Create and manage insider risk management policies"
  },
  {
    id: 248, domain: "Data Protection & Governance",
    question: "How does Communication Compliance help with regulatory compliance in financial services?",
    options: ["It encrypts all employee communications automatically", "It scans Teams, Exchange, and Viva Engage communications for policy violations — such as regulatory language violations, conflicts of interest, or offensive content — and routes flagged communications to reviewers", "It blocks employees from using personal email addresses on corporate devices", "It creates automatic retention policies for all communications"],
    correct: 1,
    explanation: "In regulated industries (financial services, healthcare, legal), Communication Compliance monitors employee communications for compliance policy violations — detecting regulatory language violations, potential market manipulation, or offensive content. Reviewers investigate flagged communications and take remediation actions.",
    source: "https://learn.microsoft.com/en-us/purview/communication-compliance",
    sourceLabel: "Microsoft Learn – Learn about Communication Compliance"
  },
  {
    id: 249, domain: "Data Protection & Governance",
    question: "What does Microsoft Purview Compliance Manager primarily help an organization do?",
    options: ["Enforce DLP policies across the tenant", "Assess and improve compliance posture against regulatory standards (ISO 27001, GDPR, NIST) by providing a compliance score, pre-built assessments, recommended improvement actions, and evidence collection tools", "Monitor user activity for insider risk", "Classify data based on sensitivity"],
    correct: 1,
    explanation: "Compliance Manager provides a compliance score based on how well an organization meets controls for selected regulatory frameworks. It maps Microsoft-managed controls and customer-managed controls, provides step-by-step improvement actions, and lets teams track progress toward compliance goals.",
    source: "https://learn.microsoft.com/en-us/purview/compliance-manager",
    sourceLabel: "Microsoft Learn – Microsoft Purview Compliance Manager"
  },
  {
    id: 250, domain: "Data Protection & Governance",
    question: "What is the purpose of sensitivity labels on Microsoft Teams meetings and channels?",
    options: ["They encrypt all files uploaded to the channel", "They control meeting and channel privacy settings — such as preventing external participants, enforcing lobby settings, and restricting recording — based on the sensitivity of the information being discussed", "They apply retention policies to meeting recordings automatically", "They block guests from viewing meeting chats"],
    correct: 1,
    explanation: "Sensitivity labels can be applied to Teams meetings (controlling recording, transcript, lobby, and external participant settings) and Teams channels (controlling membership, guest access, and sharing). This extends the information protection framework into real-time collaboration.",
    source: "https://learn.microsoft.com/en-us/purview/sensitivity-labels-meetings",
    sourceLabel: "Microsoft Learn – Use sensitivity labels to protect calendar items and Teams meetings"
  },
  {
    id: 251, domain: "Data Protection & Governance",
    question: "What is Microsoft Purview Data Loss Prevention (DLP) for endpoint devices and what does it protect against?",
    options: ["DLP for endpoints only monitors email activity on managed devices", "Endpoint DLP extends DLP policies to Windows and macOS devices — detecting and optionally blocking sensitive data activities such as copying to USB drives, printing, uploading to non-approved cloud services, or sharing via Bluetooth", "Endpoint DLP replaces Microsoft Defender for Endpoint", "Endpoint DLP only works when the device is connected to the corporate network"],
    correct: 1,
    explanation: "Endpoint DLP uses the Microsoft Purview client (built into Windows 10/11 and available for macOS) to monitor and control what happens to sensitive data on the device itself — not just in cloud services. It can block copy to USB, print to non-approved printers, or upload to consumer cloud storage, even offline.",
    source: "https://learn.microsoft.com/en-us/purview/endpoint-dlp-learn-about",
    sourceLabel: "Microsoft Learn – Learn about Endpoint data loss prevention"
  },
  {
    id: 252, domain: "Data Protection & Governance",
    question: "What is event-based retention in Microsoft Purview and give a typical use case?",
    options: ["Retention that triggers based on a fixed calendar date set by the administrator", "Retention that starts when a specific business event occurs — such as an employee leaving the company (triggering retention of their files for 7 years) or a contract expiring (triggering retention of contract documents)", "Retention that automatically deletes content after a user-defined event", "Retention triggered when a DLP policy match is detected"],
    correct: 1,
    explanation: "Event-based retention starts the retention clock when a real-world event occurs rather than when the content was created or last modified. Use cases: employee offboarding (retain HR files for N years from termination date), product discontinuation (retain product documentation for N years from end-of-life date), or contract expiration.",
    source: "https://learn.microsoft.com/en-us/purview/event-driven-retention",
    sourceLabel: "Microsoft Learn – Start retention when an event occurs"
  },
  {
    id: 253, domain: "Data Protection & Governance",
    question: "How does Microsoft Purview protect Copilot interaction data (prompts and responses)?",
    options: ["Copilot interaction data is stored outside of M365 and is not subject to Purview policies", "Copilot prompts and responses are stored as interaction history in Exchange Online mailboxes and are subject to the same retention, eDiscovery, audit, and DLP policies as other M365 content", "Copilot interactions are automatically deleted after 30 days and cannot be retained", "Copilot interaction data can only be accessed by Microsoft support"],
    correct: 1,
    explanation: "Microsoft 365 Copilot interaction history is stored in the user's Exchange Online mailbox (hidden folder). This means it falls under the organization's existing Purview policies: retention labels can preserve or delete it, eDiscovery can search it, audit logs record it, and DLP policies can scan responses for sensitive content.",
    source: "https://learn.microsoft.com/en-us/purview/ai-microsoft-purview",
    sourceLabel: "Microsoft Learn – Microsoft Purview data security for Microsoft Copilot"
  },
  {
    id: 254, domain: "Data Protection & Governance",
    question: "What is the role of sensitivity labels in protecting content generated by Microsoft 365 Copilot?",
    options: ["Sensitivity labels cannot be applied to Copilot-generated content", "Copilot inherits and respects the sensitivity labels of the source documents it references — ensuring that generated content (drafts, summaries) carries appropriate protection based on the most sensitive source", "Copilot automatically assigns the highest possible label to all generated content", "Sensitivity labels for Copilot output are configured separately from standard labels"],
    correct: 1,
    explanation: "When Copilot generates content based on labeled source documents, it can inherit and suggest the highest sensitivity label from those sources. For example, if Copilot summarizes a document labeled 'Confidential', the resulting summary should also be labeled 'Confidential'. This is configurable via label policy settings.",
    source: "https://learn.microsoft.com/en-us/purview/sensitivity-labels-office-apps",
    sourceLabel: "Microsoft Learn – Sensitivity labels in Office apps"
  },
  {
    id: 255, domain: "Data Protection & Governance",
    question: "What is the Microsoft Purview Insider Risk Management 'sequence detection' capability?",
    options: ["Detecting a single high-risk activity by a user", "Identifying a pattern of multiple lower-risk activities that together indicate a higher-risk scenario — for example, a user downloading files, then emailing them externally, then deleting browser history", "Automatically blocking a user after a single policy violation", "Generating daily risk reports for all users in the tenant"],
    correct: 1,
    explanation: "Sequence detection recognizes that individual activities may seem innocuous in isolation but indicate risk when combined. A user browsing job sites, then bulk downloading files, then copying to USB creates a risk sequence. Detecting sequences reduces false positives while catching sophisticated insider threats.",
    source: "https://learn.microsoft.com/en-us/purview/insider-risk-management-policies",
    sourceLabel: "Microsoft Learn – Insider risk management policies"
  },
  {
    id: 256, domain: "Data Protection & Governance",
    question: "What is 'adaptive protection' in Microsoft Purview and how does it connect Insider Risk Management with DLP?",
    options: ["Adaptive protection is a manual process where admins assign DLP policies to specific users", "Adaptive protection automatically applies stricter DLP controls to users identified as elevated risk by Insider Risk Management — for example, blocking USB copy for a user with a high insider risk score", "Adaptive protection replaces conditional access policies", "Adaptive protection is only available for Exchange Online workloads"],
    correct: 1,
    explanation: "Adaptive Protection creates a feedback loop between Insider Risk Management (which assesses user risk levels) and DLP (which enforces data controls). Users flagged as elevated or critical risk automatically receive more restrictive DLP policies — without manual administrator intervention — creating dynamic, risk-based data protection.",
    source: "https://learn.microsoft.com/en-us/purview/insider-risk-management-adaptive-protection",
    sourceLabel: "Microsoft Learn – Adaptive protection in Microsoft Purview"
  },
  {
    id: 257, domain: "Data Protection & Governance",
    question: "What are the key capabilities of Microsoft Purview DSPM for AI (Data Security Posture Management) specifically for Copilot readiness?",
    options: ["DSPM for AI only generates reports — it cannot recommend or trigger remediation", "DSPM for AI discovers which sensitive data Copilot can access, identifies oversharing risks, surfaces recommendations (like applying labels or restricting site access), and provides an AI-specific risk dashboard to track remediation progress", "DSPM for AI only monitors Azure OpenAI workloads, not Microsoft 365 Copilot", "DSPM for AI is a replacement for Compliance Manager"],
    correct: 1,
    explanation: "DSPM for AI provides an AI-specific risk dashboard showing: which sensitive files (by label or sensitive info type) are reachable by Copilot, which sites have oversharing issues, user activities with AI tools, and prioritized recommendations. Administrators can directly trigger remediation actions like restricting site access from within the dashboard.",
    source: "https://learn.microsoft.com/en-us/purview/ai-microsoft-purview",
    sourceLabel: "Microsoft Learn – Microsoft Purview data security and compliance for Microsoft Copilot"
  },
  {
    id: 258, domain: "Data Protection & Governance",
    question: "What is the principle of 'least privilege access' and how does it apply to SharePoint before a Copilot deployment?",
    options: ["Least privilege means users should only have one license assigned", "Least privilege means users should only have the minimum permissions needed for their role. Before Copilot, organizations must audit SharePoint permissions to ensure files are not accessible to more people than necessary — because Copilot will surface any data a user can access", "Least privilege only applies to administrator accounts, not regular users", "Least privilege is enforced automatically by Microsoft Entra and requires no manual configuration"],
    correct: 1,
    explanation: "Principle of least privilege (PoLP) means granting users only the access they need for their job. In the context of Copilot readiness, this means auditing SharePoint: removing 'Everyone' sharing links, reviewing broad group memberships, and using site-level access controls. Copilot respects permissions — so proper scoping of permissions is the primary data security control.",
    source: "https://learn.microsoft.com/en-us/sharepoint/sharepoint-copilot-best-practices",
    sourceLabel: "Microsoft Learn – Prepare your SharePoint environment for Microsoft 365 Copilot"
  },

  // ── GAP TOPICS: SharePoint Copilot pay-as-you-go & feature toggles (Q259–Q260) ──
  {
    id: 259, domain: "Copilot & Agent Administration",
    question: "What is the SharePoint pay-as-you-go model for Microsoft 365 Copilot and when is it appropriate?",
    options: ["A SharePoint storage billing model unrelated to Copilot", "A consumption-based licensing model where Copilot capabilities in SharePoint (such as agents embedded in sites) are billed per interaction rather than requiring a per-user monthly Copilot license — suitable for broad, occasional use cases like an intranet assistant available to all employees", "A model where SharePoint admins pay per site where Copilot is enabled", "The same as the standard Copilot monthly subscription but branded for SharePoint"],
    correct: 1,
    explanation: "SharePoint Copilot pay-as-you-go allows organizations to deploy Copilot-powered experiences (like SharePoint agents) without assigning individual Copilot licenses to every user. Billing is per message/interaction. This is cost-effective when many users interact occasionally — for example, an HR intranet agent used by all employees a few times per month.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/pay-as-you-go/overview",
    sourceLabel: "Microsoft Learn – Microsoft 365 Copilot pay-as-you-go overview"
  },
  {
    id: 260, domain: "Copilot & Agent Administration",
    question: "Where does an administrator go to enable or disable specific Microsoft 365 Copilot features for their organization, and give an example of a feature that can be toggled?",
    options: ["Copilot features can only be enabled or disabled by Microsoft — administrators have no control", "In the Microsoft 365 admin center under Settings > Copilot, administrators can enable or disable features such as Copilot chat (web-grounded), web search in Copilot, Copilot in specific apps (Teams, Outlook), and whether users can access Copilot Studio to build agents", "Copilot feature toggles are configured in the Microsoft Entra admin center", "Feature toggles for Copilot are only available via PowerShell cmdlets"],
    correct: 1,
    explanation: "The Microsoft 365 admin center (Settings > Copilot) provides a central location to manage Copilot features. Administrators can: enable/disable Copilot chat with web access, control whether Copilot can reference web content, manage access to Microsoft Copilot Studio for agent building, and configure which apps have Copilot capabilities enabled. This allows phased rollouts and compliance-driven restrictions.",
    source: "https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-setup",
    sourceLabel: "Microsoft Learn – Set up Microsoft 365 Copilot"
  }
];

export default QUESTIONS;
