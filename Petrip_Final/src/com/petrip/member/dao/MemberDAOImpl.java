package com.petrip.member.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.petrip.member.dto.Member;
import com.petrip.util.DBUtil;

public class MemberDAOImpl implements MemberDAO {
// ------------------------ db 연동 ---------------------------
	private DBUtil db;

	private MemberDAOImpl() {
		db = DBUtil.getInstance();
	}
// -----------------------------------------------------------

	
// ----------------------- 싱글톤 객체 ---------------------------
	private static MemberDAO instance = new MemberDAOImpl();

	public static MemberDAO getInstance() {
		return instance;
	}
// -----------------------------------------------------------

	
	@Override
	public Member accessLogin(Member member) throws SQLException {
		try (
				Connection con = db.getConnection();
				PreparedStatement stat = con.prepareStatement(
						"select id, name "
					  + "from user "
					  + "where id = ? "
					  + "and password = ?"
				);
			) {
			int idx = 1;
			stat.setString(idx++, member.getId());
			stat.setString(idx++, member.getPassword());

			ResultSet rs = stat.executeQuery();
			if (rs.next()) {
				Member memberInfo = new Member();

				memberInfo.setId(rs.getString("id"));
				memberInfo.setName(rs.getString("name"));

				return memberInfo;
			}
		}
		return null;
	}

}
