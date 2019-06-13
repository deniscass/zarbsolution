package org.Mapa.rest;

import java.util.Date;
import java.text.SimpleDateFormat;

import javax.ejb.Stateless;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriBuilder;

/**
 * 
 */
@Stateless
@Path("/data")
public class DataAtualEndpoint {

	@GET
	@Produces("text/plain")
	public Response getData() {
		Date data = new Date();
		SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String dateStr = format1.format(data);  

		return Response.ok(dateStr).build();
	}
}
