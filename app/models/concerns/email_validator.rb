class EmailValidator < ActiveModel::Validator
  def validate(record)
    if record.email != URI::MailTo::EMAIL_REGEXP
      record.errors.add(:email, 'Email format is wrong.')
    end

    if User.find_by(email: record.email)
      record.errors.add(:email, 'Email is taken.')
    end
  end
end
