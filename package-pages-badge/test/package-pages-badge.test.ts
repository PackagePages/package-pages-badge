import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { PackagePagesBadge } from '../src/PackagePagesBadge.js';
import '../src/package-pages-badge.js';

describe('PackagePagesBadge', () => {
  it('if dark mode passed in, internal mode is also dark', async () => {
    const el = await fixture<PackagePagesBadge>(
      html`<package-pages-badge mode="dark"></package-pages-badge>`
    );
    expect(el.mode).to.equal('dark');
  });

  it('if light mode passed in, internal mode is also light', async () => {
    const el = await fixture<PackagePagesBadge>(
      html`<package-pages-badge mode="light"></package-pages-badge>`
    );
    expect(el.mode).to.equal('light');
    expect(el.shadowRoot?.querySelector('.light-badge')).is.visible;

    const dark = el.shadowRoot?.querySelector('.dark-badge');
    // @ts-ignore
    expect(getComputedStyle(dark).display).to.equal('none');
  });

  it('if no mode passed in, internal mode is browser', async () => {
    const el = await fixture<PackagePagesBadge>(
      html`<package-pages-badge></package-pages-badge>`
    );
    expect(el.mode).to.equal('browser');
  });

  it('if dark mode is passed in the dark mode image should be visible', async () => {
    const el = await fixture<PackagePagesBadge>(
      html`<package-pages-badge mode="dark"></package-pages-badge>`
    );
    expect(el.shadowRoot?.querySelector('.dark-badge')).is.visible;

    const light = el.shadowRoot?.querySelector('.light-badge');
    // @ts-ignore
    expect(getComputedStyle(light).display).to.equal('none');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<PackagePagesBadge>(
      html`<package-pages-badge></package-pages-badge>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
