export default String.raw`
/* Build & deployment surfaces: layout classes that delivery.mjs needs on top of
   the shared af-* form primitives. Every color is a DSH alias token so the page
   follows the host theme instead of Studio's own brand values. */
[data-studio-delivery] { container-type: inline-size; container-name: studio-delivery; max-width: 960px; margin: 0 auto; color: var(--dsw-alias-label-primary); font-size: 14px; line-height: 22px; min-width: 0; }
[data-studio-delivery] [data-studio-heading] { margin-bottom: 20px; align-items: center; }
[data-studio-delivery] .af-section { padding: 0; margin-bottom: 0; border: 0; }
.ad-subject { margin-bottom: 28px; }
[data-studio-delivery] .ad-agent-picker { width: 180px; max-width: 100%; height: 32px; text-overflow: ellipsis; }
.ad-banner { margin: 0 0 20px !important; padding: 10px 14px; border-radius: var(--dsw-radius-md,12px); background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary) !important; font-size: 13px !important; line-height: 20px !important; }
.ad-banner[data-tone="danger"] { color: var(--dsw-alias-state-error-primary,#b42318) !important; }

/* Release pipeline: build -> deploy -> instances read as one sequence. Each step
   hangs off a left rail whose marker shows done / current / pending. */
[data-studio-delivery] [data-delivery-step] { position: relative; padding: 0 0 32px 44px; }
[data-delivery-step]::before { content: ''; position: absolute; left: 13.5px; top: 36px; bottom: 8px; width: 1px; background: var(--dsw-alias-border-l2); }
[data-studio-delivery] [data-delivery-step="3"] { padding-bottom: 0; }
[data-delivery-step="3"]::before { display: none; }
[data-studio-delivery] [data-delivery-step] > .af-section-head { min-height: 28px; margin-bottom: 12px; }
[data-studio-delivery] [data-delivery-step] > .af-section-head .af-section-title { display: inline-flex; align-items: center; gap: 10px; margin: 0; color: var(--dsw-alias-label-primary); font-size: 15px; line-height: 28px; font-weight: 500; }
[data-studio-delivery] .af-section-meta { font-size: 13px; }
.ad-step-number { position: absolute; left: 0; top: 0; display: inline-grid; place-items: center; box-sizing: border-box; width: 28px; height: 28px; border: 1px solid var(--dsw-alias-border-l3); border-radius: 50%; color: var(--dsw-alias-label-tertiary); font-size: 13px; font-weight: 500; line-height: 1; }
.ad-step-number[data-current] { background: var(--dsw-alias-button-primary-fill); color: var(--dsw-alias-label-primary-foreground); border-color: transparent; }
.ad-step-number[data-done] { border-color: transparent; background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 14%, transparent); color: var(--dsw-alias-state-success-primary); }
.ad-step-dimmed > .ad-panel > :is(.ad-fields,.ad-facts,.studio-cfoot) { opacity: .55; }
[data-studio-delivery] .af-note { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }

/* A step's panel: headline, editable fields, stated facts, then one action row. */
.ad-panel { padding: 0; border: .5px solid var(--dsw-alias-border-l2); border-radius: var(--dsw-radius-xl,16px); }
.ad-panel > * + * { border-top: .5px solid var(--dsw-alias-border-l2); }
.ad-headline { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 16px 20px; }
.ad-headline-text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.ad-headline-actions { display: flex; align-items: center; gap: 8px; flex: none; min-width: 0; max-width: 100%; }
[data-studio-delivery] .ad-build-picker { width: 280px; max-width: 100%; min-width: 0; height: 32px; text-overflow: ellipsis; }
.ad-headline-text > strong { font-size: 14px; line-height: 22px; font-weight: 500; }
.ad-headline-text > span { font-size: 12px; line-height: 18px; color: var(--dsw-alias-label-tertiary); }
.ad-fields { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 16px 24px; padding: 16px 20px; }
.ad-field { display: flex; flex-direction: column; min-width: 0; }
.ad-field[data-wide] { grid-column: 1 / -1; }
.ad-field-label { margin-bottom: 6px; font-size: 13px; line-height: 20px; color: var(--dsw-alias-label-secondary); }
[data-studio-delivery] .ad-field :is(.af-select,.af-input) { box-sizing: border-box; width: 100%; min-width: 0; height: 36px; text-overflow: ellipsis; }
.ad-field .af-switch { min-height: 36px; font-size: 13px; }
.ad-field-hint { margin-top: 6px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-size: 12px; line-height: 18px; color: var(--dsw-alias-label-tertiary); }
.ad-facts { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 12px 24px; margin: 0; padding: 14px 20px; }
.ad-fact { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.ad-fact dt { font-size: 12px; line-height: 18px; color: var(--dsw-alias-label-tertiary); }
.ad-fact dd { margin: 0; font-size: 13px; line-height: 20px; color: var(--dsw-alias-label-primary); overflow-wrap: anywhere; }
.ad-fact-sub { margin-left: 8px; font-size: 12px; color: var(--dsw-alias-label-tertiary); }
[data-studio-delivery] .studio-cfoot { justify-content: flex-end; margin: 0; padding: 12px 20px; }
.ad-foot-note { flex: 1; min-width: 0; }
[data-studio-delivery] .ad-foot-note > .af-note { margin: 0; font-size: 13px; line-height: 20px; }
[data-studio-delivery] .ad-panel > .af-details { margin: 0; padding: 12px 20px; }
[data-studio-delivery] .ad-panel > .af-note { margin: 0; padding: 12px 20px; }
[data-studio-delivery] .af-btn { height: 32px; padding: 0 14px; border-radius: 12px; font-size: 13px; }
[data-studio-delivery] .af-btn[data-size="sm"] { height: 28px; padding: 0 10px; border-radius: 8px; font-size: 12px; }
[data-studio-delivery] .af-btn.ad-build-primary[data-variant="primary"]:disabled { background: var(--dsw-alias-button-primary-fill,#0b0b0d) !important; color: var(--dsw-alias-label-primary-foreground,#fff) !important; }
[data-studio-delivery] .af-btn[data-variant="ghost"] { border-color: transparent; background: transparent; }
[data-studio-delivery] :is(.af-input,.af-select,.af-btn,.af-switch):focus-visible { outline: 2px solid var(--dsw-alias-state-business-primary, var(--dsw-alias-brand-primary)); outline-offset: 1px; }

.ad-actions { display: flex; align-items: center; justify-content: flex-end; gap: 8px; flex-wrap: wrap; margin-top: 16px; }
.ad-rollback-picker { width: 260px; max-width: 100%; margin: 8px; }
.ad-head-actions { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }

/* build history */
.ad-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.ad-table th { padding: 8px 12px; text-align: left; font-size: 12px; font-weight: 500; line-height: 18px; color: var(--dsw-alias-label-tertiary); border-bottom: .5px solid var(--dsw-alias-border-l2); background: transparent; }
.ad-table th:first-child { border-top-left-radius: var(--dsw-radius-sm,8px); }
.ad-table th:last-child { border-top-right-radius: var(--dsw-radius-sm,8px); }
.ad-table td { padding: 9px 12px; border-bottom: .5px solid var(--dsw-alias-border-l2); vertical-align: middle; }
.ad-table tr:last-child td { border-bottom: 0; }
.ad-table tr[data-selected="true"] td { background: var(--dsw-alias-interactive-bg-hover); }
.ad-table-cell-actions { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
.ad-table-scroll { overflow-x: auto; border: .5px solid var(--dsw-alias-border-l2); border-radius: var(--dsw-radius-xl,16px); }
.ad-table-scroll .studio-tbl :is(th,td):first-child { padding-left: 20px; }
.ad-table-scroll .studio-tbl :is(th,td):last-child { padding-right: 20px; }
.ad-table-scroll .studio-tbl tbody tr:last-child td { border-bottom: 0; }
.ad-table-scroll .studio-tbl th { font-size: 12px; }
[data-studio-delivery] .ad-empty { margin: 0; padding: 28px 20px; border: .5px solid var(--dsw-alias-border-l2); border-radius: var(--dsw-radius-xl,16px); text-align: center; font-size: 13px; line-height: 20px; white-space: normal; }
.ad-records-table { width: 100%; min-width: 640px; }
.ad-local-records { width: 100%; }
.ad-records-table td { vertical-align: middle; }
.ad-records-table .ad-record-actions { flex-wrap: nowrap; margin: 0; }
.ad-records-table .ad-record-title { font-size: 13px; }
.ad-records-table .ad-record-meta { display: block; margin: 0; }
.ad-records-table th:last-child { text-align: right; }
.ad-records-table td:last-child .ad-record-actions { justify-content: flex-end; }
.ad-records-table .ad-record-detail > td { padding-top: 0; }
.ad-records-table .ad-record-detail .af-note { margin: 0 0 8px; }
.ad-record-scope > .studio-tabs { flex-wrap: wrap; gap: 4px; padding: 0; margin-bottom: 16px; background: transparent; }
.ad-record-scope > .studio-tabs > button { height: 28px; padding: 0 10px; border-radius: 8px; color: var(--dsw-alias-label-tertiary); font-size: 13px; }
/* This scope re-declares the tab label color after the generic .studio-tabs
   hover rule, so the neutral hover surface would otherwise land under the
   tertiary label. Restore the hover color with a matching scope. */
.ad-record-scope > .studio-tabs > button:not([aria-selected="true"]):hover { color: var(--dsw-alias-label-primary); }
.ad-record-scope > .studio-tabs > button[aria-selected="true"] { color: var(--dsw-alias-label-primary); background: var(--dsw-alias-bg-module-platform); box-shadow: none; }
.ad-radio { display: inline-flex; align-items: center; gap: 8px; white-space: nowrap; cursor: pointer; }

/* checked deployment plan: the confirmation card under the deploy step */
.ad-preview { margin: 12px 0 0; padding: 0; border: .5px solid var(--dsw-alias-border-l3); border-radius: 16px; background: var(--dsw-alias-bg-layer-1); }
.ad-preview-head { display: flex; align-items: center; gap: 8px; padding: 16px 20px 0; font-size: 14px; line-height: 22px; font-weight: 500; }
.ad-preview-head > strong { font-weight: 500; }
.ad-checks { display: flex; flex-wrap: wrap; gap: 8px 20px; padding: 0; margin: 8px 20px 0; list-style: none; font-size: 13px; }
.ad-preview .af-summary { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); column-gap: 32px; margin: 12px 20px 0; border-top: .5px solid var(--dsw-alias-border-l2); }
.ad-warnings { margin: 12px 20px 0; padding-left: 18px; font-size: 12px; line-height: 18px; color: var(--dsw-alias-state-warn-primary,#946200); }
.ad-warnings > li + li { margin-top: 2px; }
.ad-warnings > li { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ad-preview > .studio-cfoot { margin-top: 4px; }

/* deployment records */
.ad-list { border: .5px solid var(--dsw-alias-border-l2); border-radius: var(--dsw-radius-md,12px); overflow: hidden; }
.ad-record { padding: 14px 16px; border-top: .5px solid var(--dsw-alias-border-l2); }
.ad-record:first-child { border-top: 0; }
.ad-record-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
.ad-record-title { font-size: 14px; font-weight: 500; line-height: 22px; }
.ad-record-meta { margin: 4px 0 0; font-size: 12px; line-height: 18px; color: var(--dsw-alias-label-tertiary); overflow-wrap: anywhere; }
.ad-record-failure { color: var(--dsw-alias-state-error-primary,#b42318); }
.ad-record-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
.ad-detail { display: grid; grid-template-columns: max-content minmax(0,1fr); gap: 8px 20px; margin: 12px 0 0; padding: 12px 14px; border-radius: var(--dsw-radius-md,12px); background: var(--dsw-alias-bg-module-platform, var(--dsw-alias-bg-layer-2)); font-size: 12px; line-height: 18px; }
.ad-detail dt { color: var(--dsw-alias-label-tertiary); }
.ad-detail dd { margin: 0; overflow-wrap: anywhere; }
.ad-log { margin: 12px 0 0; padding: 12px 14px; max-height: 280px; overflow: auto; border-radius: var(--dsw-radius-md,12px); background: var(--dsw-alias-bg-module-platform, var(--dsw-alias-bg-layer-2)); white-space: pre-wrap; overflow-wrap: anywhere; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 12px; line-height: 18px; }
.ad-pager { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; padding: 12px 4px 0; font-size: 12px; line-height: 18px; color: var(--dsw-alias-label-tertiary); }
.ad-pager-actions { display: flex; align-items: center; gap: 8px; }

@container studio-delivery (max-width: 820px) {
  [data-studio-delivery] .af-section-head { flex-wrap: wrap; }
  [data-studio-delivery] .ad-actions { justify-content: flex-start; }
  [data-studio-delivery] .ad-head-actions { width: 100%; justify-content: space-between; }
  .ad-preview .af-summary { grid-template-columns: minmax(0,1fr); }
}
@container studio-delivery (max-width: 640px) {
  [data-studio-delivery] [data-delivery-step] { padding-left: 0; }
  [data-delivery-step]::before { display: none; }
  .ad-step-number { position: static; width: 24px; height: 24px; }
  .ad-fields, .ad-facts { grid-template-columns: minmax(0,1fr); }
  .ad-headline, .ad-headline-actions { flex-wrap: wrap; }
  .ad-detail { grid-template-columns: minmax(0,1fr); }
  .ad-table { font-size: 12px; }
  .ad-table th, .ad-table td { padding: 8px; }
  .ad-pager { flex-direction: column; align-items: flex-start; }
}
`;
