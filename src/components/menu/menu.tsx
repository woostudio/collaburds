import { Component, Prop, h, ComponentInterface, Watch, Element, State } from '@stencil/core';
import bulmaCollapsible from '@creativebulma/bulma-collapsible';
import Fragment from 'stencil-fragment';

export interface SubnavItem {
  title?: string;
  path?: string;
  parent?: string;
  order?: number;
  items?: SubnavItem[];
}

/**
 * Menu
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-menu',
  styleUrls: ['menu.scss'],
})
export class Menu implements ComponentInterface {
  @State() _subnavGroups: SubnavItem[] = [];

  /**
   * Subnav
   **/
  @Prop() subnav: string;

  /**
   * Active Subnav Item path
   **/
  @Prop() activeItemPath: string;

  /**
   * CSS Classes
   */
  @Prop() class = '';

  @Element() el: HTMLElement;

  @Watch('subnav')
  subnavGroupsHandler(groups: string) {
    this._subnavGroups = JSON.parse(groups);
  }

  componentWillLoad() {
    this.subnavGroupsHandler(this.subnav);
  }

  componentDidLoad() {
    const collapsibles = this.el.querySelectorAll('.is-collapsible');
    bulmaCollapsible.attach(collapsibles);

    const activeCollapsibles = this.el.querySelectorAll('.is-collapsible.is-active');
    for (let i = 0; i < activeCollapsibles.length; ++i) {
      (activeCollapsibles[i] as HTMLElement).style.height = 'auto';
    }
  }

  render(): JSX.Element {
    return (
      <aside
        class={{
          menu: true,
          [this.class]: Boolean(this.class),
        }}
      >
        {this._subnavGroups &&
          this._subnavGroups.length > 0 &&
          this._subnavGroups.map(group => (
            <Fragment>
              {group.title && group.title.length > 0 && <p class="menu-label">{group.title}</p>}
              {group.items && group.items.length > 0 && (
                <ul class="menu-list menu-list-root">
                  {group.items.map(item => {
                    const hasChildren = item.items && item.items.length > 0;
                    const isActive =
                      this.activeItemPath.indexOf(item.path) === 0 ? 'is-active' : null;
                    const isCollapsible = hasChildren ? 'is-collapsible' : null;
                    const id = isCollapsible
                      ? `nav-${item.path.replace('/', '-').toLowerCase()}`
                      : null;

                    return (
                      <li>
                        <div class="menu-item">
                          <a href={item.path} class={isActive}>
                            {item.title}
                          </a>
                          {hasChildren && (
                            <a href={`#${id}`} data-action="collapse" data-target={id}>
                              <i class="expand fal fa-plus-square"></i>
                              <i class="collapse fal fa-minus-square"></i>
                              <span class="is-sr-only">Toggle sub menu</span>
                            </a>
                          )}
                        </div>
                        {hasChildren && (
                          <ul class={[`menu-list`, isCollapsible, isActive].join(' ')} id={id}>
                            {item.items.map(subitem => (
                              <li>
                                <a
                                  href={subitem.path}
                                  class={this.activeItemPath === subitem.path ? 'is-active' : ''}
                                >
                                  {subitem.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </Fragment>
          ))}
      </aside>
    );
  }
}
