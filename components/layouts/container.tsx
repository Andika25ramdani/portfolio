import * as React from 'react';

import { mergeClasses } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {}

const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, children, ...props }: ContainerProps, ref) => {
    return (
      <section
        className={mergeClasses(
          'container-parent',
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="container-content">
          {children}
        </div>
      </section>
    );
  }
);

Container.displayName = 'Container';

export default Container;
