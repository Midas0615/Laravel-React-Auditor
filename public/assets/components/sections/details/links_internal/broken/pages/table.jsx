define([
	'react',
	'jsx!components/sections/details/links_internal/broken/pages/table',
	'jsx!components/common/table'
], function(
	React,
	Details_Subtable,
	Table
) {
	return React.createClass({
		render: function() {
			var self = this;

			var endpoint = '/auditor/links/pages?site_id=' + self.props.site_id + '&url_hash=' + self.props.url_hash + '&type=internal_broken';

			var columns = [
				{
					data: 'page_title',
					title: 'Page Title'
				},
				{
					data: 'url',
					title: 'Page URL'
				}
			];

			return (
				<Table id="details-sub-table" endpoint={endpoint} columns={columns} />
			);
		}
	});
});