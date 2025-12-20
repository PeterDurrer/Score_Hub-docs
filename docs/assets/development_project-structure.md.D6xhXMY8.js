import{_ as s,c as a,o as e,ag as i}from"./chunks/framework.dvv-DFtf.js";const h=JSON.parse('{"title":"Projektstruktur","description":"","frontmatter":{},"headers":[],"relativePath":"development/project-structure.md","filePath":"development/project-structure.md"}'),p={name:"development/project-structure.md"};function t(l,n,o,r,c,u){return e(),a("div",null,[...n[0]||(n[0]=[i(`<h1 id="projektstruktur" tabindex="-1">Projektstruktur <a class="header-anchor" href="#projektstruktur" aria-label="Permalink to &quot;Projektstruktur&quot;">​</a></h1><p>Diese Seite beschreibt die detaillierte Ordnerstruktur von ScoreHub und die Konventionen für die Organisation des Codes.</p><h2 id="vollstandige-projektstruktur" tabindex="-1">Vollständige Projektstruktur <a class="header-anchor" href="#vollstandige-projektstruktur" aria-label="Permalink to &quot;Vollständige Projektstruktur&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ScoreHub/</span></span>
<span class="line"><span>├── .github/</span></span>
<span class="line"><span>│   └── workflows/           # CI/CD Pipelines</span></span>
<span class="line"><span>│       ├── ci.yml          # Continuous Integration</span></span>
<span class="line"><span>│       └── cd.yml          # Continuous Deployment</span></span>
<span class="line"><span>├── .vscode/</span></span>
<span class="line"><span>│   ├── launch.json         # F5 Debug Konfiguration</span></span>
<span class="line"><span>│   ├── tasks.json          # Build Tasks</span></span>
<span class="line"><span>│   └── settings.json       # VS Code Einstellungen</span></span>
<span class="line"><span>├── api/</span></span>
<span class="line"><span>│   ├── src/</span></span>
<span class="line"><span>│   │   ├── functions/      # Azure Functions Endpoints</span></span>
<span class="line"><span>│   │   │   ├── auth.ts     # Authentifizierung</span></span>
<span class="line"><span>│   │   │   ├── clubs.ts    # Vereinsverwaltung</span></span>
<span class="line"><span>│   │   │   ├── competitions.ts # Wettkampfverwaltung</span></span>
<span class="line"><span>│   │   │   ├── health.ts   # Health Check</span></span>
<span class="line"><span>│   │   │   ├── index.ts    # Hauptfunktion</span></span>
<span class="line"><span>│   │   │   ├── results.ts  # Ergebnisverwaltung</span></span>
<span class="line"><span>│   │   │   ├── shooters.ts # Schützenverwaltung</span></span>
<span class="line"><span>│   │   │   └── users.ts    # Benutzerverwaltung</span></span>
<span class="line"><span>│   │   ├── schemas/        # Zod Validierungsschemas</span></span>
<span class="line"><span>│   │   │   └── index.ts    # Schema Definitionen</span></span>
<span class="line"><span>│   │   └── utils/          # Hilfsfunktionen</span></span>
<span class="line"><span>│   │       ├── auth.ts     # Auth Utils</span></span>
<span class="line"><span>│   │       ├── database.ts # DB Verbindung</span></span>
<span class="line"><span>│   │       └── response.ts # Response Helpers</span></span>
<span class="line"><span>│   ├── host.json           # Azure Functions Host Config</span></span>
<span class="line"><span>│   ├── local.settings.json # Lokale Einstellungen</span></span>
<span class="line"><span>│   ├── package.json        # API Dependencies</span></span>
<span class="line"><span>│   └── tsconfig.json       # TypeScript Config</span></span>
<span class="line"><span>├── docs/</span></span>
<span class="line"><span>│   ├── .vitepress/         # VitePress Konfiguration</span></span>
<span class="line"><span>│   ├── api/                # API Dokumentation</span></span>
<span class="line"><span>│   ├── development/        # Entwicklungsanleitungen</span></span>
<span class="line"><span>│   ├── guide/              # Benutzerhandbuch</span></span>
<span class="line"><span>│   ├── setup/              # Setup Anleitungen</span></span>
<span class="line"><span>│   ├── index.md            # Hauptseite</span></span>
<span class="line"><span>│   └── package.json        # Docs Dependencies</span></span>
<span class="line"><span>├── frontend/</span></span>
<span class="line"><span>│   ├── public/             # Statische Assets</span></span>
<span class="line"><span>│   ├── src/</span></span>
<span class="line"><span>│   │   ├── api/            # API Client</span></span>
<span class="line"><span>│   │   │   └── index.ts    # API Funktionen</span></span>
<span class="line"><span>│   │   ├── components/     # Wiederverwendbare Komponenten</span></span>
<span class="line"><span>│   │   │   ├── LanguageSwitcher.tsx</span></span>
<span class="line"><span>│   │   │   ├── Layout.tsx</span></span>
<span class="line"><span>│   │   │   ├── LoadingSpinner.tsx</span></span>
<span class="line"><span>│   │   │   └── ProtectedRoute.tsx</span></span>
<span class="line"><span>│   │   ├── config/         # Konfiguration</span></span>
<span class="line"><span>│   │   ├── contexts/       # React Contexts</span></span>
<span class="line"><span>│   │   │   └── AuthContext.tsx</span></span>
<span class="line"><span>│   │   ├── i18n/           # Internationalisierung</span></span>
<span class="line"><span>│   │   │   ├── config.ts   # i18n Setup</span></span>
<span class="line"><span>│   │   │   └── locales/    # Übersetzungsdateien</span></span>
<span class="line"><span>│   │   ├── pages/          # Seitenkomponenten</span></span>
<span class="line"><span>│   │   │   ├── ClubsPage.tsx</span></span>
<span class="line"><span>│   │   │   └── ...         # Weitere Seiten</span></span>
<span class="line"><span>│   │   ├── App.tsx         # Hauptapp Komponente</span></span>
<span class="line"><span>│   │   ├── index.css       # Global Styles</span></span>
<span class="line"><span>│   │   ├── main.tsx        # App Entry Point</span></span>
<span class="line"><span>│   │   └── vite-env.d.ts   # Vite TypeScript Types</span></span>
<span class="line"><span>│   ├── index.html          # HTML Template</span></span>
<span class="line"><span>│   ├── package.json        # Frontend Dependencies</span></span>
<span class="line"><span>│   ├── postcss.config.js   # PostCSS Config</span></span>
<span class="line"><span>│   ├── tailwind.config.js  # Tailwind Config</span></span>
<span class="line"><span>│   ├── tsconfig.json       # TypeScript Config</span></span>
<span class="line"><span>│   ├── tsconfig.node.json  # Node TypeScript Config</span></span>
<span class="line"><span>│   └── vite.config.ts      # Vite Config</span></span>
<span class="line"><span>├── infra/</span></span>
<span class="line"><span>│   ├── main.bicep          # Azure Infrastructure as Code</span></span>
<span class="line"><span>│   ├── database-schema.sql # Datenbankschema</span></span>
<span class="line"><span>│   └── parameters/         # Umgebungsparameter</span></span>
<span class="line"><span>├── scripts/</span></span>
<span class="line"><span>│   └── deploy.ps1          # Deployment Skripte</span></span>
<span class="line"><span>├── setup/</span></span>
<span class="line"><span>│   ├── common/             # Gemeinsame Setup Dateien</span></span>
<span class="line"><span>│   │   ├── roles-setup.sql # Datenbankrollen</span></span>
<span class="line"><span>│   │   └── seed-data.sql   # Testdaten</span></span>
<span class="line"><span>│   ├── local/              # Lokales Setup</span></span>
<span class="line"><span>│   │   ├── MANUAL_SETUP.md # Manuelle Setup Anleitung</span></span>
<span class="line"><span>│   │   └── setup-local.ps1 # Lokales Setup Skript</span></span>
<span class="line"><span>│   ├── production/         # Produktionssetup</span></span>
<span class="line"><span>│   │   ├── deploy-production.ps1</span></span>
<span class="line"><span>│   │   └── PRODUCTION_SETUP.md</span></span>
<span class="line"><span>│   └── staging/            # Staging Setup</span></span>
<span class="line"><span>│       ├── deploy-staging.ps1</span></span>
<span class="line"><span>│       ├── init-database.sql</span></span>
<span class="line"><span>│       └── STAGING_SETUP.md</span></span>
<span class="line"><span>├── .gitignore              # Git Ignore Regeln</span></span>
<span class="line"><span>├── LICENSE                 # Lizenz</span></span>
<span class="line"><span>├── package.json            # Root Workspace Config</span></span>
<span class="line"><span>├── README.md               # Projekt README</span></span>
<span class="line"><span>├── ScoreHub.code-workspace # VS Code Workspace</span></span>
<span class="line"><span>└── staticwebapp.config.json # Azure Static Web App Config</span></span></code></pre></div><h2 id="ordner-konventionen" tabindex="-1">Ordner Konventionen <a class="header-anchor" href="#ordner-konventionen" aria-label="Permalink to &quot;Ordner Konventionen&quot;">​</a></h2><h3 id="api-api" tabindex="-1">API (<code>api/</code>) <a class="header-anchor" href="#api-api" aria-label="Permalink to &quot;API (\`api/\`)&quot;">​</a></h3><ul><li><p><strong>functions/</strong>: Azure Functions Endpoints</p><ul><li>Eine Datei pro Ressource/Domäne</li><li>RESTful Namensgebung (z.B. <code>users.ts</code>, <code>clubs.ts</code>)</li><li>Export der Hauptfunktion als <code>default</code></li></ul></li><li><p><strong>schemas/</strong>: Zod Validierungsschemas</p><ul><li>Zentralisierte Schema-Definitionen</li><li>Wiederverwendung über mehrere Endpoints</li></ul></li><li><p><strong>utils/</strong>: Hilfsfunktionen</p><ul><li>Datenbankverbindungen</li><li>Authentifizierungs-Helper</li><li>Response-Formatierung</li></ul></li></ul><h3 id="frontend-frontend" tabindex="-1">Frontend (<code>frontend/</code>) <a class="header-anchor" href="#frontend-frontend" aria-label="Permalink to &quot;Frontend (\`frontend/\`)&quot;">​</a></h3><ul><li><p><strong>components/</strong>: Wiederverwendbare UI-Komponenten</p><ul><li>PascalCase Dateinamen</li><li>Index-Dateien für einfachere Imports</li></ul></li><li><p><strong>pages/</strong>: Seitenkomponenten</p><ul><li>Eine Komponente pro Route</li><li>Verwenden des Layout-Kontexts</li></ul></li><li><p><strong>contexts/</strong>: React Contexts</p><ul><li>State-Management für globale Zustände</li><li>Authentifizierung, Theme, etc.</li></ul></li><li><p><strong>api/</strong>: API Client</p><ul><li>Zentralisierter API-Zugriff</li><li>TypeScript Typen für API Responses</li></ul></li></ul><h3 id="dokumentation-docs" tabindex="-1">Dokumentation (<code>docs/</code>) <a class="header-anchor" href="#dokumentation-docs" aria-label="Permalink to &quot;Dokumentation (\`docs/\`)&quot;">​</a></h3><ul><li><strong>api/</strong>: API-Referenz</li><li><strong>development/</strong>: Entwicklungsanleitungen</li><li><strong>guide/</strong>: Benutzerhandbuch</li><li><strong>setup/</strong>: Setup und Deployment</li></ul><h3 id="infrastruktur-infra" tabindex="-1">Infrastruktur (<code>infra/</code>) <a class="header-anchor" href="#infrastruktur-infra" aria-label="Permalink to &quot;Infrastruktur (\`infra/\`)&quot;">​</a></h3><ul><li><strong>main.bicep</strong>: Azure Ressourcen-Definitionen</li><li><strong>database-schema.sql</strong>: Datenbank-Schema</li><li><strong>parameters/</strong>: Umgebungsspezifische Parameter</li></ul><h2 id="code-organisation-prinzipien" tabindex="-1">Code Organisation Prinzipien <a class="header-anchor" href="#code-organisation-prinzipien" aria-label="Permalink to &quot;Code Organisation Prinzipien&quot;">​</a></h2><h3 id="separation-of-concerns" tabindex="-1">Separation of Concerns <a class="header-anchor" href="#separation-of-concerns" aria-label="Permalink to &quot;Separation of Concerns&quot;">​</a></h3><ul><li>API-Logik von UI-Logik trennen</li><li>Geschäftslogik von Infrastruktur trennen</li><li>Konfiguration von Code trennen</li></ul><h3 id="dry-don-t-repeat-yourself" tabindex="-1">DRY (Don&#39;t Repeat Yourself) <a class="header-anchor" href="#dry-don-t-repeat-yourself" aria-label="Permalink to &quot;DRY (Don&#39;t Repeat Yourself)&quot;">​</a></h3><ul><li>Gemeinsame Funktionen in Utils auslagern</li><li>Wiederverwendbare Komponenten erstellen</li><li>Zentralisierte Konfigurationen</li></ul><h3 id="single-responsibility" tabindex="-1">Single Responsibility <a class="header-anchor" href="#single-responsibility" aria-label="Permalink to &quot;Single Responsibility&quot;">​</a></h3><ul><li>Eine Funktion/Komponente = Eine Verantwortlichkeit</li><li>Klare Schnittstellen definieren</li><li>Abhängigkeiten minimieren</li></ul><h2 id="datei-namensgebung" tabindex="-1">Datei Namensgebung <a class="header-anchor" href="#datei-namensgebung" aria-label="Permalink to &quot;Datei Namensgebung&quot;">​</a></h2><h3 id="typescript-javascript" tabindex="-1">TypeScript/JavaScript <a class="header-anchor" href="#typescript-javascript" aria-label="Permalink to &quot;TypeScript/JavaScript&quot;">​</a></h3><ul><li>PascalCase für Komponenten: <code>UserProfile.tsx</code></li><li>camelCase für Utilities: <code>formatDate.ts</code></li><li>kebab-case für Konfigurationsdateien: <code>vite.config.ts</code></li></ul><h3 id="markdown" tabindex="-1">Markdown <a class="header-anchor" href="#markdown" aria-label="Permalink to &quot;Markdown&quot;">​</a></h3><ul><li>kebab-case für Dokumentation: <code>project-structure.md</code></li><li>Index-Dateien für Ordner: <code>index.md</code></li></ul><h2 id="import-konventionen" tabindex="-1">Import Konventionen <a class="header-anchor" href="#import-konventionen" aria-label="Permalink to &quot;Import Konventionen&quot;">​</a></h2><h3 id="absolute-imports" tabindex="-1">Absolute Imports <a class="header-anchor" href="#absolute-imports" aria-label="Permalink to &quot;Absolute Imports&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ✅ Empfohlen</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { apiClient } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@/api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Layout } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@/components/Layout&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ❌ Vermeiden</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { apiClient } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;../../../api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Layout } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;../components/Layout&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="barrel-exports" tabindex="-1">Barrel Exports <a class="header-anchor" href="#barrel-exports" aria-label="Permalink to &quot;Barrel Exports&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// components/index.ts</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Layout } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./Layout&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LoadingSpinner } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./LoadingSpinner&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Verwendung</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Layout, LoadingSpinner } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@/components&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="umgebungsabhangige-konfiguration" tabindex="-1">Umgebungsabhängige Konfiguration <a class="header-anchor" href="#umgebungsabhangige-konfiguration" aria-label="Permalink to &quot;Umgebungsabhängige Konfiguration&quot;">​</a></h2><ul><li><strong>Lokale Entwicklung</strong>: <code>.vscode/</code> und lokale Settings</li><li><strong>CI/CD</strong>: GitHub Actions Workflows</li><li><strong>Deployment</strong>: Azure Ressourcen Templates</li><li><strong>Secrets</strong>: Azure Key Vault für sensible Daten</li></ul>`,32)])])}const k=s(p,[["render",t]]);export{h as __pageData,k as default};
