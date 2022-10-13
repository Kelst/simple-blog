import React from 'react';
import styles from './index.module.scss';
import cl from 'classnames';
import BlockContent from '@sanity/block-content-to-react';
import { clientConfig } from '../../lib/client';
export default function Content({ className, body }) {
 
	return (
		<div className={cl(className, styles.content)}>
			<BlockContent
				blocks={body}
				imageOptions={{ w: 1000, h: 750, fit: 'max' }}
				projectId={clientConfig.projectId}
				dataset={clientConfig.dataset}
			/>
		</div>
	);
}
