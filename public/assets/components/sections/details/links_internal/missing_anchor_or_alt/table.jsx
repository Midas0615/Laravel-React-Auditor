define([
	'react',
	'underscore',
	'jsx!components/sections/details/links_internal/missing_anchor_or_alt/table',
	'jsx!components/common/table',
	'jsx!components/common/link'
], function(
	React,
	_,
	Details_Table,
	Table,
	Link
) {
	return React.createClass({
		render: function () {
			var self = this;

			var endpoint = '/auditor/links?site_id=' + self.props.site_id + '&type=internal_missing_anchor_or_alt';

			var columns = [
				{
					data: 'url',
					title: 'URL'
				},
				{
					data: 'link_type',
					title: 'Type'
				},
				{
					data: 'pages',
					title: 'Pages'
				}
			];

			var callbacks = {
				onData: function (data) {
					_.each(data, function(row) {
						row.pages = React.renderToStaticMarkup(<Link options={{
							label: row.pages,
							url: '#links_internal/missing_anchor_or_alt/' + self.props.site_id + '/' + row.url_hash
						} } />);
					});

					return data;
				}
			};

			return (
				<Table id="details-table" endpoint={endpoint} columns={columns} callbacks={callbacks} />
			);
		}
	});
});