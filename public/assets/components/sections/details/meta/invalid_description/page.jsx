define([
	'react',
	'jsx!components/sections/details/meta/invalid_description/page',
	'jsx!components/sections/details/meta/invalid_description/table',
	'jsx!components/sections/details/page'
], function(
	React,
	Details_Page,
	Table,
	Page
) {
	return React.createClass({
		render: function() {
			var stat = {
				'section': 'meta',
				'code': 'invalid_description'
			};

			var table = (<Table site_id={this.props.site_id} />);

			return (
				<Page site_id={this.props.site_id} stat={stat} table={table} />
			);
		}
	});
});
